import styles from './ProductFilter.module.scss';

export const ProductFilter = () => {
    return (
        <div className={styles.filters}>
            <div className={`flex justify-between items-center border-b`}>
                <button className="text-sm px-4 py-4">Shop All</button>
                <button className="text-sm px-4 py-4">Refine</button>
            </div>
        </div>
    )
}

export default ProductFilter;