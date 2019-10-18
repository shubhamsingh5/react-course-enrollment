import React from "react";

const Tag = ({ tagName, removeTag }) => {
    return (
        <div className="tag">
            <p>{tagName}</p>
            <button className="btn-remove" onClick={e => removeTag(tagName, e)}>
                <span>&times;</span>
            </button>
        </div>
    );
};

export default Tag;
