import React from "react";

function Heading({ text }) {
  return (
    <div className="p-10">
      <p className="text-4xl font-bold text-center">{text}</p>
    </div>
  );
}

export default Heading;
