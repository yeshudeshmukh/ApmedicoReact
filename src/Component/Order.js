import React, { useState } from "react";

const Order = () => {
  const [model, setModel] = useState(false);

  const toggleModel = () => {
    setModel(!model);
  };
  const [model1, setModel1] = useState(false);

  const toggleModel1 = () => {
    setModel1(!model1);
  };
  return (
    <div className="">
      <div className="order">
        <div className="container">
          <div className="order-grid">
            <div className="bg1">
              <h3>Order Medicines</h3>
              <h6>
                Prescription Required <span className="text-warnig">*</span>
              </h6>
              <br />
              <button className="bg1-btn btnorder1" onClick={toggleModel}>
                Order Now
              </button>
            </div>
            <div className="bg2">
              <h3>Healthcare Products</h3>
              <h6 className="text-warrning">Prescription Not Required </h6>
              <br />
              <button
                href=""
                className="bg2-btn btncare"
                onClick={toggleModel1}
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="save">
        <div className="container">
          <div className="save-grid">
            <div className="">
              <h1 className="text-light">Apmedico</h1>
            </div>
            <div className="text-center">
              <span>
                Save 15 % extra on medicines & enjoy FREE <br /> DELIVERY with
                Plus membership
              </span>
            </div>
            <div className="">
              <img
                src="../img/deliveryman.png"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
      {/* popup model */}
      {model && (
        <div className="overlay">
          <div className="uploadform ">
            <button className="btnclose" onClick={toggleModel}>
              <i className="fa fa-window-close" aria-hidden="true"></i>
            </button>
            <h2>Upload your Prescription here</h2>
            <input
              type="file"
              accept="image/*"
              capture="camera"
              className="text-center"
            />
            <div className="remark-grid">
              <div className="">
                <label for="name">
                  Remark <span className="text-red">*</span>
                </label>
                <br />
              </div>
              <div className="">
                <textarea name="" id="" cols="33" rows="5"></textarea>
              </div>
            </div>
            <br />
            <br />
            <button className="bg2-btn nextbtn1">Next</button>
            {/* <a href="#" >
              Next
            </a> */}
          </div>
        </div>
      )}
      {/* info-popup */}
      {model1 && (
        <div className="overlay">
          <div class="info-form">
            <button className="btnclose" onClick={toggleModel1}>
              <i className="fa fa-window-close" aria-hidden="true"></i>
            </button>
            <div class="form-grid">
              <div class="">
                <label for="name">Full Name</label>
                <br />
              </div>
              <div class="">
                <input type="text" /> <br />
              </div>
            </div>
            <div className="form-grid">
              <div className="">
                <label for="name">Mobile Number</label>
                <br />
              </div>
              <div className="">
                <input type="text" /> <br />
              </div>
            </div>
            <div className="form-grid">
              <div className="">
                <label for="name">Medicine For Number of Day's</label>
                <br />
              </div>
              <div className="">
                <input type="number" name="" id="" /> <br />
              </div>
            </div>
            <br />
            <button className="bg2-btn mt-3 submitbtn1">Submit</button>
            {/* <a href="#" >
              Submit
            </a> */}
          </div>
        </div>
      )}
    </div>
  );
};
export default Order;
