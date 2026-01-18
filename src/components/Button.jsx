import React from "react";

function Button({ text, action }) {
  return (
    <button
      onSubmit={action}
      className="bg-black text-white rounded-full pt-2 pb-2 pl-8 pr-8 w-full"
    >
      {text}
    </button>
  );
}

export default Button;
