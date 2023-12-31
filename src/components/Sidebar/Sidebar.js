import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux'
function Sidebar() {
  const {name} = useSelector(state=>state.counter)
  return (
      <div className='sidebar'>
          <ul>
              <li> <a href='#'>Home</a> </li>
              <li> <a href='#'>About</a> </li>
              <li> <a href='#'>Contact</a> </li>
              <li> <a href='#'>Blog</a> </li>
              <li> <a href='#'>Hello {name}</a> </li>
          </ul>
    </div>
  )
}

export default Sidebar