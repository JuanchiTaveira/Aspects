import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../model/Product';

interface Props {
    products: Product[];
}

const ProductDetail: React.FC<Props> = ({ products }) => {
    const { productId } = useParams<{ productId: string }>();
    const product = products.find(p => p.id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt={product.alt} />
            <p>{product.description}</p>
            <p>Price: €{product.price}</p>
        </div>
    );
};

export default ProductDetail;