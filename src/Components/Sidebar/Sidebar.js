import React, { useEffect, useRef, useState } from 'react'
import {GrDocumentPdf} from "react-icons/gr"
import { FaAngleDown } from "react-icons/fa";
import {FolderIcon} from '../FolderIcon/FolderIcon'
// import Menu from './Menu/Menu';
import style from "./Sidebar.module.css"
import { Menu } from '../Menu/Menu';
import { folder } from '../../Utils/folder';
import AddPDFPopups from '../AddPDFPopups/AddPDFPopups';

export const Sidebar =()=>{
    const [menuOptionActive,setMenuOptionActive]=useState(false)
    const [folderStructure, setFolderStructure] = useState(folder)
    const [selectedFolder, setSelectedFolder] = useState("")
    const [modalOpen, setModalOpen] = useState(false);
    const folderClickHandler=(e)=>{
        console.log(e)
        e.preventDefault()
        const menuContainer=document.querySelector("."+style.menuContainer)
        console.log(menuContainer, e.pageX, e.pageY)
        menuContainer.style.left=e.pageX - 6+"px"
        menuContainer.style.top=e.pageY - 15+"px"
        setMenuOptionActive(true)  
    }

    const createFolderHandler = (e) => {
        e.preventDefault();
        let faltufolder = folderStructure
        const fileId = selectedFolder; 
        if(fileId == "") return;
        
        const NewFolderStructure = {
            name: "New Folder",
            type: "folder",
            id: Date.now(),
            child: []
        };
        const loop = (folder, id, newFolder) => {
            if(folder?.id == id) {
                folder?.child.push(newFolder);
                console.log(folder)
            } else {
                for(let i = 0; i < folder?.child?.length; i++){
                    loop(folder?.child[i], id, newFolder);
                }
            }
        }
        loop(folderStructure, fileId, NewFolderStructure)
        setFolderStructure(folderStructure)
        setMenuOptionActive(false)
    };


    const importPdfFile = (e) => {
        e.preventDefault();
        setModalOpen(true);
        setMenuOptionActive(false)
        
    }
    
    
    

    const figureOutStructure=(element)=>{
        if(element.name=="root"){
            return (
                <li>
                    <div className='root'>
                        <ul style={{paddingLeft:0}}>
                        {
                                element.child.map((i,index)=>(
                                    <li style={{color:"white"}} key={index}>
                                        {
                                            figureOutStructure(i)
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </li>
            )
        }
        else if(element.type=="file"){
            return (
                <div id={element.id} className={style.file} >
                    <GrDocumentPdf
                        size={20}
                        color='red'
                    />
                    <span >{element.name}</span>
                </div>
            )
        }
         
        else {
            return (
                    <div >
                        <div id={element.id}  className={style.folder} onContextMenu={
                            (e)=>{
                                setSelectedFolder(element.id)

                                folderClickHandler(e)
                                }
                        }
                        >
                        <FolderIcon
                                     onclick={(e)=>{
                                    e.currentTarget.parentElement.
                                    parentElement.
                                    querySelector("ul").classList.toggle("hide")
                                }}
                        />
                        <span >{element.name}</span>
                        </div>
                        <ul className={style.children}>
                            {
                                element.child.map((i,index)=>( 
                                    <li key={index}>
                                        {
                                            figureOutStructure(i)
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
            )
        }
    }
    
    useEffect(()=>{
        document.addEventListener("click",(e)=>{
            var menuContainer = document.querySelector('.'+style.menuContainer);
            // if (e.target !== menuContainer && !menuContainer?.contains?.(e.target)) {
            //     setMenuOptionActive(false)
            // }
        })
        return ()=>{
            document.removeEventListener("click",(e)=>{})
        }
    },[])


  return (
    <>
    <div className={style.sidebar}
        onContextMenu={(e)=>e.preventDefault()}
    >
        <ul>
            {
                figureOutStructure(folderStructure)
            }
        </ul>
        <div className={style.menuContainer}
        >
            {
                menuOptionActive &&
                <Menu createFolderHandler={createFolderHandler} importPdfFile={importPdfFile}/>
            }
        </div>
    </div>
   { modalOpen && <AddPDFPopups setModalOpen={setModalOpen}/>}
</>
  )


}
