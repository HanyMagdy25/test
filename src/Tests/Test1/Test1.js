import React, { useState } from "react";

const Test1 = (props) => {
  // Write your code here
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      {clicked ? (
        <p>thank</p>
      ) : (
        <button onClick={() => setClicked(true)}>Click To subscribe</button>
      )}
    </div>
  );
};

export default Test1;
