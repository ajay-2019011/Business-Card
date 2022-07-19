import React from "react"
import Profile from '../images/Profile.jpeg'
export default function Info() {
  return (
    <div className="info">
      <img id="profile" src={Profile} alt="Not Found" />
      <h1>Ajay Sheoran</h1>
      <h3>Front End Developer</h3>
      <h4>Portfolio</h4>
      <div className="btn">
        <a><button id="btn1"><ion-icon size="small" name="mail-outline"></ion-icon> Email</button></a>
        <a><button id="btn2"><ion-icon size="small" name="logo-linkedin"></ion-icon> LinkedIN</button></a>
      </div>
    </div>
  )
}