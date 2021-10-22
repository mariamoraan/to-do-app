import React, {useContext, useState} from 'react';

import '../styles/global.css';
import '../styles/TodoList.css';

import Todo from '../components/Todo';

const TodoList = ({tasks, setTasks}) =>{
    
    return(
        
        tasks
        .filter(task => !task.removed)
        .map(task => (
            <div className="taskList-list" key={task.key}>
                {task.show ?
                <div className="taskList-list-task" ><Todo tasks={tasks} task={task} setTasks={setTasks}/></div>
                : null
                }
            </div>
        ))
        
    )
}

export default TodoList