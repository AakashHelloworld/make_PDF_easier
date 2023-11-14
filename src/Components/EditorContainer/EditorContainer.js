import './EditorContainer.css';
import { Editor } from '../Editor/Editor';
import { useState } from 'react';
import { ResizableBox } from 'react-resizable';

 export const  EditorContainer =()=> {
  const [widthOne, setWidthOne] = useState(50)
  const [widthTwo, setWidthTwo] = useState(50)
  
  return (
    <div className="editorContainer">
    <Editor   width={`${widthOne}%`} background={'blue'} />
    <div className="scroll"></div>
    <Editor  width={`${widthTwo}%`} background={'red'}/>
    </div>
  );
}