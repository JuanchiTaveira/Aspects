import styles from './MenuIcon.module.scss';
import { SideMenu } from '../SideMenu/SideMenu'; // Import the SideMenu component
import { useOverlay } from '../../context/OverlayContext';

export const MenuIcon = () => {
  const { isActive } = useOverlay();
  
  return (
    <>
      <button className={`btn ${isActive ? styles.btnActive : ''}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list w-[30px] h-[30px]" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </button>
      <div className={`offcanvas offcanvas-start ${styles.sideMenu}`} data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className={`offcanvas-header ${styles.offcanvasHeader}`} data-bs-theme="dark">
          <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <SideMenu />
      </div>
    </>
  );
};