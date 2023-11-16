import React, { useEffect, useState } from 'react'
import { Tab } from '../Tab/Tab';
import { PdfReader } from '../PdfReader/PdfReader';
import { Draggable,Droppable, DragDropContext } from "react-beautiful-dnd";
import { tab } from '@testing-library/user-event/dist/tab';


export const Editor = ( {width, setMywidth,setOtherwidth,scroll, tabs, tabId, setTabsTwo, setTabsOne }) => {
    const [pdfselect, setPdfselect] = useState(tabs[0]?.content);
     
    const selectTab = (tab) =>{
        const selectedPdf = tabs.find((t) => t.name === tab);
        if(selectedPdf){
          setPdfselect(selectedPdf.content);
        }
    }

    useEffect(()=>{
        if(tabs[0]?.id){
      const length = tabs.length-1
      setPdfselect(tabs[length]?.content)
        }
    }, [setTabsTwo,setTabsOne,tabs])

    const resize = (e) => {
      const editorContainerLeft = document.querySelector('.editorContainer').getBoundingClientRect().left;
      const editorContainerRight = document.querySelector('.editorContainer').getBoundingClientRect().right;
      const editorContainerWidth = editorContainerRight - editorContainerLeft;
      const positionOfblue = e.pageX;
      const newWidth = Math.floor(((editorContainerRight - positionOfblue)/editorContainerWidth * 100))
      if(newWidth >0 && newWidth < 100){
        setMywidth(100 - newWidth)
        setOtherwidth(newWidth)
      }
    };
    

    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }

    const mouseDownHandler = (e)=>{
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    }



  return (
    <Droppable droppableId={tabId} direction='horizontal'>
    {(provided, snapshot) => (
    <div
    ref={provided.innerRef}
    {...provided.droppableProps}
     style={{ height: '100%',width: `${width}`, position:`relative`, overflowX:'hidden'}} className='editorTab' >
    <Tab tabId={tabId} selectTab={selectTab} tabs={tabs}/>
    <PdfReader pdf={pdfselect} />
    {  scroll&&
    <div className='resize' style={{position:`absolute`,top:'0',right:0, height:'100%',width:'2px',background:`#323232`, transform:`translateX(-50%)`, cursor: `w-resize`}} onMouseDown={mouseDownHandler}></div>
    }
    {provided.placeholder}
    </div>      
    )}
    </Droppable>
  )

}
