import ProductFilter from '../ProductFilter/ProductFilter';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import style from './Main.module.scss';

export const Main = () => {
    return (
        <main className={style.main}>
          <ProductFilter />
          <ProductsContainer />
        </main>
    )
}