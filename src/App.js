import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import CourseArea from "./CourseArea";
import Cart from "./Cart";
import {OpenCart} from './styles/ButtonStyles'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCourses: {},
            filteredCourses: {},
            subjects: [],
            cart: [],
            cartOpen: false
        };
    }

    componentDidMount() {
        fetch("https://mysqlcs639.cs.wisc.edu/classes/")
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
        })
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
                </div>
                <Cart
                    cart={this.state.cart}
                    cartOpen={this.state.cartOpen}
                    toggleCart={this.toggleCart}
                    removeFromCart={this.removeFromCart}
                />
                <OpenCart className="btn-cart" onClick={this.toggleCart}>
                    Cart
                </OpenCart>
            </>
        );
    }
}

export default App;
