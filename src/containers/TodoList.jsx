import React, {useContext, useState} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



import '../styles/global.css';
import '../styles/TodoList.css';


import Todo from '../components/Todo';

const TodoList = ({tasks, setTasks}) =>{
    const onDragEnd = result => {
        if (!result.destination) return;
        if (result.destination.index === result.source.index) return;
        const { destination, source, draggableId } = result;
        const new_elements = reorder(tasks, source.index, destination.index);
        var count = 0;
        for(let i = 0; i<new_elements.length ; i++){
            if(new_elements[i].show == true){
                new_elements[i].pos = count;
                count = count + 1;
            }
        }
        setTasks(new_elements);
    }
    function reorder(list,startIndex, endIndex){
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }
    
    
      
    
    return(
        <DragDropContext onDragEnd={onDragEnd}>
            
            <Droppable droppableId="droppable-1">
                {(provided, snapshot) =>(
                    <ul className="taskList-list" 
                    ref={provided.innerRef} {...provided.droppableProps}
                    > 
                    {tasks
                    .filter(task => !task.removed)
                    .map((task,i) => ( 
                        task.show ?
                            <Draggable 
                                key={task.key} 
                                draggableId={'draggable-'+task.key} 
                                index={task.pos}>
                                {(provided, snapshot) =>
                                    <li 
                                    ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                                    className="taskList-list-task" 
                                    >
                                        <Todo tasks={tasks} task={task} setTasks={setTasks} />
                                    </li>
                                }
                            </Draggable>
                        
                        : null     
                    )
                )}
                {provided.placeholder}
                </ul>
                
                )}
                
            </Droppable>
            
            </DragDropContext>
        
        
    )
}

export default TodoList