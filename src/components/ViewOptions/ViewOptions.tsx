import { useEffect, useState } from 'react';
import styles from '../OffcanvasFilters/OffcanvasFilters.module.scss'; //importing scss file for OffcanvasFilters, as the styles are similar
import RoundedBlackCheckbox from '../RoundedBlackCheckbox/RoundedBlackCheckbox';

export const ViewOptions = () => {

    const [viewOptionRadio, setViewOptionRadio] = useState("4");

    const handleRadioChange = (event: React.MouseEvent<HTMLInputElement>) => {
        if (event.currentTarget.value === viewOptionRadio) {
            return;
        }

        setViewOptionRadio(event.currentTarget.value);
    };

    useEffect(() => {
        const productsContainer = document.getElementById("productsContainer");

        const gridTemplateColumnsValue = `repeat(${viewOptionRadio}, minmax(0, 1fr))`;
        productsContainer!.style.gridTemplateColumns = gridTemplateColumnsValue;

    }, [viewOptionRadio]);

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
                    <div className={`list-group ${styles.listGroup} flex flex-row justify-between`}>
                        <div className="flex flex-row">
                            <RoundedBlackCheckbox id="x8" type="radio" value="8" name="viewOptionRadio" handleClick={handleRadioChange} />
                            <svg width="70" height="16" viewBox="0 0 70 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="pl-2">
                                <rect width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="9" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="18" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="27" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="36" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="45" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="54" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="63" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect y="9" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="9" y="9" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="18" y="9" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="27" y="9" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="36" y="9" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="45" y="9" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="54" y="9" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="63" y="9" width="7" height="7" fill="#C4C4C4"></rect>
                            </svg>
                        </div>
                        <div className="flex flex-row pl-3">
                            <RoundedBlackCheckbox id="x4" type="radio" value="4" name="viewOptionRadio" handleClick={handleRadioChange} />
                            <svg width="70" height="16" viewBox="0 0 70 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="pl-2">
                                <rect width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="9" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="18" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="27" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect y="9" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="9" y="9" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="18" y="9" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="27" y="9" width="7" height="7" fill="#C4C4C4"></rect>
                            </svg>
                        </div>
                        <div className="flex flex-row pl-3">
                            <RoundedBlackCheckbox id="x2" type="radio" value="2" name="viewOptionRadio" handleClick={handleRadioChange} />
                            <svg width="70" height="16" viewBox="0 0 70 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="pl-2">
                                <rect width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="9" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect y="9" width="7" height="7" fill="#C4C4C4"></rect>
                                <rect x="9" y="9" width="7" height="7" fill="#C4C4C4"></rect>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewOptions;