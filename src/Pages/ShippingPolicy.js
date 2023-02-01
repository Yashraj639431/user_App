import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import Container from "./Container";

const ShippingPolicy = () => {
  return (
    <div>
      <Meta title={"Shipping Policy"}></Meta>
      <BreadCrum title="Shipping Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShippingPolicy;
