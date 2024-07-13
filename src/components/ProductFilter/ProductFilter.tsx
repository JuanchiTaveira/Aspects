import styles from './ProductFilter.module.scss';

export const ProductFilter = () => {
    return (
        <div className={`flex justify-between items-center mb-4 border-b ${styles.filters}`}>
          <button className="text-sm px-4 py-4">Shop All</button>
          <button className="text-sm px-4 py-4">Refine</button>
        </div>
    )
}

export default ProductFilter;