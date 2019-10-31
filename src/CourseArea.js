import React from 'react';
import './App.css';
import Course from './Course';

class CourseArea extends React.Component {
  getCourses() {
    let courses = [];

    for(const course of Object.entries(this.props.data)) {
      courses.push (
        <Course key={course[0]} data={course[1]} courseId={course[0]} addToCart={this.props.addToCart}/>
      )
    }

    return courses;
  }

  render() {
    return (
      <div style={{marginLeft: '60px', marginTop: '5px'}}>
        {this.getCourses()}
      </div>
    )
  }
}

export default CourseArea;
