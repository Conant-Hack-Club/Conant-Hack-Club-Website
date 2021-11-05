import React from 'react'
import '../static/css/aboutUs.css'
import "../static/css/background.css";

export default function AboutUsScreen() {

  function clickAshay(){
    window.open(
      'https://ashayp.com',
      '_blank'
    );
  }
  function clickLabdhi(){

  }
  function clickSohum(){

  }

  return (
    <div className="full__page">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="about__us" style = {{color: 'white'}}>Leaders</h1>
      <div className="leaders__page" >
        <div className="leaders__div" onClick={clickAshay}>
          <div className="bio__div">
            Ronit Anandani
            <p className = "bioText">Leader<hr></hr></p>
          </div>
          <br></br>
          <div>
            <img className="person__pic" src="/ronit.PNG" alt="RONIT" ></img>
          </div>
        </div>
        <div className="leaders__div" onClick={clickLabdhi}>
          <div className="pic__div" >
            <img className="person__pic" src="/khush.png" alt="KHUSH" ></img>
          </div>
          <div className="bio__div">
            Khush Makadia
            <p className = "bioText">Leader<hr></hr></p>
          </div>
        </div>
        <div className="leaders__div" onClick={clickSohum}>
          <div className="bio__div">
            Soham Gupta
            <p className = "bioText">Leader-In-Training</p>
          </div>
          <div className="pic__div">
            <img className="person__pic" src="soham.png" alt="SOHUM"></img>
          </div>
        </div>
        <div className="leaders__div" onClick={clickSohum}>
          <div className="pic__div">
            <img className="person__pic" src="abhay.png" alt="ABHAY"></img>
          </div>
          <div className="bio__div">
            Abhay Paidipalli
            <p className = "bioText">Leader-In-Training</p>
          </div>
        </div>
      </div>
      <h1 className="about__us" style = {{color: 'white'}}>Founders</h1>
      <div className="leaders__page" >
        <div className="leaders__div" onClick={clickAshay}>
          <div className="bio__div">
            Ashay Parikh
            <p className = "bioText">Conant Class of 2021<hr></hr>Now: University of Illinois at Urbana-Champaign</p>
            
          </div>
          <br></br>
          <div>
            <img className="person__pic" src="/ashay.jpg" alt="ASHAY" ></img>
          </div>
        </div>
        <div className="leaders__div" onClick={clickLabdhi}>
          <div className="pic__div" >
            <img className="person__pic" src="/labdhi.jpg" alt="LABDHI" ></img>
          </div>
          <div className="bio__div">
            Labdhi Jain
            <p className = "bioText">Conant Class of 2021<hr></hr>Now: University of Illinois at Urbana-Champaign</p>
          </div>
        </div>
        <div className="leaders__div" onClick={clickSohum}>
          <div className="bio__div">
            Sohum Bhole
            <p className = "bioText">Conant Class of 2021</p>
          </div>
          <div className="pic__div">
            <img className="person__pic" src="sohum.jpg" alt="SOHUM"></img>
          </div>
        </div>
      </div>
      <div className='light x1'></div>
      <div className='light x2'></div>
      <div className='light x3'></div>
      <div className='light x4'></div>
      <div className='light x5'></div>
      <div className='light x6'></div>
      <div className='light x7'></div>
      <div className='light x8'></div>
      <div className='light x9'></div>
    </div>
  );
}
