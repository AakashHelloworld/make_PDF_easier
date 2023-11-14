import './EditorContainer.css';
import { Editor } from '../Editor/Editor';
import { useState } from 'react';
import { ResizableBox } from 'react-resizable';

 export const  EditorContainer =()=> {
  const [widthOne, setWidthOne] = useState(50)
  const [widthTwo, setWidthTwo] = useState(50)
  
  return (
    <div className="editorContainer">
    <Editor scroll={true} setMywidth={setWidthOne} setOtherwidth={setWidthTwo}     width={`${widthOne}%`} background={'blue'} />
    <Editor  scroll={false} setMywidth={setWidthOne}  width={`${widthTwo}%`} setOtherwidth={setWidthTwo}  background={'red'}/>
    </div>
  );
}