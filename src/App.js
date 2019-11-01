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

    getSubjects = data => {
        let subjects = [];
        subjects.push("All");

        for (const course of Object.values(data)) {
            if (subjects.indexOf(course.subject) === -1)
                subjects.push(course.subject);
        }

        return subjects;
    };

    setCourses = courses => {
        this.setState({ filteredCourses: courses });
    };

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
        const cartData = {
            key: course,
            name: courseData.name,
            number: courseData.number
        };

        if (section !== "") {
            cartData.sectionName = section;
            cartData.section = courseData.sections[section];
        }

        if (subsection !== "") {
            cartData.subSection = subsection;
        }

        if (!this.state.cart.includes(cartData)) {
            this.setState(
                prevState => ({
                    cart: [...prevState.cart, cartData],
                    cartOpen: true
                }),
                this.goToScheduler
            );
        }
    };

    goToScheduler = () => {
        let newSchedules = [];
        for (const c of this.state.cart) {
            let course = {
                name: "",
                number: "",
                sections: []
            };
            // console.log(c);
            course.name = c.name;
            course.number = c.number;
            let courseData = this.state.filteredCourses[c.key];
            if (!c.sectionName) {
                for (const sectionName of Object.keys(courseData.sections)) {
                    let section = courseData.sections[sectionName];

                    let newSection = {
                        name: sectionName,
                        time: "",
                        subsections: []
                    };
                    newSection.time = section.time;
                    for (const subSectionName of Object.keys(
                        section.subsections
                    )) {
                        let newSubsection = {
                            name: subSectionName,
                            time: ""
                        };
                        newSubsection.name = subSectionName;
                        newSubsection.time =
                            section.subsections[subSectionName].time;
                        newSection.subsections.push(newSubsection);
                    }
                    course.sections.push(newSection);
                }
            } else {
                let section = courseData.sections[c.sectionName];
                let newSection = {
                    name: c.sectionName,
                    time: "",
                    subsections: []
                };
                newSection.time = section.time;
                if (!c.subSection) {
                    for (const subSectionName of Object.keys(
                        section.subsections
                    )) {
                        let subSection = section.subsections[subSectionName];
                        let newSubsection = {
                            name: subSectionName,
                            time: ""
                        };
                        newSubsection.time = subSection.time;
                        newSection.subsections.push(newSubsection);
                    }
                } else {
                    let subSection = section.subsections[c.subSection];
                    let newSubsection = {
                        name: c.subSection,
                        time: ""
                    };
                    newSubsection.time = subSection.time;
                    newSection.subsections.push(newSubsection);
                }
                course.sections.push(newSection);
            }
            newSchedules.push(course);
        }
        this.setState(prevState => ({
            coursesToSchedule: newSchedules
        }));
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
                                schedules={this.state.coursesToSchedule}
                                removeFromCart={this.removeFromCart}
                            />
                        </Route>
                        <Router path="/search">
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
                            <Redirect exact from="" to="/search" />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
