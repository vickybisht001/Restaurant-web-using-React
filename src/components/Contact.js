import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contact-section">
                <div className="bg-img">
                    <h1>Contact</h1>

                </div>
                <div className='contact-page'>
                    <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d98973.47697644099!2d77.34771432577823!3d28.693376751983646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726464407037!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                    <div className='contact'>
                        <h1>Contact us</h1>
                        <form action="" method="get" className='ct-form'>
                            <input type="text" placeholder='Your Name' />
                            <input type="email" placeholder='Your Email' />
                            <input type="text" placeholder='Subject' />
                            <textarea name="message" id="" cols="40" rows={6} placeholder='Message'></textarea>
                            <button className='bk-btn'>Send Message</button>

                        </form>

                    </div>
                </div>
                <div className="info-section container">
                    <h2>Contact Information</h2>
                    <div className='info'>

                        <div className='address'>
                            <p>
                                Address:
                                198 West 21th Street, Suite 721 New York NY 10016
                            </p>
                        </div>
                        <div className='phone'>
                            <p>Phone:
                                <span>+918287917781</span>
                            </p>
                        </div>
                        <div className='mail'>
                            <p>Email:
                                <span>vickybisht123@gmail.com</span>
                            </p>
                        </div>
                        <div className='web'>
                            <p>Website:
                                <span>https://mysite.com</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Contact