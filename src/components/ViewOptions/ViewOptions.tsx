import styles from '../OffcanvasFilters/OffcanvasFilters.module.scss'; //importing scss file for OffcanvasFilters, as the styles are similar
import RoundedBlackCheckbox from '../RoundedBlackCheckbox/RoundedBlackCheckbox';

export const ViewOptions = () => {
    return (
        <div className={`accordion-item`}>
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse"
                    data-bs-target={`#sizeCollapse`} aria-expanded="false" aria-controls={`sizeCollapse`}>
                    View Options
                </button>
            </h2>
            <div id={`sizeCollapse`} className={`accordion-collapse collapse ${styles.collapseItem}`}
                aria-labelledby="headingTwo" data-bs-parent="#accordionFilters">
                <div className={`accordion-body ${styles.accordionBody} pb-2`}>
                    <div className={`list-group ${styles.listGroup}`}>
                        <RoundedBlackCheckbox id="x8" />
                        <RoundedBlackCheckbox id="x4" />
                        <RoundedBlackCheckbox id="x2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewOptions;