import React, { useContext } from "react";
import { BioData } from "./ComA";

const ComC = () => {
  const context = useContext(BioData);

  return (
    <div>
      <h1>Hell from components C {context}</h1>
    </div>
  );
};

export default ComC;
