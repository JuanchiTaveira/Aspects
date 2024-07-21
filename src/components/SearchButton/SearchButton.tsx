import ReactDOM from 'react-dom';
import { useOverlay } from '../../context/OverlayContext';
import style from './SearchButton.module.scss';


const SearchButton = () => {
    const { isActive, toggleOverlay } = useOverlay();

    return (
        <>
            <button type="button" className={style.button} onClick={toggleOverlay}>SEARCH</button>
            {ReactDOM.createPortal(
                <div className={`${style.overlay} ${isActive ? style.active : ''}`} onClick={toggleOverlay}></div>,
                document.body
            )}
        </>
    );
};

export default SearchButton;