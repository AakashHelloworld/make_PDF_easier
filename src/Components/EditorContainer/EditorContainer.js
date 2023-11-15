import './EditorContainer.css';
import { Editor } from '../Editor/Editor';
import { useState } from 'react';
import pdfOne from "../../PDF/sample.pdf";
import pdfTwo from "../../PDF/sampleone.pdf";
import pdffour from "../../PDF/sampletwo.pdf";
import pdfThree from "../../PDF/samplethree.pdf";
import { Draggable,Droppable, DragDropContext } from "react-beautiful-dnd";


 export const  EditorContainer =()=> {

  const [widthOne, setWidthOne] = useState(50)
  const [widthTwo, setWidthTwo] = useState(50)
  const [tabsOne, setTabsOne] = useState( [
    {
      id:Math.random(), 
      name: 'tab1',
      content: pdfOne,
    },
    {
      id:Math.random(), 
      name: 'tab2',
      content: pdfTwo,
    },
    {
      id:Math.random(), 
      name: 'tab3',
      content: pdffour,
    },
    {
        id:Math.random(), 
        name: 'tab4',
        content: pdfThree,
    }
  ])

  const [tabsTwo, setTabsTwo] = useState([
    {
      id:Math.random(), 
      name: 'tab1',
      content: pdfOne,
    },
    {
      id:Math.random(), 
      name: 'tab3',
      content: pdffour,
    },
    {
        id:Math.random(), 
        name: 'tab4',
        content: pdfThree,
    }
  ])

  const dragEndHandler = (result) => {
    const destination = result.destination;
    const source = result.source;
    console.log(destination, source)
    if(!(source?.droppableId && destination?.droppableId)) return
    if(source.droppableId == destination.droppableId) {
      return
    }
    const destinationId = result.draggableId;
    const isItInTabOne = tabsOne.filter((data)=>  (data.id == destinationId))
    if(isItInTabOne?.length){
        setTabsTwo((prev)=>{
          return[...prev, isItInTabOne[0]]
        })
        const filterThatTab = tabsOne.filter((data)=>(data.id != destinationId))
        setTabsOne(filterThatTab)
    }else{
      const isItInTabTwo = tabsTwo.filter((data)=>(data.id == destinationId))
        if(isItInTabTwo?.length){
            setTabsOne((prev)=>{
              return [...prev, isItInTabTwo[0] ]
            })
            const filterThatTab = tabsTwo.filter((data)=>(data.id != destinationId))
            setTabsTwo(filterThatTab)
        }
      }};
  
  return (
    <DragDropContext onDragEnd={dragEndHandler}>
    <div className="editorContainer">
    <Editor setTabsOne={setTabsOne} setTabsTwo={setTabsTwo}  tabId={'tabOne'} tabs={tabsOne} scroll={true} setMywidth={setWidthOne} setOtherwidth={setWidthTwo}     width={`${widthOne}%`} background={'blue'} />
    <Editor setTabsOne={setTabsOne} setTabsTwo={setTabsTwo} tabId={'tabTwo'} tabs={tabsTwo}  scroll={false} setMywidth={setWidthOne}  width={`${widthTwo}%`} setOtherwidth={setWidthTwo}  background={'red'}/>
    </div>
    </DragDropContext>
  );
}