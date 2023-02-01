import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import Container from "./Container";

const PrivacyPolicy = () => {
  return (
    <div>
      <Meta title={"Privacy Policy"}></Meta>
      <BreadCrum title="Privacy Policy" />
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

export default PrivacyPolicy;
