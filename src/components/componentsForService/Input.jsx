import React, { forwardRef, useState } from "react";

const Input = ({data,handleChange}, ref) => {

  return <input type="text" value={data} onChange={(e)=>handleChange(e)}  ref={ref} />;
};

const forwardedRef=forwardRef(Input)

export default forwardedRef;
