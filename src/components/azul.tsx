import React, { FC } from "react";

const Azul: FC <{ text: string}> = ({text}) => {
  return (
    <div
      style={{
        backgroundColor: "blue",
      }}
    >
      <h1>{text}</h1>
    </div>
  );
};

export default Azul;
