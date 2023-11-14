import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';
export const PdfReader = ({ pdf}) => {
  const [numPages, setNumPages] = useState();

  const onDocumentLoadSuccess=({ numPages })=>{
    setNumPages(numPages);
  }

  return (
    <div className='editorSubContainer'>
    <div className='edittab'>
    </div>
    <div className='editor'>
    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
    {
      Array.apply(null, Array(numPages)).map((x,i)=> i+1).map((pageNumber)=>{
        return (
          <Page pageNumber={pageNumber} key={pageNumber} renderAnnotationLayer={false} renderTextLayer={false} />            
        )
      })
      }
    </Document>
    </div>
  </div>
  )
}
