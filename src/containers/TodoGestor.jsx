import React, {useState} from 'react'

import TodoList from './TodoList';
import TodoInput from '../components/TodoInput';
import TaskMenu from '../components/TaskMenu';

import '../styles/global.css';
import '../styles/TodoGestor.css';

const TodoGestor = () =>{
    var tasks_list = [
        {'done':false, 'text':'Complete online JavaScript course', 'key':'task-0', 'show':true, 'pos':0},
        {'done':false, 'text':'Jog around the park 3x', 'key':'task-1', 'show':true, 'pos':1},
        {'done':false, 'text':'10 minutes meditation', 'key':'task-2', 'show':true, 'pos':2},
        {'done':false, 'text':'Read for 1 hour', 'key':'task-3', 'show':true, 'pos':3},
    ]
    function orderList  (item1,item2) {
        if(item1.pos > item2.pos) return 1
        else if(item1.pos < item2.pos) return -1
        else return 0;
    }
    const [tasks, setTasks] = useState(tasks_list.sort(orderList));
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