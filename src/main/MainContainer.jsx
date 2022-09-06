import { faBowlFood, faCocktail, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function MainContainer() {
  const element = <FontAwesomeIcon icon={faCoffee} />
  const element2 = <FontAwesomeIcon icon={faBowlFood} />
  const element3 = <FontAwesomeIcon icon={faCocktail} />

  return (
    <>
      <div>
        <section class="showcase-area" id="showcase">
          <div class="showcase-container">
            <h1 class="main-title" id="home">OnCall Staffing Solutions</h1>
            <p>Reimagining staffing solutions for the service industry.</p>
            <a href="/register" class="btn btn-primary">Join Our Community</a>
          </div>
        </section>
        <section id="about">
          <div class="about-wrapper container">
            <div class="about-text">
              <p class="small">About Us</p>
              <h2>Helping restaurants across the world staff</h2>
              <p>
                At OnCall, we help small business owners fill positions fast.
                Post your job opening and we'll fill it, tempory or permanent employment.
              </p>
            </div>
            <div class="about-img">
              <img src="../css/images/cala-DQWrXgH-tuw-unsplash.jpg" alt="" />
            </div>
          </div>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <div class="services-container container">
            <div class="services-type server">
              <div class="img-container">
                <img src='https://picsum.photos/300/300?random=3' alt="error" />
                <div class="img-content">
                  <h3>Server</h3>
                  <a
                    href="https://en.wikipedia.org/wiki/Waiting_staff"
                    class="btn btn-primary"
                    target="blank"
                  >learn more</a
                  >
                </div>
              </div>
            </div>
            <div class="services-type bartender">
              <div class="img-container">
                <img src="https://picsum.photos/300/300?random=1" alt="error" />
                <div class="img-content">
                  <h3>Bartenders</h3>
                  <a
                    href="https://en.wikipedia.org/wiki/Bartender"
                    class="btn btn-primary"
                    target="blank"
                  >learn more</a
                  >
                </div>
              </div>
            </div>
            <div class="services-type hostess">
              <div class="img-container">
                <img src="https://picsum.photos/300/300?random=2" alt="error" />
                <div class="img-content">
                  <h3>Hostess</h3>
                  <a
                    href="https://en.wikipedia.org/wiki/Hostess"
                    class="btn btn-primary"
                    target="blank"
                  >learn more</a
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials">
          <h2 class="testimonial-title">What Our Customers Say</h2>
          <div class="testimonial-container container">
            <div class="testimonial-box">
              <div class="customer-detail">
                <div class="customer-photo">
                  <img src="" alt="" />
                  <p class="customer-name">Faisa Jama</p>
                </div>
              </div>
              {element3}
              <p class="testimonial-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
                voluptas cupiditate aspernatur odit doloribus non.
              </p>

            </div>
            <div class="testimonial-box">
              <div class="customer-detail">
                <div class="customer-photo">
                  <img
                    src=""
                    alt=""
                  />
                  <p class="customer-name">Anthony Ibrahim</p>
                </div>
              </div>
              {element2}
              <p class="testimonial-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
                voluptas cupiditate aspernatur odit doloribus non.
              </p>

            </div>
            <div class="testimonial-box">
              <div class="customer-detail">
                <div class="customer-photo">
                  <img src="" alt="" />
                  <p class="customer-name">Hemanta Thapa</p>
                </div>
              </div>
              {element}
              <p class="testimonial-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
                voluptas cupiditate aspernatur odit doloribus non.
              </p>
            </div>
          </div>
        </section>
        <section id="contact">
          <div class="contact-container container">
            <div class="contact-img">
              <img src="https://picsum.photos/300/300?random=12" alt="" />
            </div>
            <div class="form-container">
              <h2>Contact Us</h2>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="E-Mail" />
              <textarea
                cols="30"
                rows="6"
                placeholder="Type Your Message"
              ></textarea>
              <a href="/" class="btn btn-primary">Submit</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MainContainer
