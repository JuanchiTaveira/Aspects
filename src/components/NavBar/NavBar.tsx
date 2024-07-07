import 'bootstrap/dist/css/bootstrap.min.css';
import { MenuIcon } from '../MenuIcon/MenuIcon';
import styles from './NavBar.module.scss';
import Product from '../../model/Product';

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
          <h1>{props.title}</h1>
        </a>

        <nav className="flex items-center space-x-4">
          {props.navItems.map((item, index) => (
            <a key={index} href="#" className="p-2">{item}</a>
          ))}
          <a key={props.navItems.length} href="#" className="p-2">{`MY BAG (${cart.length})`}</a> //TODO: add buttons to add and remove items from cart. Then update the cart length
        </nav>

      </header>
    </>
  );
};

export default NavBar;