import React, { useEffect, useState } from 'react'
import { Tab } from '../Tab/Tab';
import { PdfReader } from '../PdfReader/PdfReader';
import { Draggable,Droppable, DragDropContext } from "react-beautiful-dnd";
import { tab } from '@testing-library/user-event/dist/tab';
import { useSelector } from 'react-redux';


export const Editor = ( {width, isDragging, setMywidth,setOtherwidth,scroll, setIsDragging, tabs, tabId, setTabsTwo, setTabsOne }) => {
  const tabsOne = useSelector(state => state.tabsOne)
  const tabsTwo = useSelector(state => state.tabsTwo)

    const [pdfselect, setPdfselect] = useState(tabs[0]?.content);
     
    const selectTab = (tab) =>{
        const selectedPdf = tabs.find((t) => t.name === tab);
        if(selectedPdf){
          setPdfselect(selectedPdf.content);
        }
    }

    const pdfUrl=(file)=>{
      const url=URL.createObjectURL(file)
      return url
    }

    useEffect(()=>{
        if(tabs[0]?.id){
      const length = tabs.length-1
      setPdfselect(tabs[length]?.content)
        }
    }, [tabsOne, tabsTwo,tabs])

    const resize = (e) => {
      const editorContainerLeft = document.querySelector('.editorContainer').getBoundingClientRect().left;
      const editorContainerRight = document.querySelector('.editorContainer').getBoundingClientRect().right;
      console.log(editorContainerLeft, editorContainerRight)
      const editorContainerWidth = editorContainerRight - editorContainerLeft;
      const positionOfblue = e.pageX;
      const newWidth = Math.floor(((editorContainerRight - positionOfblue)/editorContainerWidth * 100))
      console.log(newWidth)
      console.log(tabId)
        setMywidth(100 - newWidth)

        setOtherwidth(newWidth)
      
    };
    

    function stopResize() {
      setIsDragging(false)
      window.removeEventListener('mousemove', resize)
    }

    const mouseDownHandler = (e)=>{
      setIsDragging(true)
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
    <div style={{width:'100%',height:'100%', position:"relative", display:'flex', justifyContent:'center', alignItems:'center', background:`#1a3447`}}>
    { pdfselect &&

    <iframe  style={{width:'98%',height:'98%'}} src={pdfselect}></iframe>
    }
    { isDragging &&

      <div style={{position:`absolute`,top:'0',left:0, height:'100%', width: '100%'}}>

      </div>


    }
    </div>
    <div className='resize' style={{position:`absolute`,top:'0',left:0, height:'100%',width:'5px',background:`#1a3447`, transform:`translateX(-50%)`, cursor: `w-resize`}} onMouseDown={mouseDownHandler}></div>
    
    {provided.placeholder}
    </div>      
    )}
    </Droppable>
  )

}
