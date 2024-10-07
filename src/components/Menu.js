import React from 'react'

const Menu = () => {

  function showContent(buttonNumber) {
    // Hide all content divs
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
      content.style.display = 'none';
    });

    // Show the selected content
    const selectedContent = document.getElementById(`content-${buttonNumber}`);
    selectedContent.style.display = 'block';
  }


  return (
    <>
      <div className="menu-section">
        <div className="bg-img">
          <h1>Specialties</h1>
        </div>

        <div className='menu-btn'>
          <button onClick={() => showContent(1)}>Breakfast</button>
          <button onClick={() => showContent(2)}>Lunch</button>
          <button onClick={() => showContent(3)}>Dinner</button>
          <button onClick={() => showContent(4)}>Drinks</button>
          <button onClick={() => showContent(5)}>Dessert</button>
          <button onClick={() => showContent(6)}>Wine</button>
        </div>



        <div id="content-container">

          <div id='content-1' className='content'>
            <div className="menu-boxes">

              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/breakfast-1.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/breakfast-2.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/breakfast-3.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/breakfast-4.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/breakfast-5.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/breakfast-6.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
            </div>

          </div>
          <div id='content-2' className='content'>
            <div className="menu-boxes">

              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/lunch-1.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/lunch-2.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/lunch-3.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/lunch-4.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/lunch-5.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/lunch-6.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
            </div>

          </div>
          <div id='content-3' className='content'>
            <div className="menu-boxes">

              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/dinner-1.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/dinner-2.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/dinner-3.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/dinner-4.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/dinner-5.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/dinner-6.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
            </div>

          </div>
          <div id='content-4' className='content'>
            <div className="menu-boxes">

              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/drink-1.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/drink-2.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/drink-3.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/drink-4.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/drink-5.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/drink-6.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
            </div>

          </div>
          <div id='content-5' className='content'>
            <div className="menu-boxes">

              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/dessert-1.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/dessert-2.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/dessert-3.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/dessert-4.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/dessert-5.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/drink-6.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
            </div>

          </div>
          <div id='content-6' className='content'>
            <div className="menu-boxes">

              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/wine-1.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/wine-2.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/wine-3.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/wine-4.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/wine-5.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
              <div className='menu-box'>
                <div className='menu-img'>
                  <img src="https://preview.colorlib.com/theme/feliciano/images/wine-6.jpg.webp" alt="" />

                </div>
                <div className='menu-text'>
                  <div className='d-flex'>
                    <h2>Grilled Beef with potatoes</h2>
                    <span>$29</span>
                  </div>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                  <button className='order-btn'>Order now</button>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default Menu