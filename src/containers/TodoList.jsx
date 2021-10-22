import React, {useContext, useState} from 'react';

import '../styles/global.css';
import '../styles/TodoList.css';

import Todo from '../components/Todo';

const TodoList = ({tasks, setTasks}) =>{
    
    return(
        <div className="taskList-list" >
        {
        tasks
        .filter(task => !task.removed)
        .map(task => ( 
                task.show ?
                <div className="taskList-list-task" key={task.key}><Todo tasks={tasks} task={task} setTasks={setTasks}/></div>
                : null     
        ))
        }
        </div>
        
    )
}

export default TodoList