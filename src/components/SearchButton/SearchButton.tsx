import { useSearchOverlay } from '../../context/SearchOverlayContext';
import style from './SearchButton.module.scss';


const SearchButton = () => {
    const { toggleSearchOverlay: toggleOverlay } = useSearchOverlay();

    return (
        <button type="button" className={`${style.button} p-2`} onClick={toggleOverlay}>SEARCH</button>
    );
};

export default SearchButton;