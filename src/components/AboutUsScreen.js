import React from 'react'
import '../static/css/aboutUs.css'

export default function AboutUsScreen() {
    return (
      <div className="full__page">
        <h1 className="about__us">About The Leaders</h1>
        <div className="leaders__page">
          <div className="leaders__div">
            <div className="bio__div">
              Ashay Parikh
            </div>
            <div className="pic__div">
              <img className="person__pic" src="/ashay.jpeg" alt="ASHAY"></img>
            </div>
          </div>
          <div className="leaders__div">
            <div className="pic__div">
              <img className="person__pic" src="/labdhi.jpg" alt="LABDHI"></img>
            </div>
            <div className="bio__div">
              Labdhi Jain
            </div>
          </div>
          <div className="leaders__div">
            <div className="bio__div">
              Sohum Bhole
            </div>
            <div className="pic__div">
              <img className="person__pic" src="sohum.jpg" alt="SOHUM"></img>
            </div>
          </div>
        </div>
      </div>
    );
}
