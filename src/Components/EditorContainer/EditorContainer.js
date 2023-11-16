import './EditorContainer.css';
import { Editor } from '../Editor/Editor';
import { useState } from 'react';
import pdfOne from "../../PDF/sample.pdf";
import pdfTwo from "../../PDF/sampleone.pdf";
import pdffour from "../../PDF/sampletwo.pdf";
import pdfThree from "../../PDF/samplethree.pdf";
import {Droppable, DragDropContext } from "react-beautiful-dnd";


 export const  EditorContainer =({modalOpen})=> {

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
    const { destination, source, draggableId: destinationId } = result;
    
    console.log(destination, source, destinationId)
    
    if(!(source?.droppableId && destination?.droppableId)) return

    const reorderItems = (items, source, destination) => {
        const [reorderedItem] = items.splice(source.index, 1);
        items.splice(destination.index, 0, reorderedItem);
        return items;
    }

    const filterItems = (items, id) => items.filter((data)=>(data.id != id))

    if(source.droppableId == destination.droppableId) {
        if(tabsOne.some(data => data.id == destinationId)){
            setTabsOne(reorderItems(Array.from(tabsOne), source, destination));
        }
        if(tabsTwo.some(data => data.id == destinationId)){
            setTabsTwo(reorderItems(Array.from(tabsTwo), source, destination));
        }
        return
    }

    if(tabsOne.some(data => data.id == destinationId)){
        setTabsTwo(prev => [...prev, ...tabsOne.filter(data => data.id == destinationId)]);
        setTabsOne(filterItems(tabsOne, destinationId));
    }else if(tabsTwo.some(data => data.id == destinationId)){
        setTabsOne(prev => [...prev, ...tabsTwo.filter(data => data.id == destinationId)]);
        setTabsTwo(filterItems(tabsTwo, destinationId));
    }
};
  
  return (
    <DragDropContext onDragEnd={dragEndHandler}>
    <div className="editorContainer" style={modalOpen ?{ zIndex:-1}:{zIndex:0}}>
    { tabsOne.length > 0 &&
    <Editor    
        setTabsOne={setTabsOne} setTabsTwo={setTabsTwo}  tabId={'tabOne'} tabs={tabsOne} scroll={true} setMywidth={setWidthOne} setOtherwidth={setWidthTwo}     width={(tabsTwo.length)?`${widthOne}%`:`100%`} background={'blue'} />
  }
  { tabsTwo.length > 0 &&
    <Editor setTabsOne={setTabsOne} setTabsTwo={setTabsTwo} tabId={'tabTwo'} tabs={tabsTwo}  scroll={false} setMywidth={setWidthOne}  width={tabsOne.length?`${widthTwo}%`:`100%`} setOtherwidth={setWidthTwo}  background={'red'}/>

  }
    </div>
    </DragDropContext>
  );
}