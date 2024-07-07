import Product from "../../model/Product";

interface Props {
    products: Product[];
}

export const ProductsContainer = (props: Props) => {
    return (
        <>
            {props.products.map((product, index) => (
                <div key={index} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">${product.price}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProductsContainer;