import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Product from '../../model/Product';
import { getProducts } from '../../utils/fetchData';
import Spinner from '../spinner/Spinner';

export const ProductsContainer: React.FC = () => {
    const [products, setProducts] = useState([] as Product[]);
    const { category } = useParams();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        getProducts(category) // devuelve una promesa que va a tardar 2 segundos en resolverse
            .then((res) => {
                setProducts(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });

        return () => { }

    }, [category])

    return (
        loading ? <Spinner /> :
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