import React, { useState } from "react";
import CountUp from 'react-countup';

const Client = () => {
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="" onMouseEnter={counter}>
        <div class="medico">
          <div class="container medicobg">
            <div class="medico-grid">
              <div class="3">
                <span class="count"><CountUp end={1000} duration={10}/></span>
                <span class="count-text">+</span>
                <br />
                <span>Apmedico Client</span>
              </div>
              <div class="">
                <span class="count"><CountUp end={1500} duration={20}/></span>
                <span class="count-text">+</span>
                <br />
                <span>Apmedico Orders</span>
              </div>
              <div class="">
                <span class="count">
                  <CountUp end={10000} duration={50}/>
                </span>
                <span class="count-text">+</span>
                <br />
                <span>Apmedico Sold Order </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Client;
