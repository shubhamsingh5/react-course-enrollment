import React from "react";
import PropTypes from "prop-types";
import {CartItemStyles} from './styles/CartStyles'
import {RemoveFromCart} from './styles/ButtonStyles'

const CartItem = ({ cartItem, removeFromCart }) => {
    const { name, section, sectionName, subSection } = cartItem;
    const subsectionDetail = subSection && section.subsections[subSection];

    return (
        <CartItemStyles>
            <div className="cart-item__info">
                <h3>{name}</h3>
                <div className="cart-item__details">
                    {section && (
                        <p>
                            {sectionName} : {section.instructor}
                        </p>
                    )}
                    {subSection && <p>{subSection}</p>}
                </div>
            </div>
            <RemoveFromCart
                onClick={e => removeFromCart(cartItem, e)}
            >
                &times;
            </RemoveFromCart>
        </CartItemStyles>
    );
};

CartItem.propTypes = {
    cartItem: PropTypes.object.isRequired
};

export default CartItem;
