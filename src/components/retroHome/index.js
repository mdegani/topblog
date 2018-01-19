import React from "react";
import StripeBox from "./stripeBox";
import NameBrand from "./nameBrand";
import YuckWeb from "./yuckWeb";
import 'tachyons';

const RetroHome = () => (
  <div>
    <StripeBox />
    <NameBrand />
    <YuckWeb />
    <StripeBox />
  </div>
);

export default RetroHome;
