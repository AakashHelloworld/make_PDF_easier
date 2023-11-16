import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp, FaFolder, FaFolderOpen } from 'react-icons/fa'

 export const FolderIcon =({onclick})=> {
  const [open,setOpen]=useState(true)
  return (
    <>
    <button
        style={{
            backgroundColor:'transparent',
            border:'none',
            outline:'none',
            cursor:'pointer',
        }}
        onClick={(e)=>{
          onclick(e)
          setOpen(prev=>!prev)
        }}
    >
        {
            open==false?
            <FaAngleDown
            size={15}  color='white'

            />
            :<FaAngleUp
            size={15}  color='white'
            />
        }
    </button>
    {
      open?
      <FaFolderOpen size={20}  color='rgba(255,198,0,255)'/>
      :<FaFolder size={20} color='rgba(255,198,0,255)' />
    }
    </>
  )
}
