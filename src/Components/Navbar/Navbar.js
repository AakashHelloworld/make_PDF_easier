import React from 'react'
import './Navbar.css'
import { GrSplit } from "react-icons/gr";
import { splitTogger } from '../../Store/tabSlice';
import { useDispatch } from 'react-redux';

export const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className='navbar'>
      <GrSplit onClick={() => dispatch(splitTogger())} className='split' size={20} color='white' />
    </div>
  )
}
