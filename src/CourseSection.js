import React from "react";
import Checkbox from "./Checkbox";
import "./CourseSection.css";

const CourseSection = ({
    name,
    checked,
    section,
    onChange,
    onToggleSection
}) => {
    const { instructor, location, time } = section;
    const timeKeys = Object.keys(time);

    return (
        <div className="course__section">
            <Checkbox name={name} checked={checked} onChange={onChange} />
            <div className="section__info">
                <h4
                    className="section__instr"
                    onClick={e => onToggleSection(name, e)}
                >
                    {instructor}
                </h4>
                <div className="section__time">
                    <p>{location}</p>
                    {timeKeys.map((key, index) => {
                        return (
                            <p key={key}>
                                {key}: {time[key]}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CourseSection;
