import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../../model/Product';

interface Props {
    products: Product[];
}

export const ProductsContainer: React.FC<Props> = ({ products }) => {
    return (
        <div className="relative grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 px-4 py-8" id="productsContainer">
            {products.map((product, index) => (
                <div key={index} className="space-y-2">
                    <Link to={`/product/${product.id}`}>
                        <img src={product.imageUrl} alt={product.alt} className="w-full" />
                        <div className="flex justify-between product-details">
                            <p className="text-xs">{product.name}</p>
                            <p className="text-xs">€{product.price}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProductsContainer;