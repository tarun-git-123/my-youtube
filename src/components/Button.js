import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button
        type="button"
        className="px-4 py-1 m-2 bg-gray-200 hover:bg-gray-300 font-medium text-sm rounded-lg cursor-pointer"
      >
        {name}
      </button>
    </div>
  );
};

export { Button };
