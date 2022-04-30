import React from "react";

const Footer = () => {
  return (
    <div className>
      <div className="footer">
        <div className="footer-grid">
          <div className="footer-heading">
            <div className="leoshine">
              <span className="brand-text">Apmedico</span>
              <p className="footer-para">
                Scelerisque sit et bibendum molestie duis in velit dis. Ac
                viverra nunc nulla sed dui. Et faucibus lobortis ultrices
                fermentum luctus feugiat semper.{" "}
              </p>
            </div>
          </div>
          <div className="footer-about">
            <ul>
              <li>About Us</li>
              <li>Shop</li>
              <li>Term</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-contact">
            <span>Contact Us</span>
            <div className="contact-felx">
              <div className="icon">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div className="">
                <span>apmedico@gmail.com</span>
              </div>
            </div>
            <div className="contact-felx">
              <div className="icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="">
                <span>9876543210</span>
              </div>
            </div>
            <div className="contact-felx">
              <div className="icon">
                <i className="fa fa-map-marker-alt" aria-hidden="true"></i>
              </div>
              <div className="">
                <span>2118 Thornridge cir.syracuse, connecticut 35624</span>
              </div>
            </div>
          </div>
          <div className="singup">
            <span> Sing up for Update</span>
            <input type="text" name="" id="" placeholder="Email" />
            <br />
            <input type="submit" value="Submit" className="btn btn-dark" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
