import React from "react";
import RECIEPEITEM from "./RECIEPEITEM";

const RECIEPE = (props) => {
  const { reciepe } = props;
  return (
    <div class="row">
      {reciepe.map((res) => (
        <RECIEPEITEM res={res}></RECIEPEITEM>
      ))}
    </div>
  );
};

export default RECIEPE;
