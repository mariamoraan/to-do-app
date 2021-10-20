import React, {useState} from 'react';

import '../styles/global.css';
import '../styles/TaskText.css';


const TaskText = ({props, onAction}) =>{
    return(
        <p 
        onClick={onAction}
        className={props.done ? "task-text done" : "task-text"}>
            {props.text}
        </p>
    );
};

export default TaskText;