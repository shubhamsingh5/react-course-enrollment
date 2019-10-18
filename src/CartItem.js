import React from "react";
import PropTypes from "prop-types";
import "./CartItem.css";

const CartItem = ({ cartItem, removeFromCart }) => {
    const { name, section, sectionName, subSection } = cartItem;
    const subsectionDetail = subSection && section.subsections[subSection];

    return (
        <li className="cart-item">
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
            <button
                className="btn-remove"
                onClick={e => removeFromCart(cartItem, e)}
            >
                &times;
            </button>
        </li>
    );
};

CartItem.propTypes = {
    cartItem: PropTypes.object.isRequired
};

export default CartItem;
