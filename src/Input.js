import React, { useState } from 'react';
import PropTypes, { func } from 'prop-types';

function Input ({ addPost }) {
    const [input, setInput] = useState('');

    function onChange(event) {
        setInput(event.target.value);
    }

    function onKeydown(event){
        const title = event.target.value;

        if(event.key == 'Enter' && title) {
            addPost(title);
            setInput('');
        }
    }

    return (
            <div className="Input">
            <div className="Input_header">Create Post</div>
            <input className="Input_field" type="text" value={input} onChange={onChange} onKeyDown={onKeydown}></input>
        </div>
    );
}

Input.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default Input;
