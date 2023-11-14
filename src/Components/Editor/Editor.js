import React, { useState } from 'react'
import { Tab } from '../Tab/Tab';
import { PdfReader } from '../PdfReader/PdfReader';
import pdfOne from "../../PDF/sample.pdf";
import pdfTwo from "../../PDF/sampleone.pdf";
import pdffour from "../../PDF/sampletwo.pdf";
import pdfThree from "../../PDF/samplethree.pdf";
export const Editor = ( {width, setMywidth,setOtherwidth,scroll}) => {
    const [pdfselect, setPdfselect] = useState(pdfOne);

    const tabs = [
      {
        name: 'tab1',
        content: pdfOne,
      },
      {
        name: 'tab2',
        content: pdfTwo,
      },
      {
        name: 'tab3',
        content: pdffour,
      },
      {
          name: 'tab4',
          content: pdfThree,
      }

    ]
     
    const selectTab = (tab) =>{
        console.log(tab)
        const selectedPdf = tabs.find((t) => t.name === tab);
        if(selectedPdf){
          setPdfselect(selectedPdf.content);
        }

    }

    const resize = (e) => {
      const editorContainerLeft = document.querySelector('.editorContainer').getBoundingClientRect().left;
      const editorContainerRight = document.querySelector('.editorContainer').getBoundingClientRect().right;
      const editorContainerWidth = editorContainerRight - editorContainerLeft;
      const positionOfblue = e.pageX;
      const newWidth = Math.floor(((editorContainerRight - positionOfblue)/editorContainerWidth * 100))
      console.log(newWidth)
      if(newWidth >30 && newWidth < 70){
        setMywidth(100 - newWidth)
        setOtherwidth(newWidth)
      }
    };
    

    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }

    const mouseDownHandler = (e)=>{
      console.log(e)
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    }

  return (
    <div style={{ height: '100%',width: `${width}`, position:`relative`, overflowX:'hidden'}} className='editorTab' onMouseDown={mouseDownHandler}>
    <Tab selectTab={selectTab} tabs={tabs}/>
    <PdfReader pdf={pdfselect} />
    {  scroll&&
    <div className='resize' style={{position:`absolute`,top:'0',right:0, height:'100%',width:'2px',background:`#323232`, transform:`translateX(-50%)`, cursor: `w-resize`}}></div>
    }
    </div>
  )
}
