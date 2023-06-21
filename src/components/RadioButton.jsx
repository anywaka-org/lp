import React, { useState } from 'react';

function RadioButton(props) {
    // const [active,setActive]=useState(true)
    return (
        <div onClick={props.onClick} class={props.active?'space':'off_space'}>
            <div className="ball"></div>
        </div>
    );
}

export default RadioButton;