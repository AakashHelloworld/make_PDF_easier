import React from 'react'
import style from "./AddPDFPopups.module.css"
const AddPDFPopups = ({setModalOpen, setSelectFile, selectFile}) => { 
    return (
    <div id='container' className={style.container}
        onClick={e => {
            if (e.target.id === 'container') {
                setModalOpen(false)
            }
        }}
    >
        <div id='formContainer' className={style.formContainer}>
        <form id='form' className={style.form}>
            { !selectFile ?
                <>
            <label id='label' className={style.label}>
                Browse File
                <input className={style.input} type='file' onChange={(e)=>{
                    console.log(e.target.files[0])
                    if (e.target.files[0]) {
                        setSelectFile(e.target.files[0])
                        setModalOpen(false)
                    }
}} />
            </label>
            </> : <span id='spanTwo'  className={style.span}>Uploaded PDF</span>
            } 
        </form>
        </div>
    </div>
  )
}

export default AddPDFPopups