import React, { useState } from "react";

export const Show = ({ data }) => {
  return <span>data: {data}</span>;
};

const Component = () => {
  const [data, setData] = useState(null);
  return <div>
    <Show data={data} />
    <button onClick={() => setData(Math.random())}>click me</button>
  </div>;
};

export default Component;
