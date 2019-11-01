import React, { Component } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import CartStyles from "./styles/CartStyles";
import { CloseCart } from "./styles/ButtonStyles";

export default class Cart extends Component {
    render() {
        const { cart, cartOpen, toggleCart, removeFromCart } = this.props;

        return (
            <CartStyles cartOpen={cartOpen}>
                <div className="cart__info">
                    <p>
                        <span className="count">{cart.length}</span> Course
                        {cart.length === 1 ? "" : "s"} in cart{" "}
                        <span className="divider">|</span>
                        <span className="title">Cart</span>
                    </p>
                    <CloseCart onClick={toggleCart}>&times;</CloseCart>
                </div>
                <ul>
                    {cart.map((cartItem, idx) => (
                        <CartItem
                            key={idx}
                            cartItem={cartItem}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                </ul>
            </CartStyles>
        );
    }
}
