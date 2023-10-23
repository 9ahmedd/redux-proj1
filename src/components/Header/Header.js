import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux'
function Header(props) {
  const {name} = useSelector(state => state.counter)
  return (
      <div className='header'>
          <h1>Redux</h1>
          <p>Hello {name}</p>
    </div>
  )
}

export default Header