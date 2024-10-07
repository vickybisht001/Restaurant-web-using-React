import React from 'react'

const Blog = () => {
  return (
    <>
      <div className="blog-section">
        <div className="bg-img">
          <h1>Blog</h1>
        </div>

        <div className="main-bg-section">
          <div className='blog-boxes'>
            <div className="blog-box">
              <img src="https://preview.colorlib.com/theme/feliciano/images/image_1.jpg.webp" alt="" />
              <span>Sept. 14, 2024 Admin</span>
              <h2>Taste the delicious foods in Asia</h2>
              <div className='d-flex'>
                <a href="#">Read more</a>
                <a href="#"><i class='bx  bx-comment-detail'></i></a>
                <p>3</p>
              </div>
            </div>

            <div className="blog-box">
              <img src="https://preview.colorlib.com/theme/feliciano/images/image_2.jpg.webp" alt="" />
              <span>Sept. 14, 2024 Admin</span>
              <h2>Taste the delicious foods in Asia</h2>
              <div className='d-flex'>
                <a href="#">Read more</a>
                <a href="#"><i class='bx  bx-comment-detail'></i></a>
                <p>3</p>
              </div>
            </div>
            <div className="blog-box">
              <img src="https://preview.colorlib.com/theme/feliciano/images/image_3.jpg.webp" alt="" />
              <span>Sept. 14, 2024 Admin</span>
              <h2>Taste the delicious foods in Asia</h2>
              <div className='d-flex'>
                <a href="#">Read more</a>
                <a href="#"><i class='bx  bx-comment-detail'></i></a>
                <p>3</p>
              </div>
            </div>

          </div>
          <div className='blog-boxes'>
            <div className="blog-box">
              <img src="https://preview.colorlib.com/theme/feliciano/images/image_4.jpg.webp" alt="" />
              <span>Sept. 14, 2024 Admin</span>
              <h2>Taste the delicious foods in Asia</h2>
              <div className='d-flex'>
                <a href="#">Read more</a>
                <a href="#"><i class='bx  bx-comment-detail'></i></a>
                <p>3</p>
              </div>
            </div>

            <div className="blog-box">
              <img src="https://preview.colorlib.com/theme/feliciano/images/image_5.jpg.webp" alt="" />
              <span>Sept. 14, 2024 Admin</span>
              <h2>Taste the delicious foods in Asia</h2>
              <div className='d-flex'>
                <a href="#">Read more</a>
                <a href="#"><i class='bx  bx-comment-detail'></i></a>
                <p>3</p>
              </div>
            </div>
            <div className="blog-box">
              <img src="https://preview.colorlib.com/theme/feliciano/images/image_6.jpg.webp" alt="" />
              <span>Sept. 14, 2024 Admin</span>
              <h2>Taste the delicious foods in Asia</h2>
              <div className='d-flex'>
                <a href="#">Read more</a>
                <a href="#"><i class='bx  bx-comment-detail'></i></a>
                <p>3</p>
              </div>
            </div>

          </div>


          <nav aria-label="Page navigation example" className='page'>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item"><a class="page-link" href="#">1</a></li>
              <li className="page-item"><a class="page-link" href="#">2</a></li>
              <li className="page-item"><a class="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>


      </div>

    </>
  )
}

export default Blog