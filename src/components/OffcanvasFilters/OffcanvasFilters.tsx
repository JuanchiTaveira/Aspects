import styles from './OffcanvasFilters.module.scss';

interface Item {
    title: string,
    subItems: string[]
}

export interface OffcanvasFiltersProps {
    collectionItems: {
        items: Item[]
    };

    filterByItems: {
        items: Item[]
    };
}

export const OffcanvasFilters = (props: OffcanvasFiltersProps) => {
    return (
        <form className={styles.offcanvasFilters}>
            <div className="form-check">
                <label className="form-check-label" htmlFor="hideSold">
                    Hide sold out products
                </label>
                <input className="form-check-input" type="checkbox" value="" id="hideSold" />
            </div>
            <div className={`accordion accordion-flush ${styles.accordionFilters}`} id="accordionFilters">

                <h3>COLLECTIONS</h3>
                {props.collectionItems.items.map((item, index) => {
                    return (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target={`#collecionColapse${index}`} aria-expanded="false" aria-controls={`collecionColapse${index}`}>
                                    {item.title}
                                </button>
                            </h2>
                            <div id={`collecionColapse${index}`} className={`accordion-collapse collapse ${styles.collapseItem}`}
                                aria-labelledby="headingOne" data-bs-parent="#accordionFilters">
                                <div className={`accordion-body ${styles.accordionBody}`}>
                                    <div className={`list-group ${styles.listGroup}`}>
                                        {item.subItems.map((subItem, index) => {
                                            return (
                                                <button key={index} type="button" className="list-group-item list-group-item-action">{subItem}</button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <h3>FILTER BY</h3>
                {props.filterByItems.items.map((item, index) => {
                    return (
                        <div className={`accordion-item ${styles.accordionItem}`} key={index}>
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target={`#sizeCollapse${index}`} aria-expanded="false" aria-controls={`sizeCollapse${index}`}>
                                    {item.title}
                                </button>
                            </h2>
                            <div id={`sizeCollapse${index}`} className={`accordion-collapse collapse ${styles.collapseItem}`}
                                aria-labelledby="headingTwo" data-bs-parent="#accordionFilters">
                                <div className={`accordion-body ${styles.accordionBody}`}>
                                    <div className={`list-group ${styles.listGroup}`}>
                                        {item.subItems.map((subItem, index) => {
                                            return (
                                                <div className="form-check" key={index}>
                                                    <label className="form-check-label" htmlFor="hideSold">
                                                        {subItem}
                                                    </label>
                                                    <input className="form-check-input" type="checkbox" value="" id="hideSold" />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </form>
    );

}

export default OffcanvasFilters;
