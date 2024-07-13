import styles from './LogoImg.module.scss';
import logoHeader from '../../assets/logo/logoHeader.png';

export const LogoImg = (props: { tailwindHeight: string }) => {
    return (
        <a href="#" className={styles.pageTitle}>
            <img className={props.tailwindHeight} src={logoHeader} alt="logo" />
        </a>
    )
}

export default LogoImg;
