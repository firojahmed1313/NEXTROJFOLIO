import React from 'react'

const page = () => {
  return (
    <article class="contact " id="contact" data-page="contact">
          <div class="max-width">
            <header>
              <h2 class="h2 article-title">Contact me</h2>
            </header>
              <div class="contact-content">
                  <div class="column left">
                      <div class="text">Get in Touch</div>
                      <p>I am MD Firoj Ahmed, a passionate front-end developer with a strong foundation in CSE.I acquired a deep understanding of various programming languages, algorithms, data structures. Throughout my academic journey, I consistently demonstrated a strong commitment to learning and excelled in front-end development courses.</p>
                      <div class="qr">
                  <div class="icons ">
                    <div class="row">
                      <i class="fas fa-user"></i>
                      <div class="info">
                        <div class="head">Name</div>
                        <div class="sub-title">MD FIROJ AHMED</div>
                      </div>
                    </div>
                    <div class="row">
                      <i class="fas fa-map-marker-alt"></i>
                      <div class="info">
                        <div class="head">Address</div>
                        <div class="sub-title">Newtown,West Bengal,700157</div>
                      </div>
                    </div>
                    <div class="row">
                      <i class="fas fa-envelope"></i>
                      <div class="info">
                        <div class="head">Email</div>
                        <div class="sub-title"> <a href="mailto:firozahmed3052000@gmail.com" class="contact-link sub-title">firozahmed3052000@gmail.com</a></div>
                      </div>
                    </div>
                  </div>
                  <div class="qrcode">
                    <h2 class="blue">Or Scan QR Code</h2>
                    <img 
                    src="./image/qr-code-email.png"
                    alt="Email QR"
                    width="80%"
                    
                  />
                    
                    
                  </div>
                </div>
                  </div>
                  <div class="column right">
                      <div class="text">Message me</div>
                      <form action="#">
                          <div class="fields">
                              <div class="field name">
                                  <input type="text" placeholder="Name" required/>
                              </div>
                              <div class="field email">
                                  <input type="email" placeholder="Email" required/>
                              </div>
                          </div>
                          <div class="field">
                              <input type="text" placeholder="Subject" required/>
                          </div>
                          <div class="field textarea">
                              <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                          </div>
                          <div class="button-area">
                              <button type="submit">Send message</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
        </article>
  )
}

export default page