import style from './SearchBar.module.scss'
import closeButtonBlack from '../../assets/icons/closeButtonBlack.png';
import { useSearchOverlay } from '../../context/SearchOverlayContext';

export const SearchBar = (props : { isActive: boolean }) => {
    const { toggleSearchOverlay: toggleOverlay } = useSearchOverlay();

    return (
        <div className={`${props.isActive ? style.active : "hidden"} flex flex-row justify-between border-b`}>
            <input type="text" className="px-4 py-3 w-full " placeholder="SEARCH FOR" />
            <button type="button" className="px-4 py-3" onClick={toggleOverlay}>
                <img src={closeButtonBlack} alt="Close search bar" className="h-7 invert"/>
            </button>
        </div>
    )
}