import React from 'react'

const About = () => {
  return (
    <>
      <div className="about-section">

        <div className="bg-img">
          <h1>About</h1>

        </div>

        <div className="about">
          <div className='container mn-box'>

            <div className='ab-img'>
              <img src="https://preview.colorlib.com/theme/feliciano/images/about.jpg.webp" alt="" />
            </div>
            <div className='ab-text'>
              <h1>Feliciano Restaurant</h1>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <span>Mon - Fri 8 AM - 11 PM</span>
              <h3>+918287917781</h3>

            </div>
          </div>

        </div>

        <div className="service">
          <h1>Catering Services</h1>
          <div className='sv-boxes'>
            <div className='sv-box'>
              <i class='bx bxs-cake'></i>
              <h3>Birthday Party</h3>
              <p className='text-center'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>

            </div>
            <div className='sv-box'>
              <i class='bx bxs-business'></i>
              <h3>Business Meetings</h3>
              <p className='text-center'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
            <div className='sv-box'>
              <i class='bx bx-party'></i>
              <h3>Wedding Party</h3>
              <p className='text-center'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          </div>
        </div>

        <div className="chef-profiles-section">
          <h1>Our Master Chef</h1>
          <div className='chef-profiles'>
            <div className='profile-box'>
              <img src="https://preview.colorlib.com/theme/feliciano/images/chef-1.jpg.webp" alt="" />
              <h2>Luke Simon</h2>
              <p>Restaurant Owner</p>
              <div className='profile-media'>
                <i class='bx bxl-twitter'></i>
                <i class='bx bxl-facebook'></i>
                <i class='bx bxl-google-plus'></i>
                <i class='bx bxl-instagram'></i>

              </div>
            </div>

            <div className='profile-box'>
              <img src="https://preview.colorlib.com/theme/feliciano/images/chef-2.jpg.webp" alt="" />
              <h2>Rebeca Welson</h2>
              <p>Head Chef</p>
              <div className='profile-media'>
                <i class='bx bxl-twitter'></i>
                <i class='bx bxl-facebook'></i>
                <i class='bx bxl-google-plus'></i>
                <i class='bx bxl-instagram'></i>

              </div>
            </div>
            <div className='profile-box'>
              <img src="https://preview.colorlib.com/theme/feliciano/images/chef-3.jpg.webp" alt="" />
              <h2>Kharl Branyt</h2>
              <p>Chef</p>
              <div className='profile-media'>
                <i class='bx bxl-twitter'></i>
                <i class='bx bxl-facebook'></i>
                <i class='bx bxl-google-plus'></i>
                <i class='bx bxl-instagram'></i>

              </div>
            </div>
            <div className='profile-box'>
              <img src="https://preview.colorlib.com/theme/feliciano/images/chef-4.jpg.webp" alt="" />
              <h2>John Smooth</h2>
              <p>Chef</p>
              <div className='profile-media'>
                <i class='bx bxl-twitter'></i>
                <i class='bx bxl-facebook'></i>
                <i class='bx bxl-google-plus'></i>
                <i class='bx bxl-instagram'></i>

              </div>
            </div>
          </div>

        </div>
        <div className="bk-table">
          <div className="form-section">
            <h1>Make Reservation</h1>
            <form action="" method="get" className='form'>

              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder='Your name' />

              <label htmlFor="name">Email</label>
              <input type="text" name="mail" placeholder='Your mail' />

              <label htmlFor="name">Phone</label>
              <input type="text" name="phone" placeholder=' Phone' />

              <label htmlFor="name">Date</label>
              <input type="date" name="date" />

              <label htmlFor="name">Time</label>
              <input type="time" name="time" placeholder='Time' />

              <label htmlFor="name">Person</label>
              <select name="" id="">
                <option value="">Person</option>
                <option value="">One perosn</option>
                <option value="">Two perosn</option>
                <option value="">Three perosn</option>
                <option value="">Four perosn</option>
                <option value="">Five perosn</option>
              </select>

              <button className='bk-btn'>Make a Reservation</button>
            </form>


          </div>

        </div>
        <div className='ab-customer-section'>
          <h1>Happy Customer</h1>
          <div className='ct-boxes'>
            <div className='ct-box'>
              <img src="https://preview.colorlib.com/theme/feliciano/images/person_1.jpg.webp" alt="" />
              <p className='feedback'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <p className='name'>Art Leonard</p>
              <span>Customer</span>
            </div>
            <div className='ct-box'>
              <img src="https://preview.colorlib.com/theme/feliciano/images/person_2.jpg.webp" alt="" />
              <p className='feedback'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <p className='name'>Rose Henderson</p>
              <span>Customer</span>
            </div>
            <div className='ct-box'>
              <img src="https://preview.colorlib.com/theme/feliciano/images/person_3.jpg.webp" alt="" />
              <p className='feedback'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <p className='name'>Ian Boner</p>
              <span>Customer</span>
            </div>
          </div>

        </div>
      </div>



    </>
  )
}

export default About 