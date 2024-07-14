import { useEffect, useState } from 'react';
import styles from './ProductFilter.module.scss';

export const ProductFilter = () => {

    const [isVisible, setIsVisible] = useState(true);
    
    useEffect(() => {
        const mainElement = document.querySelector("main");
        let lastScrollY = mainElement!.scrollTop;

        const handleScroll = () => {            
            const currentScrollY = mainElement!.scrollTop;
            const shouldBecomeVisible = currentScrollY < lastScrollY;

            // Solo actualiza el estado si el valor ha cambiado
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
        <div className={`sticky top-0 z-[1] ${styles.filters} ${!isVisible ? "hidden" : ""}`}>
            <div className={`flex justify-between items-center border-b`}>
                <button className="text-sm px-4 py-4">Shop All</button>
                <button className="text-sm px-4 py-4">Refine</button>
            </div>
        </div>
    )
}

export default ProductFilter;