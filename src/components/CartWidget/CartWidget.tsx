import Product from "../../model/Product"

const CartWidget = (props: { cart: Product[] }) => {
    return (
        <button className="p-2">{`MY BAG (${props.cart.length})`}</button> //TODO: add buttons to add and remove items from cart. Then update the cart length
    )
}

export default CartWidget;

