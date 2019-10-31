import React, { Component } from "react";
import * as SchedulerStyles from "./styles/SchedulerStyles";

class Scheduler extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div style={{ marginLeft: "5%" }}>
                <SchedulerStyles.Sidebar>Scheduler</SchedulerStyles.Sidebar>
            </div>
        );
    }
}

export default Scheduler;
