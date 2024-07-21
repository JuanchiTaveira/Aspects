import Product from "../../model/Product";

interface Props {
    products: Product[];
}

export const ProductsContainer = (props: Props) => {
    return (
        <div className="relative grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 px-4 py-8" id="productsContainer">
            {props.products.map((product, index) => (
                <div key={index} className="space-y-2">
                    <img src={product.imageUrl} alt={product.alt} className="w-full" />
                    <div className="flex justify-between product-details">
                        <p className="text-sm">{product.name}</p>
                        <p className="text-sm">€{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductsContainer;