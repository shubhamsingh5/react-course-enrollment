import React, { Component } from "react";
import Day from "./Day";
import * as CalendarStyles from "./styles/SchedulerStyles";

class Calendar extends Component {
    constructor() {
        super();
        this.state = {
            blocks: [
                { name: "Item 1", start: 7.75, end: 10 },
                { name: "Item 2", start: 10.75, end: 11.5 },
                { name: "Item 3", start: 14.75, end: 15.75 }
            ]
        };
    }

    render() {
        return (
            <CalendarStyles.Calendar>
                <Day
                    title={"Column 1"}
                    blocks={this.state.blocks}
                    start={7}
                    end={19}
                    height={500}
                    width="20vw"
                />
            </CalendarStyles.Calendar>
        );
    }
}

export default Calendar;
