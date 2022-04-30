import React from "react";
import Newdata from "../Model/Newdata";
const Newarrival = () => {
    return (
        <div className="">
            <div class="newarrival">
                <div class="row wavebg">
                    <div class="col-12">
                        <h1 class="text-center">New Arrivals</h1>
                    </div>
                </div>
                <div class="container">
                    <div class="today-product mt-5 mb-5">
                        <div class="today-grid">{
                            Newdata.map((element) => {
                                return (
                                    <div class="card">
                                        <img src={element.image} alt="" height="180px" width="100%" />
                                        <h4>{element.title}</h4>
                                        <h4 class="text-green">
                                            form <span>RS {element.price}</span>
                                        </h4>
                                    </div>)
                            })
                        }</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Newarrival;
