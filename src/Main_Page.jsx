import React from 'react'

import { Link, NavLink } from 'react-router-dom'


export default function Main_Page() {
  return (
    <div className='container'>
      <div className='my-3'>
      <Link to="/counter"><button className="btn btn-dark me-3">Counter</button></Link>
      <Link to="/list"><button className="btn btn-dark me-3">List </button></Link>
      <Link to="/template"><button className="btn btn-dark me-3">template </button></Link>
      </div>
      
    </div>
  ) 
}
