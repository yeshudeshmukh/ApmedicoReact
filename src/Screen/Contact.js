import React from "react";
const Contact = () => {
  return (
    <div className="">
      {/* getintouch  */}
      <div class="getintouch">
        <div class="container">
          <div class="get-text">
            <h1>Get in Touch</h1>
            <h5>We Provide the best healthcare products</h5>
          </div>
        </div>
      </div>
      {/* getintouch  */}
      {/* contact  */}
      <div class="contactbg">
        <div class="container">
          <div class="contact-grid">
            <div class="contact">
              <h1 class="headingcon">Contact Us</h1>
              <div class="contact-us">
                <div class="icon pb-3">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div class="icon-text">
                  <span>099191 66665</span>
                </div>
                <div class="icon pb-3">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div class="icon-text">
                  <span>Apmedico@gmail.com</span>
                </div>
                <div class="icon pb-3">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div class="icon-text">
                  <span>
                    {" "}
                    K61/157, Bulanala Maidagin Road, Near Sri Agrasain PG
                    College, Maidagin, Bulanala, Varanasi, Uttar Pradesh 221001
                  </span>
                </div>
              </div>
              <h1 class="headingcon ">Find Us</h1>
              <div class="map">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476486.57523020834!2d78.80539122426832!3d21.09057328273192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2z4KSo4KS-4KSX4KSq4KWC4KSwLCDgpK7gpLngpL7gpLDgpL7gpLfgpY3gpJ_gpY3gpLA!5e0!3m2!1smr!2sin!4v1639580272902!5m2!1smr!2sin"
                  width="100%"
                  height="150%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe> */}
              </div>
            </div>
            <div class="message">
              <h1 class="headingcon">Send Us A Message</h1>
              <div class="form-message">
                <form action="">
                  <label for="name">Name</label>
                  <br />
                  <input type="text" name="" id="" class="cos-input" />
                  <br />
                  <br />
                  <label for="mobile">Mobile Number</label>
                  <br />
                  <input type="text" name="" id="" class="cos-input" />
                  <br />
                  <br />
                  <label for="message">Message</label>
                  <br />
                  <br />
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="5"
                    class="cos-input"
                  ></textarea>
                  <br />
                  <br />
                  <input type="submit" value="Submit" class="sub-btn1" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <img
          src="../img/phone.png"
          alt=""
          srcset=""
          width="20%"
          height="15%"
          class="phone"
        />
      </div>
      {/* contact  */}
    </div>
  );
};
export default Contact;
