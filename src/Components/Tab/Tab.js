import React, { useEffect } from 'react'
import './Tab.css'
import { Draggable,Droppable,DragDropContext} from "react-beautiful-dnd";
import { BiSolidFilePdf } from "react-icons/bi";

export const Tab = ({tabs,selectTab, tabId}) => {

  return ( 
      <div className='tab'
              id={tabId}
            
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
           <BiSolidFilePdf
              style={{marginRight:'4px'}} 
              size={20}
              color='red'

           />
            { tab?.name?.length > 10 ?(tab?.name).slice(0,10) + "...": tab?.name }
            {provided.placeholder}
          </div> 
          )}
          </Draggable>
        
        )  
      })
    }
    </div>      

  )
}
