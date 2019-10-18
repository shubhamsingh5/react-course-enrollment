import React, { Component } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

export default class Cart extends Component {
    render() {
        const { cart, cartOpen, toggleCart, removeFromCart } = this.props;
        return (
            <div
                className="cart"
                style={
                    cartOpen
                        ? { transform: "translateX(0)" }
                        : { transform: "translateX(100%)" }
                }
            >
                <ul classNAme="cart__items">
                    {cart.map((cartItem, idx) => (
                        <CartItem
                            key={idx}
                            cartItem={cartItem}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                </ul>
                <button className="btn-close" onClick={toggleCart}>
                    &times;
                </button>
            </div>
        );
    }
}
