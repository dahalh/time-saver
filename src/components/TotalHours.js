import React from "react";

export const TotalHours = ({ ttlGoodHours, total }) => {
  return (
    <div className="row mt-2m pb-5 fs-3 fw-bolder text-info">
      <div className="col text-center">
        Total time allocated this week ={" "}
        <span className="text-primary" id="Total"></span> {total} hrs
      </div>
    </div>
  );
};
