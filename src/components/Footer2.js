import React from 'react'
import { Link } from 'react-router-dom'
import gmail from '../assets/gmail.png'
import copy from '../assets/copyright.png'
import git from '../assets/github.png'

const Footer2 = () => {
  return (
    <>
    <header className="bg-gray-800 text-white p-4">
        <div style={{paddingLeft:1330,fontSize:25}}> 
            Lets Connect 
        </div>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Chandan</h1>
          <div className='contact'>
        <a href="mailto:chandansurendar3@gmail.com" className="btn btn-primary" target="blank"><img src={gmail} alt='gmail' /></a>
        <a href="https://www.linkedin.com/in/chandan-g-s-ba2087220" className="btn btn-primary"><img src="linkedin.png" alt='linkedin' /></a>
        <a href="https://github.com/chandansurendar3" className="btn btn-primary"><img src={git} alt='github' /></a>

      </div>
      </div>
      <div style={{textAlign: 'center'}}>
  <span>
    Copyright <img src={copy} style={{width:20, display: 'inline'}} alt='copy'/> 2024 Chandan Portfolio. All rights reserved.
  </span>
</div>

    </header>
    </>
  )
}

export default Footer2