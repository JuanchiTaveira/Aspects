import RoundedBlackCheckbox from '../RoundedBlackCheckbox/RoundedBlackCheckbox';
import ViewOptions from '../ViewOptions/ViewOptions';
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
            <div className="px-0 form-check flex items-center space-x-2 justify-between">
                <label className={`${styles.hideSoldOut} form-check-label`} htmlFor="hideSoldOut">
                    Hide sold out products
                </label>
                <RoundedBlackCheckbox id="hideSoldOut" name="hideSoldOut" type="checkbox" />
            </div>
            <div className={`accordion accordion-flush ${styles.accordionFilters}`} id="accordionFilters">

                <h3 className={props.collectionItems.items.length > 1 ? "pt-[24px] pb-[8px]" : "py-4"}>COLLECTIONS</h3>
                {props.collectionItems.items.map((item, index) => {
                    return (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse"
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

                <h3 className={props.filterByItems.items.length > 1 ? "pt-[24px] pb-[8px]" : "py-4"}>FILTER BY</h3>
                {props.filterByItems.items.map((item, index) => {
                    return (
                        <div className={`accordion-item`} key={index}>
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse"
                                    data-bs-target={`#sizeCollapse${index}`} aria-expanded="false" aria-controls={`sizeCollapse${index}`}>
                                    {item.title}
                                </button>
                            </h2>
                            <div id={`sizeCollapse${index}`} className={`accordion-collapse collapse ${styles.collapseItem}`}
                                aria-labelledby="headingTwo" data-bs-parent="#accordionFilters">
                                <div className={`accordion-body ${styles.accordionBody} pb-2`}>
                                    <div className={`list-group ${styles.listGroup}`}>
                                        {item.subItems.map((subItem, index) => {
                                            return (
                                                <div className="form-check flex items-center space-x-2 justify-start" key={index}>
                                                    <RoundedBlackCheckbox id={`subitem${index}`} type="checkbox"/>
                                                    <label className="form-check-label" htmlFor={`subitem${index}`}>
                                                        {subItem}
                                                    </label>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <ViewOptions />
            </div>
        </form>
    );

}

export default OffcanvasFilters;
