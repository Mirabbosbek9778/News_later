import React from "react";
import { Wrapper } from "./style";

const Smalltext = (props) => {
  return (
    <div>
      <Wrapper>{props?.title}</Wrapper>
    </div>
  );
};

export default Smalltext;
