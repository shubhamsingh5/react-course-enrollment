import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import CourseArea from "./CourseArea";
import Cart from "./Cart";
import { OpenCart } from "./styles/ButtonStyles";

class CourseSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCourses: {},
            filteredCourses: {},
            subjects: [],
            cart: [
                {
                    name: "Introduction to Operating Systems",
                    sectionName: "LEC_001",
                    section: {
                        instructor: "Andrea Arpaci-Dusseau",
                        location: "1125 DeLuca Biochemistry Building",
                        subsections: {
                            DIS_301: {
                                location: "2317 Engineering Hall",
                                time: {
                                    wednesday: "11:00am - 11:50am"
                                }
                            },
                            DIS_302: "Object",
                            DIS_303: "Object",
                            DIS_304: "Object",
                            DIS_305: "Object"
                        },
                        time: {
                            thursday: "11:00am - 12:15pm",
                            tuesday: "11:00am - 12:15pm"
                        }
                    },
                    subSection: "DIS_301"
                }
            ],
            cartOpen: true
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

    getSubjects(data) {
        let subjects = [];
        subjects.push("All");

        for (const course of Object.values(data)) {
            if (subjects.indexOf(course.subject) === -1)
                subjects.push(course.subject);
        }

        return subjects;
    }

    setCourses(courses) {
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
        const cartData = {
            name: courseData.name
        };

        if (section !== "") {
            cartData.sectionName = section;
            cartData.section = courseData.sections[section];
        }

        if (subsection !== "") {
            cartData.subSection = subsection;
        }

        if (!this.state.cart.includes(cartData)) {
            this.setState(prevState => ({
                cart: [...prevState.cart, cartData]
            }));
        }
    };

    render() {
        return (
            <>
                <Sidebar
                    setCourses={courses => this.setCourses(courses)}
                    courses={this.state.allCourses}
                    subjects={this.state.subjects}
                />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
                <div style={{ marginLeft: "20vw" }}>
                    <CourseArea
                        data={this.state.filteredCourses}
                        addToCart={this.addToCart}
                    />
                    <OpenCart className="btn-cart" onClick={this.toggleCart}>
                        Cart
                    </OpenCart>
                </div>
                <Cart
                    cart={this.state.cart}
                    cartOpen={this.state.cartOpen}
                    toggleCart={this.toggleCart}
                    removeFromCart={this.removeFromCart}
                />
            </>
        );
    }
}

export default CourseSearch;
