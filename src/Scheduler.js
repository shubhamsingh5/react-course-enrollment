import React, { Component } from "react";
import * as SchedulerStyles from "./styles/SchedulerStyles";
import { ChangeSchedule } from "./styles/ButtonStyles";
import CartItem from "./CartItem";
import { ReactComponent as PlusIcon } from "./assets/plus.svg";
import Calendar from "./Calendar";
import Checkbox from "./Checkbox";

class Scheduler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedules: 0,
            selected: []
        };
    }

    prevSchedule = () => {
        console.log("prev");
    };

    nextSchedule = () => {
        console.log("next");
    };

    handleOnSelect = e => {
        const item = e.target.name;
        let arr = this.state.selected;
        let val = arr[item];
        arr[item] = !val;
        this.setState({
            selected: arr
        });
    };

    render() {
        const { cart, schedules } = this.props;

        return (
            <div
                style={{
                    marginLeft: "5%",
                    display: "flex",
                    justifyContent: "flex-start",
                    height: "100vh",
                    position: "fixed"
                }}
            >
                <SchedulerStyles.Sidebar>
                    {/* <div className="plus-icon">
                        <PlusIcon />
                    </div> */}
                    {(cart.length !== 0) && <h3 class="schedule-heading">Courses in cart:</h3>}
                    {(cart.length !== 0) ? (
                        <ul>
                            {cart.map((cartItem, idx) => (
                                <div className="schedule-item">
                                    <Checkbox
                                        name={idx}
                                        checked={this.state.selected[idx]}
                                        onChange={this.handleOnSelect}
                                    />
                                    <CartItem
                                        key={idx}
                                        cartItem={cartItem}
                                        removeFromCart={
                                            this.props.removeFromCart
                                        }
                                    />
                                </div>
                            ))}
                        </ul>
                    ) : (
                        <h3>Add a few courses to your cart to generate schedules.</h3>
                    )}
                </SchedulerStyles.Sidebar>
                <SchedulerStyles.CalendarArea>
                    <h3 className="heading">
                        Scheduler |{" "}
                        <span className="count">{this.state.schedules}</span>{" "}
                        <span className="text">
                            potential schedule
                            {this.state.schedules === 1 ? "" : "s"}
                        </span>
                        {this.state.schedules !== 0 && (
                            <div className="schedule-buttons">
                                <ChangeSchedule onClick={this.prevSchedule}>
                                    &larr;
                                </ChangeSchedule>
                                <ChangeSchedule onClick={this.nextSchedule}>
                                    &rarr;
                                </ChangeSchedule>
                            </div>
                        )}
                    </h3>
                    <Calendar />
                </SchedulerStyles.CalendarArea>
            </div>
        );
    }
}

export default Scheduler;
