import * as React from 'react';


const Textarea = ({ onChange, value, title, required = false, size = "large" }) => {
    return <div className={`nirsal__InputContainer ${size}`}>
        <label>{title}</label>
        <textarea
            onChange={onChange}
            value={value}
            placeholder={title}
            required={required}
        ></textarea>

    </div>;
};

export default Textarea;
