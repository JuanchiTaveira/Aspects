import styles from './LogoImg.module.scss';
import logoHeader from '../../assets/logo/logoHeader.png';
import { useSearchOverlay } from '../../context/SearchOverlayContext';

export const LogoImg = (props: { tailwindHeight: string }) => {
    const { isActiveSearch: isActive } = useSearchOverlay();
    
    return (
        <a href="#" className={styles.pageTitle}>
            <img className={`${props.tailwindHeight} ${isActive ? "filter invert" : ""}`} src={logoHeader} alt="logo" />
        </a>
    )
}

export default LogoImg;
