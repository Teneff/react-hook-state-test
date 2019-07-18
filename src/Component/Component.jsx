import React, { useState } from "react";

export const Show = ({ data }) => {
  return <span>data: {data}</span>;
};

export const Buttons = ({ cb }) => <>
  <button onClick={() => cb(0.7)}>0.7</button>
  <button onClick={() => cb(Math.random())}>random</button>
  <button onClick={() => cb(0.9)}>0.9</button>
</>;

const Component = () => {
  const [data, setData] = useState(null);
  return <div>
    <Show data={data} />
    <Buttons cb={setData} />
  </div>;
};

export default Component;
