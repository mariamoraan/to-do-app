import React, {useState} from 'react';


import '../styles/global.css';
import '../styles/Tasks.css';
import TaskGestor from './TaskGestor';
import Task from './Task';


const Tasks = () =>{
    return(
        <div className="tasks">
            <Task props={{'done':false, 'input':true}} id="input"/>
            <br />
            <TaskGestor />
        </div>
    );
};

export default Tasks;