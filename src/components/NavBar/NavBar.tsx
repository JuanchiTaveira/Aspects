import { useSearchOverlay } from '../../context/SearchOverlayContext';
import style from './NavBar.module.scss';
import { useMediaQuery } from 'react-responsive';
import CartWidget from '../CartWidget/CartWidget';
import LogoImg from '../LogoImg/LogoImg';
import { MenuIcon } from '../MenuIcon/MenuIcon';
import SearchButton from '../SearchButton/SearchButton';
import Product from '../../model/Product';
import { SearchBar } from '../SearchBar/SearchBar';

const cart: Product[] = [];

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { isActiveSearch: isActive } = useSearchOverlay();

  return (
    <header className={`${style.header}`}>
      <div className={`border-b flex items-center justify-between px-2 py-2 ${style.navBar} ${isActive ? style.active : ''} ${isMobile ? 'flex-col' : ''} `}>

        {isMobile ? (
          <div className="flex items-center justify-between w-full">
            <MenuIcon />
            <LogoImg tailwindHeight="h-8" />
          </div>
        ) : (
          <>
            <MenuIcon />
            <LogoImg tailwindHeight="h-8" />
          </>
        )}

        <nav className="flex items-center space-x-4 text-xs font-medium">
          <SearchButton />
          <button type="button" className="p-2">ACCOUNT</button>
          <CartWidget cart={cart} />
        </nav>
      </div>
      <SearchBar isActive={isActive} />
      <div className={`${style.searchOverlay} ${isActive ? style.active : ''}`}></div>
    </header>
  );
};

export default NavBar;