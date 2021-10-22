import React, {useState, useContext} from 'react';


import '../styles/global.css';
import '../styles/MyTasks.css';

import desk_dr from "../assets/bg-desktop-dark.jpg";
import desk_lg from "../assets/bg-desktop-light.jpg";
import mob_dr from "../assets/bg-mobile-dark.jpg";
import mob_lg from "../assets/bg-mobile-light.jpg";


import TodoGestor from '../containers/TodoGestor';


const MyTasks = () =>{
    var background = desk_lg;
    screen.width > 600 ? background=desk_lg : background=mob_lg;
    
    
    return(
        <div className="MyTasks">
            <header style={{ 
            backgroundImage: `url(${background})` 
            }}>
            </header>
            <div className="MyTasks-elems">
                <h1>TODO</h1>
                <TodoGestor />
            </div>
        </div>
    );
};

export default MyTasks;