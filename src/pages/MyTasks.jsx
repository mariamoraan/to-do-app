import React, {useState, useContext} from 'react';


import '../styles/global.css';
import '../styles/MyTasks.css';

import desk_dr from "../assets/bg-desktop-dark.jpg";
import desk_lg from "../assets/bg-desktop-light.jpg";
import mob_dr from "../assets/bg-mobile-dark.jpg";
import mob_lg from "../assets/bg-mobile-light.jpg";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg"


import TodoGestor from '../containers/TodoGestor';


const MyTasks = () =>{
    const [background, setBackground] = useState({'desktop':desk_lg, 'mobile':mob_lg});
    const [mode, toggleMode] = useState(true); //true = light, false = dark
    const changeMode = () =>{
        document.getElementById("mode-button").disabled = true;
        document.getElementById("mode-button").style.animation = "change_mode 1s";
        setTimeout(()=>{
            toggleMode(!mode);
            document.getElementById('app').classList.toggle('dark');
        },700)
        setTimeout(()=>{
            document.getElementById("mode-button").style.animation = null;
            document.getElementById("mode-button").disabled = false;
        },1000)
       
        
    }
    
    
    return(
        <div className="MyTasks">
            <header style={{ 
            backgroundImage: `url(${mode ? desk_lg : desk_dr})` 
            }}>
            </header>
            <div className="MyTasks-elems">
                <span>
                    <h1>TODO</h1>
                    <button id="mode-button" onClick={()=>{changeMode()}}><img src={mode ? moon : sun} alt="" /></button>
                </span>
                <TodoGestor />
            </div>
        </div>
    );
};

export default MyTasks;