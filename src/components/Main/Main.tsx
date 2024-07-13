import { products } from '../../mock/mockData';
import ProductFilter from '../ProductFilter/ProductFilter';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import style from './Main.module.scss';

export const Main = () => {
    return (
        <main className={style.main}>
          <ProductFilter />
          <ProductsContainer products={products} />
        </main>
    )
}