import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import Container from "./Container";

const RefundPolicy = () => {
  return (
    <div>
      <Meta title={"Refund Policy"}></Meta>
      <BreadCrum title="Refund Policy" />
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

export default RefundPolicy;
