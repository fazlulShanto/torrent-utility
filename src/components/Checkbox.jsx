import React, { useState } from "react";

const Checkbox = ({ label, onChange, defaultValue }) => {
    const [checked, setChecked] = useState(!!defaultValue);

    const handleChange = () => {
        const newCheckedState = !checked;
        setChecked(newCheckedState);

        // Call the custom onChange handler, if provided
        if (onChange) {
            onChange(newCheckedState);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                id="checkbox"
                checked={checked}
                onChange={handleChange}
                className="form-checkbox text-sm h-5 w-5 accent-green-500 transition duration-150 ease-in-out"
            />
            <label htmlFor="checkbox" className="text-sm">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
