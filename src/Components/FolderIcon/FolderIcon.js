import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp, FaFolder, FaFolderOpen } from 'react-icons/fa'

 export const FolderIcon =({onclick})=> {
  const [open,setOpen]=useState(true)
  return (
    <>
    <button
        onClick={(e)=>{
          onclick(e)
          setOpen(prev=>!prev)
        }}
    >
        {
            open==false?
            <FaAngleDown/>
            :<FaAngleUp/>
        }
    </button>
    {
      open?
      <FaFolderOpen/>
      :<FaFolder/>
    }
    </>
  )
}
