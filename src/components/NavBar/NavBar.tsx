import { MenuIcon } from '../MenuIcon/MenuIcon';
import Product from '../../model/Product';
import CartWidget from '../CartWidget/CartWidget';
import { useMediaQuery } from 'react-responsive';
import LogoImg from '../LogoImg/LogoImg';
import SearchButton from '../SearchButton/SearchButton';

const cart: Product[] = [];

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <header className="fixed w-full h-auto bg-white">
      <div className={`flex items-center justify-between px-2 py-2 border-b ${isMobile ? 'flex-col' : ''} `}>

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

        <nav className="flex items-center space-x-4">
          <SearchButton />
          <button type="button" className="p-2">ACCOUNT</button>
          <CartWidget cart={cart} />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;