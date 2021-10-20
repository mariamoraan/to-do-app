import React, {useContext} from 'react';

import '../styles/global.css';
import '../styles/TaskList.css';

import close_icon from '../assets/icon-cross.svg';

import Task from './Task';
import AppContext from '../context/AppContext';

const TaskList = () =>{
    const {state} = useContext(AppContext);
    const tasks = state.tasks;
    return(
        <div className="taskList-list">
            {
                tasks.map((task)=>
                    <div className="taskList-list-task" key={task.key} ><Task props={task}/></div>
                    
                )
            }
        </div>
    );
};

export default TaskList;