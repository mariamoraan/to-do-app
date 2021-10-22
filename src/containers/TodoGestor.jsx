import React, {useState} from 'react'

import TodoList from './TodoList';
import TodoInput from '../components/TodoInput';
import TaskMenu from '../components/TaskMenu';

import '../styles/global.css';
import '../styles/TodoGestor.css';

const TodoGestor = () =>{
    var tasks_list = [
        {'done':false, 'text':'Complete online JavaScript course', 'key':'task-0', 'show':true},
        {'done':false, 'text':'Jog around the park 3x', 'key':'task-1', 'show':true},
        {'done':false, 'text':'10 minutes meditation', 'key':'task-2', 'show':true},
        {'done':false, 'text':'Read for 1 hour', 'key':'task-3', 'show':true},
    ]
    const [tasks, setTasks] = useState(tasks_list);
    return(
        <div className="to-do-gestor">
            
            <TodoInput tasks={tasks} setTasks={setTasks}/>
            <div className="todos">
                <TodoList tasks={tasks} setTasks={setTasks}/>
                <TaskMenu tasks={tasks} setTasks={setTasks}/>
            </div>
            
        </div>
    );
}

export default TodoGestor;