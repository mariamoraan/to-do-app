import React, {useState} from 'react';

import '../styles/global.css';
import '../styles/TaskMenu.css';


const TaskMenu = () =>{
    return(
        <div>

            <nav className="menu-general">
                <div className="left">
                    <p>5 items left</p>
                </div>
                <div className="center">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
                <div className="right">
                    <button>Clear Complete</button>
                </div>
            </nav>

            <nav className="menu-mobile">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
            </nav>

        </div>
    );
};

export default TaskMenu;