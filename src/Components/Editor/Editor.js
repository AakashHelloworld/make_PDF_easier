import React, { useState } from 'react'
import { Tab } from '../Tab/Tab';
import { PdfReader } from '../PdfReader/PdfReader';
import pdfOne from "../../PDF/sample.pdf";
import pdfTwo from "../../PDF/sampleone.pdf";
import pdffour from "../../PDF/sampletwo.pdf";
import pdfThree from "../../PDF/samplethree.pdf";
export const Editor = ( {width, background}) => {
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

  return (
    <div style={{ height: '100%',width: `${width}`}} className='editorTab'>
    <Tab selectTab={selectTab} tabs={tabs}/>
    <PdfReader pdf={pdfselect} />
    </div>
  )
}
