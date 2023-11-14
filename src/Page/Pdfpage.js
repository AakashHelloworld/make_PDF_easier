import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Sidebar } from '../Components/Sidebar/Sidebar'
import  {EditorContainer} from "../Components/EditorContainer/EditorContainer"
import "./Pdfpage.css"

export const Pdfpage = () => {
  return (
    <div className='pdfpage'>
        <Navbar/>
        <div className='container'>
        <Sidebar/>
        <EditorContainer/>
        </div>
    </div>
  )
}
