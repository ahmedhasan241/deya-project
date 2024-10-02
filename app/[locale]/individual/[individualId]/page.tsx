"use client";
import React from "react";
import IndividualForm from "./_comps/individualForm";
import { useGetSingleIndividual } from "../_api/queries";
import Loading from "../../_comps/ui/loading";

const Edit = ({ params }) => {
  return (
    <div className="px-20">
      <IndividualForm id={params.individualId} />
    </div>
  );
};

export default Edit;
