import React from "react";
import Tag from "./Tag";

const TagList = ({ tags, removeTag }) => {
    return (
        <div className="tag-list">
            {tags.map((tag, index) => (
                <Tag key={index} tagName={tag} removeTag={removeTag} />
            ))}
        </div>
    );
};

export default TagList;
