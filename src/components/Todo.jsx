import React, {useState, useContext} from 'react';

import '../styles/global.css';
import '../styles/Todo.css';

import close_icon from '../assets/icon-cross.svg';
import check_icon from '../assets/icon-check.svg';


const Todo = ({task, tasks, setTasks}) => {   
    const [isDone, setDone] = useState(task.done);
    const toggleDone = () =>{
        task.done = !task.done;
        setTasks(tasks.map(t => t.key == task.key ? task : t));
    }
    const toRemove = () =>{
        var new_tasks = tasks.filter(t => t.key != task.key);
        for(let i = 0; i<new_tasks.length ; i++){
            new_tasks[i].pos = i;
        }
        setTasks(new_tasks);
    }

    return(
        <div className="task">
            <button 
                key={task.key}
                className={task.done ? "completed-button active" : "completed-button"} 
                onClick={()=>{toggleDone()}}>
                {task.done ? (<img src={check_icon} alt=""/>) : null}
            </button>
            <p 
                onClick={()=>{toggleDone()}}
                className={task.done ? "task-text done" : "task-text"}>
                {task.text}
            </p>
            <img className="remove-icon" src={close_icon} alt="remove" onClick={()=>{toRemove()}} />
        </div>
    )
}

export default Todo;