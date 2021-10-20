import React, {useState} from 'react';


import '../styles/global.css';
import '../styles/MyTasks.css';

import desk_dr from "../assets/bg-desktop-dark.jpg";
import desk_lg from "../assets/bg-desktop-light.jpg";
import mob_dr from "../assets/bg-mobile-dark.jpg";
import mob_lg from "../assets/bg-mobile-light.jpg";


import Tasks from '../containers/Tasks';


const MyTasks = () =>{
    const background = desk_lg;
    return(
        <div className="MyTasks">
            <header style={{ 
            backgroundImage: `url(${background})` 
            }}>
            </header>
            <div class="MyTasks-elems">
                <h1>TODO</h1>
                <Tasks />
            </div>
        </div>
    );
};

export default MyTasks;