import React, { Component } from "react";
import CartItem from "./CartItem";
import { CartStyles } from "./styles/CartStyles";
import { CloseCart } from "./styles/ButtonStyles";

export default class Cart extends Component {
    render() {
        const { cart, cartOpen, toggleCart, removeFromCart } = this.props;
        return (
            <CartStyles cartOpen={cartOpen}>
                <ul>
                    {cart.map((cartItem, idx) => (
                        <CartItem
                            key={idx}
                            cartItem={cartItem}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                </ul>
                <CloseCart onClick={toggleCart}>&times;</CloseCart>
            </CartStyles>
        );
    }
}
