import React from 'react';
import TaskList from '../containers/TaskList';
import AppContext from '../context/AppContext';
import useTasksState from '../hooks/useTasksState';

import '../styles/global.css';
import '../styles/App.css';

import MyTasks from '../pages/MyTasks';

const App = () =>{
    const useTaskState = useTasksState();
    return(
        <AppContext.Provider value={useTaskState}>
            <MyTasks />
        </AppContext.Provider>   
    );
};

export default App;