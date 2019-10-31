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
    constructor(props) {
        super(props);
        this.state = {
            allCourses: {},
            filteredCourses: {},
            subjects: [],
            coursesToSchedule: [],
            cart: [],
            cartOpen: false
        };
    }
    componentDidMount() {
        fetch("https://mysqlcs639.cs.wisc.edu:5000/classes/")
            .then(res => res.json())
            .then(data =>
                this.setState({
                    allCourses: data,
                    filteredCourses: data,
                    subjects: this.getSubjects(data)
                })
            );
    }

    getSubjects = (data) => {
        let subjects = [];
        subjects.push("All");

        for (const course of Object.values(data)) {
            if (subjects.indexOf(course.subject) === -1)
                subjects.push(course.subject);
        }

        return subjects;
    }

    setCourses = (courses) => {
        this.setState({ filteredCourses: courses });
    }

    toggleCart = () => {
        this.setState(prevState => ({
            cartOpen: !prevState.cartOpen
        }));
    };

    removeFromCart = (cartItem, e) => {
        e.preventDefault();

        let newArray = this.state.cart.filter(item => {
            return item.name !== cartItem.name;
        });
        this.setState({
            cart: newArray
        });
    };

    addToCart = (course, section, subsection, e) => {
        e.preventDefault();
        const courseData = this.state.filteredCourses[course];
        const scheduled = {
            name: courseData.name,
            number: courseData.number,
            section: courseData.sections,
        }
        const cartData = {
            name: courseData.name,
            number: courseData.number
        };

        if (section !== "") {
            cartData.sectionName = section;
            cartData.section = courseData.sections[section];
            scheduled.section = courseData.sections[section];
        }

        if (subsection !== "") {
            cartData.subSection = subsection;
            scheduled.subSection = courseData.sections[section].subsections[subsection];
        }

        if (!this.state.cart.includes(cartData)) {
            this.setState(prevState => ({
                cart: [...prevState.cart, cartData],
                coursesToSchedule: [...prevState.coursesToSchedule, scheduled]
            }));
        }
    };

    render() {
        return (
            <Router>
                <div className="home-container">
                    <Nav />
                    <Switch>
                        <Route path="/scheduler">
                            <Scheduler 
                                cart={this.state.cart}
                            />
                        </Route>
                        <Router path="/planner">
                            <CourseSearch
                                cart={this.state.cart}
                                cartOpen={this.state.cartOpen}
                                toggleCart={this.toggleCart}
                                removeFromCart={this.removeFromCart}
                                addToCart={this.addToCart}
                                setCourses={this.setCourses}
                                filteredCourses={this.state.filteredCourses}
                                allCourses={this.state.allCourses}
                                subjects={this.state.subjects}
                            />
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
