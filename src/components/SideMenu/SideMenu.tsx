import styles from './SideMenu.module.scss';

export const SideMenu = () => {
    return (
        <div className={`offcanvas-body ${styles.offcanvasBody} flex flex-col justify-between`}>
            <div className="navContent">
                <ul>
                    <li className={styles.menuItem}>SHOP</li>
                    <li className={styles.menuItem}>COLLECTIONS</li>
                    <li className={styles.menuItem}>LOOKBOOK</li>
                    <li className={styles.menuItem}>MUSIC</li>
                    <li className={styles.menuItem}>ABOUT</li>
                </ul>
            </div>
            <div className={`${styles.footer}`}>
                <ul>
                    <li className={`${styles.link} ${styles.pointer} ${styles.itemTitle}`}>Privacy Policy</li>
                    <li className={styles.itemTitle}>Contact us</li>
                    <ul>
                        <li className={styles.link}>
                            <a href="https://www.instagram.com/manyaspects/?utm_source=ig_web_button_share_sheet" target="_blank">Instagram</a>
                        </li>
                        <li className={styles.link}>
                            <a href="mailto:manyaspects@gmail.com" target="_blank" rel="noopener noreferrer">
                                aspects@gmail.com
                            </a>
                        </li>
                    </ul>
                    <li className="pt-3">© 2024 Aspects EU. All rights reserved.</li>
                </ul>
            </div>
        </div>
    )
}

export default SideMenu;