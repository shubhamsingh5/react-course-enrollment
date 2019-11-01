import React from "react";
import PropTypes from "prop-types";
import {
    CartListItem,
    ItemHeader,
    Instructor,
    Section,
    Subsection
} from "./styles/CartItemStyles";
import { RemoveFromCart } from "./styles/ButtonStyles";
import { ReactComponent as DeleteIcon } from "./assets/delete.svg";
import { ReactComponent as UserIcon } from "./assets/user-o.svg";
import { ReactComponent as LocationIcon } from "./assets/location.svg";
import { ReactComponent as TimeIcon } from "./assets/time.svg";

const CartItem = ({ cartItem, removeFromCart }) => {
    const { name, section, sectionName, subSection } = cartItem;

    const times = section && Object.keys(section.time);

    const subsectionDetail = subSection && section.subsections[subSection];
    const subTimes = subSection && Object.keys(subsectionDetail.time);
    // console.log(cartItem);

    return (
        <CartListItem>
            <ItemHeader>
                <h3>{name}</h3>
                <RemoveFromCart onClick={e => removeFromCart(cartItem, e)}>
                    <DeleteIcon />
                </RemoveFromCart>
            </ItemHeader>
            <Instructor>
                {section ? (
                    <>
                        <UserIcon height="18" width="18" />
                        <p className="instructor--name">{section.instructor}</p>
                    </>
                ) : (
                    <p>All sections.</p>
                )}
            </Instructor>
            {section && (
                <Section>
                    <p>{sectionName}</p>
                    <div className="section__details">
                        <div className="section__location">
                            <LocationIcon height="20" width="20" />
                            <p>{section.location}</p>
                        </div>
                        <div className="section__time">
                            <TimeIcon height="20" width="20" />
                            <div className="times">
                                {times.map((key, index) => {
                                    return (
                                        <p key={key}>
                                            {key}: {section.time[key]}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Section>
            )}
            {subSection ? (
                <Subsection>
                    <p>{subSection}</p>
                    <div className="subsection__details">
                        <div className="subsection__location">
                            <LocationIcon height="20" width="20" />
                            <p>{subsectionDetail.location}</p>
                        </div>
                        <div className="subsection__time">
                            <TimeIcon height="20" width="20" />
                            <div className="times">
                                {subTimes.map((key, index) => {
                                    return (
                                        <p key={key}>
                                            {key}: {subsectionDetail.time[key]}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Subsection>
            ) : (
                <p>All subsections.</p>
            )}
        </CartListItem>
    );
};

CartItem.propTypes = {
    cartItem: PropTypes.object.isRequired
};

export default CartItem;
