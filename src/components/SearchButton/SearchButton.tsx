import { useOverlay } from '../../context/OverlayContext';
import style from './SearchButton.module.scss';


const SearchButton = () => {
    const { toggleOverlay } = useOverlay();

    return (
        <button type="button" className={`${style.button} p-2`} onClick={toggleOverlay}>SEARCH</button>
    );
};

export default SearchButton;