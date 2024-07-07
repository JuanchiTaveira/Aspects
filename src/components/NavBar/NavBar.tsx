import 'bootstrap/dist/css/bootstrap.min.css';
import { MenuIcon } from '../MenuIcon/MenuIcon';
import styles from './NavBar.module.scss';
import Product from '../../model/Product';
import CartWidget from '../CartWidget/CartWidget';
import logoHeader from '../../assets/logo/logoHeader.png';

interface NavBarProps {
  title: string;
  navItems: string[];
}

const cart: Product[] = [];

const NavBar = (props: NavBarProps) => {

  return (
    <>
      <header className="flex items-center justify-between px-2 py-2 border-b">
        <MenuIcon />

        <a href="#" className={styles.pageTitle}>
          <img className="h-8" src={logoHeader} alt="logo" />
        </a>

        <nav className="flex items-center space-x-4">
          {props.navItems.map((item, index) => (
            <a key={index} href="#" className="p-2">{item}</a>
          ))}

          <CartWidget cart={cart} />
        </nav>

      </header>
    </>
  );
};

export default NavBar;