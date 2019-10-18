import React from "react";
import "./Course.css";
import CourseSection from "./CourseSection";
import CourseSubSection from "./CourseSubSection";

class Course extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            checkedSection: "",
            checkedSubSection: "",
            showSubSection: ""
        };
    }

    expand = () => {
        if (this.state.expanded) {
            this.setState({
                showSubSection: "",
                checkedSection: "",
                checkedSubSection: ""
            });
        }
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }));
    };

    handleSectionChange = e => {
        const item = e.target.name;
        console.log(item);

        this.setState(prevState => ({
            checkedSection: prevState.checkedSection === item ? "" : item,
            checkedSubSection: "",
            showSubSection: ""
        }));
    };

    handleSubSectionChange = e => {
        const item = e.target.name;
        this.setState(prevState => ({
            checkedSubSection: prevState.checkedSubSection === item ? "" : item
        }));
    };

    toggleSubsections = (name, e) => {
        if (name === this.state.showSubSection) {
            this.setState({
                showSubSection: "",
                checkedSection: "",
                checkedSubSection: ""
            });
        } else {
            this.setState({
                showSubSection: name,
                checkedSection: name
            });
        }
    };

    render() {
        const { courseId, data, addToCart } = this.props;
        const { sections } = data;
        const lectures = Object.values(sections);
        const lectureNames = Object.keys(sections);
        
        const subSectionToShow =
            this.state.showSubSection !== "" &&
            sections[this.state.showSubSection].subsections;

        const subSectionTimes =
            this.state.showSubSection !== "" && Object.values(subSectionToShow);

        const subSectionNames = this.state.showSubSection !== "" && Object.keys(subSectionToShow);

        return (
            <div className="course">
                <div className="course__metadata">
                    <p
                        className={`course__subject ${data.subject.replace(
                            /\s+/g,
                            ""
                        )}`}
                    >
                        {data.subject}
                    </p>
                    <p className="course__credits">{data.credits} credits</p>
                </div>

                <div className="course__action">
                    <h1 className="course__title" onClick={this.expand}>
                        {data.number} - {data.name}
                    </h1>

                    <button
                        className="btn-add"
                        onClick={e => addToCart(courseId, this.state.checkedSection, this.state.checkedSubSection, e)}
                    >
                        Add to cart
                    </button>
                </div>

                <div
                    className={`collapsible${
                        this.state.expanded ? " expanded" : ""
                    }`}
                >
                    <p className="course__description">{data.description}</p>
                    <div className="course__times">
                        <div className="course__sections">
                            {lectures.map((lecture, index) => (
                                <CourseSection
                                    key={index}
                                    name={lectureNames[index]}
                                    section={lecture}
                                    checked={
                                        this.state.checkedSection ===
                                        lectureNames[index]
                                    }
                                    onChange={this.handleSectionChange}
                                    onToggleSection={this.toggleSubsections}
                                />
                            ))}
                        </div>

                        <div className="course__subsections">
                            {this.state.showSubSection !== "" &&
                                subSectionTimes.map((time, index) => (
                                    <CourseSubSection
                                        key={index}
                                        name={subSectionNames[index]}
                                        checked={
                                            this.state.checkedSubSection ===
                                            subSectionNames[index]
                                        }
                                        onChange={this.handleSubSectionChange}
                                        subsection={time}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Course;
