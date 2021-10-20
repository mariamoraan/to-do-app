import React, {useState, useContext} from 'react';

import '../styles/global.css';
import '../styles/Task.css';

import close_icon from '../assets/icon-cross.svg';

import TaskText from '../components/TaskText';
import TaskInput from '../components/TaskInput';
import CompletedButton from '../components/CompletedButton';
import AppContext from '../context/AppContext';


const Task = ({props}) =>{
    const {removeFromList} = useContext(AppContext);
    const [done, setDone] = useState(props.done);
    const handleAction = (event) =>{
        setDone(!done);
    }
    return(
        <div className={props.input ? "task input-task" : "task"}>
            <CompletedButton 
            props={{'done':done, 'disabled':props.input}} 
            onAction={handleAction}/>
            {props.input
            ?
            <TaskInput />
            :
            (<TaskText  
            props={{'done':done, 'text':props.text}} 
            onAction={handleAction}/>)
            }
            {!props.input && <img className="remove-icon" src={close_icon} alt="remove" onClick={()=>{removeFromList(props)}} />}
        </div>
    );
};

export default Task;