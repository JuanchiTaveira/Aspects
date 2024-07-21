import { useState } from 'react';
import ReactDOM from 'react-dom';
import style from './SearchButton.module.scss';

const SearchButton = () => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	return (
		<>
			<button type="button" className={style.button} onClick={handleClick}>SEARCH</button>
			{ReactDOM.createPortal(
				<div className={`${style.overlay} ${isActive ? style.active : ''}`} onClick={() => setIsActive(false)}></div>,
				document.body
			)}
		</>
	);
};

export default SearchButton;