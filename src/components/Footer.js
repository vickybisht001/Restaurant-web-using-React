import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className='footer-box'>

          <div className='ft-box'>
            <h1>Feliciano</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

            <div className="media-section">
              <a href="https://x.com/Vicky30763091"><i class='bx bxl-twitter'></i></a>
              <a href="https://www.facebook.com/jitendra.singhbisht.946/about"><i class='bx bxl-facebook'></i></a>
              <a href="https://www.instagram.com/vicky_bisht0001/"><i class='bx bxl-instagram'></i></a>

            </div>

          </div>
          <div className='ft-box'>
            <h1>Open Hours</h1>
            <ul>
              <li className='d-flex'><span>Monday</span>
                <span className='ms-5'>9:00 - 24:00</span> </li>
              <li className='d-flex'>
                <span>Tuesday </span>
                <span className='ms-5'>9:00 - 24:00</span></li>
              <li className='d-flex'>
                <span>Wednesday </span>
                <span className='ms-4'>9:00 - 24:00</span> </li>

              <li className='d-flex'>
                <span>Thursday </span>
                <span className='ms-5'>9:00 - 24:00</span> </li>

              <li className='d-flex'>
                <span>Friday </span>
                <span className='ms-5'>9:00 - 24:00</span> </li>
              <li className='d-flex'>
                <span>Saturday </span>
                <span className='ms-5'>9:00 - 24:00</span> </li>
              <li className='d-flex'>
                <span>Sunday </span>
                <span className='ms-5'>9:00 - 24:00</span> </li>

            </ul>

          </div>

          <div className='ft-box'>
            <h1>Instagram</h1>
            <div className="ft-img">

              <img src="https://preview.colorlib.com/theme/feliciano/images/insta-1.jpg.webp" alt="" />
              <img src="https://preview.colorlib.com/theme/feliciano/images/insta-2.jpg.webp" alt="" />
              <img src="https://preview.colorlib.com/theme/feliciano/images/insta-3.jpg.webp" alt="" />
              <img src="https://preview.colorlib.com/theme/feliciano/images/insta-4.jpg.webp" alt="" />
              <img src="https://preview.colorlib.com/theme/feliciano/images/insta-5.jpg.webp" alt="" />
              <img src="https://preview.colorlib.com/theme/feliciano/images/insta-6.jpg.webp" alt="" />
            </div>
          </div>
          <div className="ft-box">
            <h1>Newsletter</h1>
            <p>Far far away, behind the word mountains, far from the countries.</p>
            <div className='ft-sub'>
              <input type="text" name="mail" placeholder='Enter email address' />
              <button>Subscribe</button>

            </div>
          </div>

        </div>


        <div className='copyright'>
          <span>Copyright ©2024 All rights reserved | This template is made with ❤️ by JB</span>
        </div>
      </div>


    </>
  )
}

export default Footer