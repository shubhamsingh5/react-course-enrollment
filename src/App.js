import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Nav from "./Nav";
import CourseSearch from "./CourseSearch";
import Scheduler from "./Scheduler";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="home-container">
                    <Nav />
                    <Switch>
                        <Route path="/scheduler">
                            <Scheduler />
                        </Route>
                        <Router path="/planner">
                            <CourseSearch />
                        </Router>
                        <Route path="/">
                            <Redirect exact from="" to="/planner" />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
