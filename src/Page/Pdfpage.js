import React, {useState} from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Sidebar } from '../Components/Sidebar/Sidebar'
import  {EditorContainer} from "../Components/EditorContainer/EditorContainer"
import "./Pdfpage.css"

export const Pdfpage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='pdfpage'>
        <Navbar/>
        <div className='container'>
        <Sidebar modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        <EditorContainer modalOpen={modalOpen} />
        </div>
    </div>
  )
}
