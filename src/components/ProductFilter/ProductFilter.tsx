import { useEffect, useState } from 'react';
import styles from './ProductFilter.module.scss';

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

    return (
        <>
            <div className={`sticky top-0 ${styles.filters} ${isVisible ? styles.visible : styles.hidden}`}>
                <div className={`flex justify-between items-center border-b`}>
                    <button className="text-sm px-4 py-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilters" aria-controls="offcanvasFilters">Refine</button>
                    <button className="text-sm px-4 py-4">Shop All</button>
                </div>
            </div>
            <div className={`offcanvas offcanvas-start ${styles.offcanvasFilters}`} tabIndex={-1} id="offcanvasFilters" aria-labelledby="offcanvasFiltersLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasFiltersLabel">Filter Options</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    Content for your offcanvas goes here.
                </div>
            </div>
        </>
    );
}

export default ProductFilter;
