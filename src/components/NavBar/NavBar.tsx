import 'bootstrap/dist/css/bootstrap.min.css';
import { MenuIcon } from '../MenuIcon/MenuIcon';
import styles from './NavBar.module.scss';
import Product from '../../model/Product';
import CartWidget from '../CartWidget/CartWidget';
import logoHeader from '../../assets/logo/logoHeader.png';
import { useMediaQuery } from 'react-responsive';

interface NavBarProps {
  title: string;
  navItems: string[];
}

const cart: Product[] = [];

const NavBar = (props: NavBarProps) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <header className="fixed w-full h-auto bg-white">
      <div className={`flex items-center justify-between px-2 py-2 border-b ${isMobile ? 'flex-col' : ''} `}>

        {isMobile ? (
          <div className="flex items-center justify-between w-full">
            <MenuIcon />
            <a href="#" className={styles.pageTitle}>
              <img className="h-8" src={logoHeader} alt="logo" />
            </a>
          </div>
        ) : (
          <>
            <MenuIcon />

            <a href="#" className={styles.pageTitle}>
              <img className="h-8" src={logoHeader} alt="logo" />
            </a>
          </>
        )}

        <nav className="flex items-center space-x-4">
          {props.navItems.map((item, index) => (
            <a key={index} href="#" className="p-2">{item}</a>
          ))}

          <CartWidget cart={cart} />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;