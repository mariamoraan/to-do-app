import React, {useState} from 'react';

import '../styles/global.css';
import '../styles/TaskMenu.css';



const TaskMenu = ({tasks, setTasks}) =>{
    const [actualFilter, setActualFilter] = useState({'k':'all', 'f':'key', 'v':null})
    const handleFilter = (k,f,v) =>{
        setActualFilter({'k':k, 'f':f, 'v':v})
        setTasks(tasks.map(t => {
            t.done == v ? t.show = false : t.show = true;
            return t;
        }))
    }
    return(
        <div>

            <nav className="menu-general">
                <div className="left">
                    <p>{tasks.length} items left</p>
                </div>
                <div className="center">
                    <button className={actualFilter.k == 'all' ? "active-filter" : ""} onClick={()=>{handleFilter('all','key',null)}}>All</button>
                    <button className={actualFilter.k == 'active' ? "active-filter" : ""} onClick={()=>{handleFilter('active','done',true)}}>Active</button>
                    <button className={actualFilter.k == 'completed' ? "active-filter" : ""} onClick={()=>{handleFilter('completed','done',false)}}>Completed</button>
                </div>
                <div className="right">
                    <button onClick={()=>{setTasks(tasks.filter(t => ! t.done))}}>Clear Complete</button>
                </div>
            </nav>

            <nav className="menu-mobile">
                <button className={actualFilter.k == 'all' ? "active-filter" : ""} onClick={()=>{handleFilter('all','key',null)}}>All</button>
                <button className={actualFilter.k == 'active' ? "active-filter" : ""} onClick={()=>{handleFilter('active','done',true)}}>Active</button>
                <button className={actualFilter.k == 'completed' ? "active-filter" : ""} onClick={()=>{handleFilter('completed','done',false)}}>Completed</button>
            </nav>

        </div>
    );
};

export default TaskMenu;