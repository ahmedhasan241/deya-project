"use client";
import React from "react";
import IndividualForm from "./_comps/individualForm";

const Edit = ({ params }) => {
  return (
    <div className="px-20">
      <IndividualForm id={params.companyId} />
    </div>
  );
};

export default Edit;
