import { useState } from "react";

const tasksState = {
    tasks: [
        {'done':true, 'text':'Complete online JavaScript course', 'key':'task-1'},
        {'done':false, 'text':'Jog around the park 3x', 'key':'task-2'},
        {'done':false, 'text':'10 minutes meditation', 'key':'task-3'},
        {'done':false, 'text':'Read for 1 hour', 'key':'task-4'},
    ]
}

    const useTasksState = () =>{
        const [state, setState] = useState(tasksState);
        const addToList = (payload) =>{
            setState({
                ...state,
                tasks: [...state.tasks, payload]
            });
        }
        const removeFromList = (payload) =>{
            setState({
                ...state,
                tasks:state.tasks.filter(item => item.key !== payload.key)
            });
        }
        return{
            state,
            addToList,
            removeFromList
        }
    
}

export default useTasksState;