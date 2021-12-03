import React from "react";
import "./ca.css";
import {
  BsInstagram,
  BsLinkedin,
  BsList,
  BsFacebook,
  BsTwitter,
  BsShieldCheck,
  BsFillAwardFill,
} from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";
import Div100vh from "react-div-100vh";
import logo from "./logo.png";

const ca = () => {
  window.onscroll = function () {
    const navList = document.querySelector("#navList");
    if (window.innerWidth <= 992) {
      if (navList.style.height === "60vh") navList.style.height = "0vh";
    }
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      if (window.innerWidth <= 992) navList.classList.add("nav-highlight");
      document
        .querySelector("#cp-ambd #ca-navbar")
        .classList.add("nav-highlight");
      document
        .querySelector("#cp-ambd #social-links")
        .classList.add("link-highlight");
    } else {
      if (window.innerWidth <= 992) navList.classList.remove("nav-highlight");
      document
        .querySelector("#cp-ambd #ca-navbar")
        .classList.remove("nav-highlight");
      document
        .querySelector("#cp-ambd #social-links")
        .classList.remove("link-highlight");
    }
  };

  const expand = () => {
    const navList = document.querySelector("#navList");
    if (window.innerWidth <= 992) {
      if (navList.style.height !== "60vh") {
        navList.style.height = "60vh";
        document.querySelector("#cp-ambd #ca-navbar").style.padding = "20px 0px 0px 0px";
        document.querySelector("#cp-ambd #ca-navbar").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      } else{
        navList.style.height = "0vh";
        document.querySelector("#cp-ambd #ca-navbar").style.padding = "20px 5px";
        document.querySelector("#cp-ambd #ca-navbar").style.backgroundColor = "transparent";
      }
    }
  };
  return (
    <div id="cp-ambd">
      <nav id="ca-navbar">
        <a href="#home">
          <div id="logo">Tech Nexus</div>
        </a>
        <div id="navList" className="">
          <a href="#home">
            <div onClick={expand}>Home</div>
          </a>
          <a href="#about">
            <div onClick={expand}>About Us</div>
          </a>
          <a href="#benefits">
            <div onClick={expand}>Why CA?</div>
          </a>
          <a href="#responsibilities">
            <div onClick={expand}>Responsibilities</div>
          </a>
          <a href="#rewards">
            <div onClick={expand}>Rewards</div>
          </a>
          <a href="#registration">
            <div onClick={expand}>Registration</div>
          </a>
          <a href="/">
            <div onClick={expand}>Contact Us</div>
          </a>
        </div>
        <div id="collapseBtn" onClick={expand}>
          <BsList />
        </div>
      </nav>
      <Div100vh>
        <div id="home">
          <div id="home-mask">
            <img id="tnLogo" src={logo} alt="logo" />
            <p id="theme">Chance to be the face of a National Level Fest.</p>
            <button id="register-btn">Register</button>
          </div>
        </div>
      </Div100vh>
      <section id="about" className="dark">
        <div className="heading">
          <span>About Us</span>
        </div>
        <div className="content">
          Introducing the first edition of the national-level virtual technical
          carnival of our very own NIT Hamirpur - Tech-Nexus 2k21, Kainotomia:
          Meeting the Extraordinary. An occurrence that will provide an
          excellent opportunity with memorable experiences and encourage you to
          step forward and meet the extraordinary. From novices to mentors,
          gamers to programmers, influencers to traders, Tech-Nexus is the
          thread that binds them all together and bolts the exchange of
          information and experience.
        </div>
      </section>

      <section id="benefits">
        <div className="heading">
          <span>Why CA?</span>
        </div>
        <div className="content">
          <div id="benefits-list">
            <div className="benefit">
              <div className="benefit-icon">
                <BsShieldCheck />
              </div>
              <div className="benefit-content">
                <div className="benefit-head">Lorem ipsum dolor sit amet.</div>
                <div className="benefit-desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                  architecto quis iure provident odio quam.
                </div>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <BsShieldCheck />
              </div>
              <div className="benefit-content">
                <div className="benefit-head">Lorem ipsum dolor sit amet.</div>
                <div className="benefit-desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                  architecto quis iure provident odio quam.
                </div>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <BsShieldCheck />
              </div>
              <div className="benefit-content">
                <div className="benefit-head">Lorem ipsum dolor sit amet.</div>
                <div className="benefit-desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                  architecto quis iure provident odio quam.
                </div>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <BsShieldCheck />
              </div>
              <div className="benefit-content">
                <div className="benefit-head">Lorem ipsum dolor sit amet.</div>
                <div className="benefit-desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                  architecto quis iure provident odio quam.
                </div>
              </div>
            </div>
          </div>
          <div className="content-image"></div>
        </div>
      </section>

      <section id="responsibilities" className="dark">
        <div className="heading">
          <span>Responsibilities</span>
        </div>
        <div className="content">
          <div className="res-card">
            <div className="icon">
              <FcBusinessman />
            </div>
            <div className="head">Lorem</div>
            <div className="info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              quia at repellendus officiis expedita doloremque veritatis
              possimus itaque aperiam illum.
            </div>
          </div>
          <div className="res-card">
            <div className="icon">
              <FcBusinessman />
            </div>
            <div className="head">Lorem</div>
            <div className="info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              quia at repellendus officiis expedita doloremque veritatis
              possimus itaque aperiam illum.
            </div>
          </div>
          <div className="res-card">
            <div className="icon">
              <FcBusinessman />
            </div>
            <div className="head">Lorem</div>
            <div className="info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              quia at repellendus officiis expedita doloremque veritatis
              possimus itaque aperiam illum.
            </div>
          </div>
        </div>
      </section>

      <section id="rewards">
        <div className="heading">
          <span>Rewards</span>
        </div>
        <div className="content">
          <div className="reward-card">
            <div className="number">01</div>
            <div className="head">Lorem</div>
            <div className="icon">
              <BsFillAwardFill />
            </div>
            <div className="info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              saepe doloremque dignissimos molestias!
            </div>
          </div>
          <div className="reward-card">
            <div className="number">02</div>
            <div className="head">Lorem</div>
            <div className="icon">
              <BsFillAwardFill />
            </div>
            <div className="info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              saepe doloremque dignissimos molestias!
            </div>
          </div>
          <div className="reward-card">
            <div className="number">03</div>
            <div className="head">Lorem</div>
            <div className="icon">
              <BsFillAwardFill />
            </div>
            <div className="info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              saepe doloremque dignissimos molestias!
            </div>
          </div>
          <div className="reward-card">
            <div className="number">04</div>
            <div className="head">Lorem</div>
            <div className="icon">
              <BsFillAwardFill />
            </div>
            <div className="info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              saepe doloremque dignissimos molestias!
            </div>
          </div>
        </div>
      </section>

      <section id="registration" className="dark">
        <div className="heading">
          <span>Registration</span>
        </div>
        <div className="content">
          <div className="head">Process</div>
          <div className="info">
            The campus ambassador program has been posted on Internshala and can
            be applied on the given link. After applying from internshala, you
            will have a telephonic session which will inform you of your
            responsibilities to a greater depth.
          </div>
          <div className="head">Eligibility</div>
          <div className="info">
            The only eligibility criteria is that you should have a valid
            college ID card. There are no specific constraints on year in which
            you study, if you are a resourceful person it will surely add up
            your chances to be one of the top campus ambassadors.
          </div>
          <button id="register-btn">Register Here</button>
        </div>
      </section>

      <div id="social-links">
        <BsInstagram />
        <BsFacebook />
        <BsTwitter />
        <BsLinkedin />
      </div>
    </div>
  );
};

export default ca;
