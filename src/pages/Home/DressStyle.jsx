import React from 'react'
import "./Home.css"

function DressStyle() {
  return (
    <div className='dress'>
        <div className="dress-section">
            <h1>BROWSE BY DRESS STYLE</h1>
            <div className="casualformal">
                <div className="casual">
                    <img src="/src/assets/casual.png" alt="Casual" />
                    
                </div>
                <div className="formal">
                    <img src="/src/assets/formal.png" alt="Formal" />
                    
                </div>

            </div>
            <div className="partygym">
                <div className="party">
                    <img src="/src/assets/party.png" alt="Party" />
                   
                </div>
                <div className="gym">
                    <img src="/src/assets/gym.png" alt="GYm" />
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default DressStyle
