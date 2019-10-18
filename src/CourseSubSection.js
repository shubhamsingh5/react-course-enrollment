import React from "react";
import Checkbox from "./Checkbox";
import "./CourseSubSection.css";

const CourseSubSection = ({ name, subsection, checked, onChange }) => {
    const location = subsection.location;
    const days = Object.keys(subsection.time);
    const times = Object.values(subsection.time);
    return (
        <div className="course__sub-section">
            <div className="sub-section">
                <Checkbox name={name} checked={checked} onChange={onChange} />
                <div className="sub-section__info">
                    <p>{location}</p>
                    {times.map((time, index) => (
                        <p key={index}>{days[index]}: {time}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseSubSection;
