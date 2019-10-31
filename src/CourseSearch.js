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
            
        };
    }


    render() {
        return (
            <>
                <Sidebar
                    setCourses={courses => this.props.setCourses(courses)}
                    courses={this.props.allCourses}
                    subjects={this.props.subjects}
                />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
                <div style={{ marginLeft: "20vw" }}>
                    <CourseArea
                        data={this.props.filteredCourses}
                        addToCart={this.props.addToCart}
                    />
                    <OpenCart className="btn-cart" onClick={this.props.toggleCart}>
                        Cart
                    </OpenCart>
                </div>
                <Cart
                    cart={this.props.cart}
                    cartOpen={this.props.cartOpen} 
                    toggleCart={this.props.toggleCart}
                    removeFromCart={this.props.removeFromCart}
                />
            </>
        );
    }
}

export default CourseSearch;
