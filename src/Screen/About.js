import React from "react";

const About = () => {
  return (
    <div classNameName="">
      <div className="aboutimg">
        <img
          src="../img/aboutus.png"
          alt=""
          srcset=""
          width="100%"
          height="250%"
        />
        <h1 className="abouttext">About Us</h1>
        <h4 className="abouttext-sub">
          We Provide the best healthcare products
        </h4>
      </div>

      <div className="aboutus">
        <div className="about">
          <div className="container">
            <h1 className="text-green heading">About Us</h1>
            <h4 className="text tex-height">
              We are one of the lading distributor of some major <br />
              Pharmaceutical/Healthcare <br />
              Companies Since 1999 with a Wide Distribution Network <br /> in
              Varanasi with the ability to handle bulk shipments <br /> within
              time constraint.
            </h4>
          </div>
        </div>

        <div className="whychoose">
          <div className="container">
            <div className="whychoose-head">
              <img src="../img/doctor.png" alt="" />

              <h1 className="text-green heading">Why Choose Us</h1>
            </div>

            <h4 className="text tex-height">
              We are the Distribution house of Pharmaceutical Companies and
              <br /> cater the needs of Wholesalers, Pharmacies , Hospitals and
              Doctors <br />
              by providing required deliveries of pharmaceutical products, as
              per <br /> their requirements. Our process involves br/idging the
              gap between pharmaceutical <br /> companies and end customers.
              <br />
              We thrive to reduce gap between demand and supply of medicines
            </h4>
          </div>
        </div>

        <div className="rewards">
          <div className="container">
            <div className="row">
              <h1 className="text-green heading">Our Rewards</h1>
              <div className="col-sm-6">
                <img
                  src="../img/certi_1.png"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="col-sm-6">
                <img
                  src="../img/certi2.png"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ourbg">
        <div className="ourmission">
          <div className="container">
            <h1 className="text-green heading">Our Mission</h1>
            <h4 className="text tex-height">
              <span className="com">''</span> To be socially responsible and
              responsive to serve the <br /> suffering humanity in the best
              possible way,
              <br /> everywhere…
            </h4>
          </div>
        </div>

        <div className="vision">
          <div className="container">
            <h1 className="text-green heading">Our Vision</h1>
            <p>
              
              <span className="arrow">>></span> To continue planning in advance
              to raise the level of our services in future
            </p>
            <p>
              <span className="arrow">>></span> To be innovation costantly
            </p>
            <p>
              <span className="arrow">>></span> To win the cofidence of our
              clients based on mutual trust and higher business ethics.
            </p>
            <p>
              <span className="arrow">>></span> To ensure complete customer
              satisfation by providing better facilities and Services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
