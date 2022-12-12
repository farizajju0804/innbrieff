import React from 'react'
// import Nav from "./Components/Nav/Nav";
import Nav from '../Nav/Nav'
import './DoYouKnow.css'

function DoYouKnow() {
  return (
    
    <div className='DoYouKnow'>
        <div className='content' > 
          <div className="rectangle">
                    <h1>Do You Know?</h1>  
          </div>    
          <div className="body-text">
              <p>By 2030, Over 2 Billion <br/>Jobs Will Disappear. </p>
          </div>
          <div className="button">
              <button className='btn'>Read Now</button>
          </div>
        </div>
    </div>

  )
}

export default DoYouKnow