import styles from './MenuIcon.module.scss';
import { SideMenu } from '../SideMenu/SideMenu';
import { useSearchOverlay } from '../../context/SearchOverlayContext';
import sideMenuIcon from '../../assets/icons/sideMenuIcon.png';
import closeButtonBlack from '../../assets/icons/closeButtonBlack.png';

export const MenuIcon = () => {
  const { isActiveSearch } = useSearchOverlay();

  return (
    <>
      <button className={`btn ${isActiveSearch ? styles.btnActive : ''}`} disabled={isActiveSearch} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
        <img src={sideMenuIcon} alt="Open side menu" className={`h-[30px] ${isActiveSearch ? 'invert' : ''}`} />
      </button>
      <div className={`offcanvas offcanvas-start ${styles.sideMenu}`} data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className={`offcanvas-header ${styles.offcanvasHeader} flex flex-row justify-end`} data-bs-theme="dark">
          <button type="button" className="shadow-none" data-bs-dismiss="offcanvas" aria-label="Close">
            <img src={closeButtonBlack} alt="Close filters" className="h-8 invert" />
          </button>
        </div>
        <SideMenu />
      </div>
    </>
  );
};