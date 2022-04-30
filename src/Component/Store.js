import React from "react";
import Storedata from "../Model/Shortstock";

const Store = () => {
    return (
        <div className="">
            <div class="newarrivalsec">
                <div class="row wavebg2">
                    <div class="col-12">
                        <h1 class="text-center">Short Stocked Medicines</h1>
                    </div>
                </div>
                <div class="container">
                    <div class="today-product mt-5 mb-5">
                        <div class="today-grid">{
                            Storedata.map((element) => {
                                return (
                                    <div class="card">
                                        <img src={element.image} alt="" height="180px" width="100%" />
                                        <h4>{element.title}</h4>
                                        <h4 class="text-green">
                                            <span>RS {element.price}</span>
                                        </h4>
                                    </div>
                                )
                            })
                        }</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Store;