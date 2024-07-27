import { useEffect, useState } from 'react';
import styles from './ProductFilter.module.scss';
import OffcanvasFilters, { OffcanvasFiltersProps } from '../OffcanvasFilters/OffcanvasFilters';
import closeButtonBlack from '../../assets/icons/closeButtonBlack150x150.png';

const ProductFilter = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const mainElement = document.querySelector("main");
        let lastScrollY = mainElement!.scrollTop;

        const handleScroll = () => {
            const currentScrollY = mainElement!.scrollTop;
            const shouldBecomeVisible = currentScrollY < lastScrollY;

            if (shouldBecomeVisible !== isVisible) {
                setIsVisible(shouldBecomeVisible);
            }

            lastScrollY = currentScrollY;
        };

        mainElement!.addEventListener("scroll", handleScroll);

        return () => {
            mainElement!.removeEventListener("scroll", handleScroll);
        };
    }, [isVisible]);

    const offcanvasFiltersProps: OffcanvasFiltersProps = {
        collectionItems: {
            items: [
                {
                    title: "Category",
                    subItems: ["Shirting", "Sweaters", "Bottoms", "Headwear", "Accessories"]
                }]
        },
        filterByItems: {
            items: [
                {
                    title: "Color",
                    subItems: ["Black", "White", "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink"]
                },
                {
                    title: "Size",
                    subItems: ["XS", "S", "M", "L", "XL", "XXL"]
                },
                {
                    title: "Price",
                    subItems: ["$0 - $50", "$50 - $100", "$100 - $150", "$150 - $200", "$200 - $250", "$250 - $300"]
                }]
        }
    }

    return (
        <>
            <div className={`sticky top-0 ${styles.filters} ${isVisible ? styles.visible : styles.hidden}`}>
                <div className={`flex justify-between items-center border-b`}>
                    <button className="text-sm px-4 py-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilters" aria-controls="offcanvasFilters">Refine</button>
                    <button className="text-sm px-4 py-4">Shop All</button>
                </div>
            </div>
            <div className={`offcanvas offcanvas-start ${styles.offcanvasFilters} p-4`} tabIndex={-1} id="offcanvasFilters" aria-labelledby="offcanvasFiltersLabel">
                <div className="offcanvas-header flex flex-row justify-end pr-[12px]">
                    <button type="button" className="text-reset shadow-none" data-bs-dismiss="offcanvas" aria-label="Close">
                        <img src={closeButtonBlack} alt="Close filters" className="h-6"/>
                    </button>
                </div>
                <div className="offcanvas-body">
                    <OffcanvasFilters collectionItems={offcanvasFiltersProps.collectionItems} filterByItems={offcanvasFiltersProps.filterByItems} />
                </div>
            </div>
        </>
    );
}

export default ProductFilter;
