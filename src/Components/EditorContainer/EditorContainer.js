import './EditorContainer.css';
import { Editor } from '../Editor/Editor';
import { useState } from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from 'react-redux';
import {useDispatch } from "react-redux"
import {dragHandler} from "../../Store/tabSlice"


 export const  EditorContainer =({modalOpen})=> {
  const tabsOne = useSelector(state => state.tab.tabsOne)
  const tabsTwo = useSelector(state => state.tab.tabsTwo)
  const split = useSelector(state => state.tab.split)
  const dispatch=useDispatch()
  const [widthOne, setWidthOne] = useState(50)
  const [widthTwo, setWidthTwo] = useState(50)
  const [isDragging, setIsDragging] = useState(false);

const dragEndHandler = (result) => {
    const { destination, source, draggableId: destinationId } = result;
    dispatch(dragHandler({destination, source, draggableId: destinationId}))
    setIsDragging(false);
};
  
  return (
    <DragDropContext onDragStart={() => setIsDragging(true)} onDragEnd={dragEndHandler}>
    <div className="editorContainer" style={modalOpen ?{ zIndex:-1}:{zIndex:0}}>
    
    <Editor isDragging={isDragging} setIsDragging={setIsDragging}
          tabId={'tabOne'} tabs={tabsOne} setMywidth={setWidthOne} setOtherwidth={setWidthTwo}     width={`${!split ? 100 : widthOne}%`} background={'blue'} />

{    split &&
    <Editor isDragging={isDragging} setIsDragging={setIsDragging}  tabId={'tabTwo'} tabs={tabsTwo}   setMywidth={setWidthOne}  width={`${widthTwo}%`} setOtherwidth={setWidthTwo}  background={'red'}/>

}

  
    </div>
    </DragDropContext>
  );
}