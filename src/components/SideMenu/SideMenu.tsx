import styles from './SideMenu.module.scss';

export const SideMenu = () => {
    return (
        <div className={`offcanvas-body ${styles.offcanvasBody}`}>
            <div className={styles.menuItem}>SHOP</div>
            <div className={styles.menuItem}>COLLECTIONS</div>
            <div className={styles.menuItem}>NEWS</div>
            <div className={styles.menuItem}>ABOUT</div>
        </div>
    )
}

export default SideMenu;