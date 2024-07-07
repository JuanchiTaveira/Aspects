import 'bootstrap/dist/css/bootstrap.min.css';
import { MenuIcon } from '../MenuIcon/MenuIcon';
import styles from './NavBar.module.scss';

interface NavBarProps {
  title: string;
  navItems: string[];
}

const NavBar = (props: NavBarProps) => {
  return (
    <>
      <header className="flex items-center justify-between px-2 py-2 border-b">

        <MenuIcon />

        <h1 className={styles.pageTitle}>{props.title}</h1>

        <nav className="flex items-center space-x-4">
          {props.navItems.map((item, index) => (
            <a key={index} href="#" className="p-2">{item}</a>
          ))}
        </nav>

      </header>
    </>
  );
};

export default NavBar;