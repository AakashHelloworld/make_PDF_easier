import React from 'react'
import style from "./Menu.module.css"

export const Menu=({createFolderHandler, importPdfFile})=>{
  return (
    <div className={style.menu}>
        <ul style={{paddingLeft:0}}>
            <li onClick={createFolderHandler} className={style.option}>New folder</li>
            <li className={style.option}
            onClick={importPdfFile}>Import Pdf</li>
            <li className={style.option}>Delete</li>
            <li className={style.option}>Rename</li>
        </ul>
    </div>
  )
}

