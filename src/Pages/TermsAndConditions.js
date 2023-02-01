import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import Container from "./Container";

const TermsAndConditions = () => {
  return (
    <>
      <Meta title={"Terms and Condtions"}></Meta>
      <BreadCrum title="Terms and Condtions" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermsAndConditions;
