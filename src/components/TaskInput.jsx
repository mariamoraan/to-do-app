import React, {useState, useContext} from 'react';

import '../styles/global.css';
import '../styles/TaskInput.css';

import AppContext from '../context/AppContext';


const TaskInput = () =>{
    const [datos, setDatos] = useState('');
    const {state,addToList} = useContext(AppContext);
    const handleSubmit = (event) => {
        var form = document.getElementById('new-task-form');
        event.preventDefault();
        var key = "task-" + (state.tasks.length + 1);
        addToList({'done':false, 'text':datos, 'key':key});
        form.reset();
    }
    const handleChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos(event.target.value);
    }
    return(
        <form id="new-task-form" onSubmit={handleSubmit}>
            <input 
            onChange={handleChange}
            type="text"
            name="task"
            placeholder="Create a new to do"
            className="task-text"/>
            <input type="submit" className="none"/>
        </form>
    );
};

export default TaskInput;