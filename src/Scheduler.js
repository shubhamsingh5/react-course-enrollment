import React, { Component } from "react";
import * as SchedulerStyles from "./styles/SchedulerStyles";
import CartItem from "./CartItem";
import CartStyles from "./styles/CartStyles";
import Calendar from "./Calendar";

class Scheduler extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    generateSchedules = () => {
        courses = this.props.
    }

    render() {
        const { cart } = this.props;
        return (
            <div style={{ marginLeft: "5%", display: "flex", justifyContent: "space-between" }}>
                <SchedulerStyles.Sidebar>
                    <ul>
                        {cart.map((cartItem, idx) => (
                            <CartItem key={idx} cartItem={cartItem} />
                        ))}
                    </ul>
                </SchedulerStyles.Sidebar>
                <Calendar />
            </div>
        );
    }
}

export default Scheduler;
