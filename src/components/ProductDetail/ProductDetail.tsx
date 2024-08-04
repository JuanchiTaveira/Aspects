import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../model/Product';
import { getProductById } from '../../utils/fetchData';
import Spinner from '../spinner/Spinner';


const ProductDetail: React.FC = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({} as Product);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getProductById(productId ?? '')
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [productId])

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        loading ? <Spinner /> :
            <div>
                <h1>{product.name}</h1>
                <img src={product.imageUrl} alt={product.alt} />
                <p>{product.description}</p>
                <p>Price: €{product.price}</p>
            </div>
    );
};

export default ProductDetail;