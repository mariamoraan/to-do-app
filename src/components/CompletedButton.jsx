import React, {useState} from 'react';

import '../styles/global.css';
import '../styles/CompletedButton.css';

import check_icon from '../assets/icon-check.svg';

const CompletedButton = ({props, onAction}) =>{
    return(
        <button 
        disabled={props.disabled}
        key={props.key}
        className={props.done ? "completed-button active" : "completed-button"} 
        onClick={onAction}>
            {props.done ? (<img src={check_icon} alt=""/>) : null}
        </button>
    );
};

export default CompletedButton;