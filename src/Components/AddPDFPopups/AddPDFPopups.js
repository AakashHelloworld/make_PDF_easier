import React from 'react'
import style from "./AddPDFPopups.module.css"
const AddPDFPopups = ({setModalOpen}) => {
    const [selectFile, setSelectFile] = React.useState(null)
 
    return (
    <div id='container' className={style.container}
        onClick={e => {
            if (e.target.id === 'container') {
                setModalOpen(false)
            }
        }}
    >
        <div id='formContainer' className={style.formContainer}>
        <form id='form' className={style.form} 
        onDrop={(e)=>{
            e.preventDefault()
            setSelectFile(e.dataTransfer.files[0])
        }} >
            { !selectFile ?
                <>
            <span id='spanOne' className={style.span}>Drag and Drop or </span>
            <label id='label' className={style.label}>
                Browse File
                <input className={style.input} type='file' onChange={(e)=>setSelectFile(e.target.files[0])} />
            </label>
            </> : <span id='spanTwo'  className={style.span}>Uploaded PDF</span>
            } 
        </form>
        </div>
    </div>
  )
}

export default AddPDFPopups