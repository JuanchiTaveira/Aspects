import { useEffect, useState } from 'react';
import styles from '../OffcanvasFilters/OffcanvasFilters.module.scss'; //importing scss file for OffcanvasFilters, as the styles are similar
import RoundedBlackCheckbox from '../RoundedBlackCheckbox/RoundedBlackCheckbox';
import { ViewOptionsX8, ViewOptionsX4, ViewOptionsX2, ViewOptionsX1 } from '../../assets/icons/ViewOptions/ViewOptionsIcons';
import { TAILWIND_BREAKPOINTS } from '../../utils/Constants';

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

                        {
                            isMdScreen() ? (
                                <>
                                    <div className="flex flex-row">
                                        <RoundedBlackCheckbox id="x8" type="radio" value="8" name="viewOptionRadio" handleClick={handleRadioChange} />
                                        <ViewOptionsX8 />
                                    </div>
                                    <div className="flex flex-row pl-3">
                                        <RoundedBlackCheckbox id="x4" type="radio" value="4" name="viewOptionRadio" handleClick={handleRadioChange} />
                                        <ViewOptionsX4 />
                                    </div>
                                    <div className="flex flex-row pl-3">
                                        <RoundedBlackCheckbox id="x2" type="radio" value="2" name="viewOptionRadio" handleClick={handleRadioChange} />
                                        <ViewOptionsX2 />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex flex-row pl-3">
                                        <RoundedBlackCheckbox id="x4" type="radio" value="4" name="viewOptionRadio" handleClick={handleRadioChange} />
                                        <ViewOptionsX4 />
                                    </div>
                                    <div className="flex flex-row pl-3">
                                        <RoundedBlackCheckbox id="x2" type="radio" value="2" name="viewOptionRadio" handleClick={handleRadioChange} />
                                        <ViewOptionsX2 />
                                    </div>
                                    <div className="flex flex-row pl-3">
                                        <RoundedBlackCheckbox id="x1" type="radio" value="1" name="viewOptionRadio" handleClick={handleRadioChange} />
                                        <ViewOptionsX1 />
                                    </div>
                                </>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

function isMdScreen(): boolean {
    return window.innerWidth >= TAILWIND_BREAKPOINTS.md;
}

export default ViewOptions;