"use client";

import "../styles/index.css";

export const Button = () => {
  return (
    <div>
      <button
        className="bg-red-800 p-8"
        onClick={() => {
          alert("You Clicked a Button");
        }}
      >
        Hello Admin
      </button>
      ;
    </div>
  );
};
