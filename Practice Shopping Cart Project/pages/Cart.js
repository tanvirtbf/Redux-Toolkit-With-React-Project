import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cartItems = useSelector(({ products, cartItems }) => {
    return cartItems.list
      .map(({ productId, quantity }) => {
        const cartProduct = products.list.find(
          (product) => product.id === productId
        );
        return { ...cartProduct, quantity };
      })
      .filter(({ title }) => title);
  });
  const isLoading = useSelector((state) => state.cartItems.loading);
  const error = useSelector((state) => state.cartItems.error)
  return error ? <h1 style={{textAlign:'center'}}>{error}</h1> : (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {isLoading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : (
          cartItems.map(({ id, title, rating, price, image, quantity }) => (
            <CartItem
              key={id}
              productId={id}
              title={title}
              price={price}
              imageUrl={image}
              rating={rating.rate}
              quantity={quantity}
            />
          ))
        )}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          {isLoading ? (
            ""
          ) : (
            <div className="total">
              $
              {cartItems.reduce(
                (accumulator, currentItem) =>
                  accumulator + currentItem.quantity * currentItem.price,
                0
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
