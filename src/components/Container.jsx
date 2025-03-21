import React from "react";

function Container({ children }) {
  return (
    <>
      <div className="border-2 md:px-5 px-2 py-2">{children} </div>
    </>
  );
}

export default Container;
