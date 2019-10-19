import React from "react";
import * as CourseStyles from "./styles/CourseStyles";
import CourseSection from "./CourseSection";
import CourseSubSection from "./CourseSubSection";
import { AddToCart } from "./styles/ButtonStyles";
import Collapsible from "./styles/Collapsible";

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

        const subSectionNames =
            this.state.showSubSection !== "" && Object.keys(subSectionToShow);

        return (
            <CourseStyles.CourseStyles>
                <CourseStyles.Metadata>
                    <CourseStyles.Subject
                        subject={data.subject.replace(/\s+/g, "")}
                    >
                        {data.subject}
                    </CourseStyles.Subject>
                    <CourseStyles.Credits>
                        {data.credits} credits
                    </CourseStyles.Credits>
                </CourseStyles.Metadata>

                <CourseStyles.Action>
                    <h1 onClick={this.expand}>
                        {data.number} - {data.name}
                    </h1>

                    <AddToCart
                        onClick={e =>
                            addToCart(
                                courseId,
                                this.state.checkedSection,
                                this.state.checkedSubSection,
                                e
                            )
                        }
                    >
                        Add to cart
                    </AddToCart>
                </CourseStyles.Action>

                <Collapsible expanded={this.state.expanded}>
                    <p>{data.description}</p>
                    <CourseStyles.Times>
                        <CourseStyles.Sections>
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
                        </CourseStyles.Sections>

                        <CourseStyles.Subsections>
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
                        </CourseStyles.Subsections>
                    </CourseStyles.Times>
                </Collapsible>
            </CourseStyles.CourseStyles>
        );
    }
}

export default Course;
