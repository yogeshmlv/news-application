import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../images/tech-logo-footer.png' alt='' />
            <p>HD News is an Indian English-language free-to-air television news channel owned by  Aidigitek Pvt.Limited. The news channel was launched in 2023</p>
            <i className='fa fa-envelope'></i>
            <span> news@aidigitek.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +91 9990033551 </span>
          </div>
          <div className='box'>
            <h3>SCIENCE</h3>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>NASA telescope captures hidden light shows on the Sun</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero2.jpg' alt='' />
              <p>Astronomers find out why black holes twinkle</p>
            </div>
          </div>
          <div className='box'>
            <h3>GENERAL</h3>
            <div className='item'>
              <img src='../images/hero/hero3.jpg' alt='' />
              <p>LIVE: PM Modi inaugurates UP Global Investors Summit 2023 in Lucknow</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Adani to rock Parliament again: Oppn seeks discussion over LIC and SBI </p>
            </div>
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
        <a href="https://www.youtube.com/" target="_blank"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
       <a href="https://www.twitter.com/" target="_blank"> <i class="fa-brands fa-twitter"></i></a>
       <a href="https://www.linkedin.com/" target="_blank"> <i class="fa-brands fa-linkedin"></i></a>
          <p>
            <p>© Copyright 2023 AiDigitek All Rights Reserved</p>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer