import React, {useState} from 'react';

import TaskList from './TaskList';
import Task from './Task';
import TaskMenu from '../components/TaskMenu';

import '../styles/global.css';
import '../styles/TaskGestor.css';


const TaskGestor = () =>{
    return(
        <div className="task-gestor">
            <TaskList/>
            <TaskMenu />
        </div>
    );
};

export default TaskGestor;