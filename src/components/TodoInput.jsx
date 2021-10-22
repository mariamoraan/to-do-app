import React, {useState} from 'react'

import '../styles/TodoInput.css';
import add from '../assets/add_black_24dp.svg';

const TodoInput = ({tasks, setTasks}) =>{
    const [newTask, setNewTask] = useState('');
    const handleChange = (event) =>{
        setNewTask(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        var form = document.getElementById("task-input-form");
        setTasks([...tasks, {'done':false, 'key':"task-"+tasks.length, 'text':newTask, 'show':true}]);
        form.reset();
        setNewTask('');
    }
    return (
        <div className="task-input">
            <form id="task-input-form" onSubmit={handleSubmit}>
            <input
            className="input" 
            onChange={handleChange}
            type="text"
            name="task"
            placeholder="Create a new to do..."
            className="task-text-input"/>
            <input 
            style={{ backgroundImage: `url(${add})` }}
            type="submit" value=""  className="send-button"/>
        </form>
        </div>
    );
}

export default TodoInput;