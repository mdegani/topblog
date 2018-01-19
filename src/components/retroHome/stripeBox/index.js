import React from "react";
import "tachyons";
import Stripe from "./stripe";

const StripeBox = () => (
  <div className="w-100 flex justify-center">
    <div className="pa0 flex justify-evenly w5 h5">
      {Array.from(Array(7).keys()).map((n, idx) => <Stripe key={idx} />)}
    </div>
  </div>
);

export default StripeBox;
