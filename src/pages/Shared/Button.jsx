import React from "react";

const Button = ({ children }) => {
  return (
    <button className="btn btn-sm text-secondary hover:bg-secondary hover:border-none hover:text-primary">
      {children}
    </button>
  );
};

export default Button;
