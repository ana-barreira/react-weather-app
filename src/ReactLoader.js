import React from "react";
import Loader from "react-loader-spinner";

export default function ReactLoader(){
return (
      <Loader
        type="Bars"
        color="black"
        height={50}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }

