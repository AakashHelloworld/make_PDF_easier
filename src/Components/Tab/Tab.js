import React from 'react'
import './Tab.css'
export const Tab = ({tabs,selectTab}) => {
  return (
    <div className='tab'>
    {
      tabs?.map((tab)=>{
        return (
          <button onClick={()=>selectTab(tab.name)} value={tab.name} key={tab.name} className='tabButton' >
            {tab.name}
          </button>
        )
      })
    }
      
    </div>
  )
}
