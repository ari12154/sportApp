import React from 'react'
import barca from "./barca icon.jpg"
import rial from "./rial madrid icon.png"
import "./homepage.css";

export default function MainGame() {
  return (
    <div className="container-fluid">
      <div className="container">
          <div className='image_icon'>
        <img  src={barca} alt="" width="45px" />
        <img src={rial} alt=""width="45px" />
        </div>
        <div className='btn_bet'>
        <button>1</button>
        <button>x</button>
        <button>2</button>
        </div>
      </div>
    </div>
  )
}
