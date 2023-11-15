import React from 'react'
import './Tab.css'
import { Draggable,Droppable,DragDropContext} from "react-beautiful-dnd";

export const Tab = ({tabs,selectTab, tabId}) => {

  return ( 

    <Droppable key={tabId} droppableId={tabId} direction='horizontal'>
    {(provided, snapshot) => (
      <div className='tab'
              id={tabId}
               ref={provided.innerRef}
              {...provided.droppableProps}
      >
    {
      tabs?.map((tab, index)=>{
        return (
          <Draggable draggableId={`${tab.id}`} index={index} key={tab.id}>
          {(provided, snapshot) => (             

          <div 
          index={index}
          id={`${tab.id}`}  
          title={tab.name} 
          onClick={()=>selectTab(tab.name)} 
          value={tab.name} key={tab.name} 
          className='tabButton'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
           >
            {tab.name}
          </div> 
          )}
          </Draggable>
        
        )  
      })
    }
    {provided.placeholder}
    </div>      
    )}
    </Droppable>
  )
}
