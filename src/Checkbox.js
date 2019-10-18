import React from "react";
import "./Checkbox.css";

const Checkbox = ({ name, checked = false, onChange }) => (
    <label className="check">
        <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
        />
        <span></span>
    </label>
);

export default Checkbox;
