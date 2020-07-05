import React from "react";

function Alert(props) {
  return (
    <div
      role="alert"
      className="w-full flex flex-col justify-center items-center mt-5 rounded transition duration-700 ease-out" style={{...props.style}}>
        <p className="bg-red-600 w-3/4 h-full flex flex-col justify-center items-center text-center text-white font-mono rounded-lg">
      {props.children}
      </p>
    </div>
  );
}

export default Alert;