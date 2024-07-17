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
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form>
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="hideSold">
                                Hide sold out products
                            </label>
                            <input className="form-check-input" type="checkbox" value="" id="hideSold" />
                        </div>
                        <h3>COLLECTIONS</h3>
                        <div className="accordion accordion-flush" id="accordionFilters">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collecionColapse" aria-expanded="false" aria-controls="collecionColapse">
                                        Category
                                    </button>
                                </h2>
                                <div id="collecionColapse" className={`accordion-collapse collapse ${styles.collapseItem}`}
                                    aria-labelledby="headingOne" data-bs-parent="#accordionFilters">
                                    <div className={`accordion-body ${styles.accordionBody}`}>
                                        <div className={`list-group ${styles.listGroup}`}>
                                            <button type="button" className="list-group-item list-group-item-action">Shirting</button>
                                            <button type="button" className="list-group-item list-group-item-action">Sweaters</button>
                                            <button type="button" className="list-group-item list-group-item-action">Shorts</button>
                                            <button type="button" className="list-group-item list-group-item-action">Headwear</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3>FILTER BY</h3>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#sizeCollapse" aria-expanded="false" aria-controls="sizeCollapse">
                                        Size
                                    </button>
                                </h2>
                                <div id="sizeCollapse" className={`accordion-collapse collapse ${styles.collapseItem}`}
                                    aria-labelledby="headingTwo" data-bs-parent="#accordionFilters">
                                    <div className={`accordion-body ${styles.accordionBody}`}>
                                        <div className={`list-group ${styles.listGroup}`}>
                                            <div className="form-check">
                                                <label className="form-check-label" htmlFor="hideSold">
                                                    XS
                                                </label>
                                                <input className="form-check-input" type="checkbox" value="" id="hideSold" />
                                            </div>

                                            <div className="form-check">
                                                <label className="form-check-label" htmlFor="hideSold">
                                                    S
                                                </label>
                                                <input className="form-check-input" type="checkbox" value="" id="hideSold" />
                                            </div>

                                            <div className="form-check">
                                                <label className="form-check-label" htmlFor="hideSold">
                                                    M
                                                </label>
                                                <input className="form-check-input" type="checkbox" value="" id="hideSold" />
                                            </div>

                                            <div className="form-check">
                                                <label className="form-check-label" htmlFor="hideSold">
                                                    L
                                                </label>
                                                <input className="form-check-input" type="checkbox" value="" id="hideSold" />
                                            </div>

                                            <div className="form-check">
                                                <label className="form-check-label" htmlFor="hideSold">
                                                    XL
                                                </label>
                                                <input className="form-check-input" type="checkbox" value="" id="hideSold" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#colorCollapse" aria-expanded="false" aria-controls="colorCollapse">
                                        Color
                                    </button>
                                </h2>
                                <div id="colorCollapse" className={`accordion-collapse collapse ${styles.collapseItem}`}
                                    aria-labelledby="headingTwo" data-bs-parent="#accordionFilters">
                                    <div className={`accordion-body ${styles.accordionBody}`}>
                                        <div className={`list-group ${styles.listGroup}`}>
                                            <div className="form-check">
                                                <label className="form-check-label" htmlFor="hideSold">
                                                    Black
                                                </label>
                                                <input className="form-check-input" type="checkbox" value="" id="hideSold" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#viewOptionsCollapse" aria-expanded="false" aria-controls="viewOptionsCollapse">
                                        View Options
                                    </button>
                                </h2>
                                <div id="viewOptionsCollapse" className={`accordion-collapse collapse ${styles.collapseItem}`}
                                    aria-labelledby="headingThree" data-bs-parent="#accordionFilters">
                                    <div className={`accordion-body ${styles.accordionBody}`}>
                                        {/* TODO: add view options */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ProductFilter;
