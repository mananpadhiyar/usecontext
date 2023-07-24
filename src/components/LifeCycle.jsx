import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  let [counter, setCounter] = useState(0);
  let [deleted, setDeleted] = useState(false);

  const increment = () => {
    setCounter((counter += 1));
  };

  const deleteAll = () => {
    setDeleted(true);
  };

  //   useEffect(() => {
  //     console.log("printing this message on mouting + onUpdate");

  //     return () => {
  //       console.log("onUnmount");
  //     };
  //   }, [counter]);

  useEffect(() => {
    console.log("running on mounting + onUpdate");

    return () => {
      console.log("deleted : unmounting");
      //   alert("removed something");
    };
  }, [counter]);

  // here cause we are doing count updating counter value when we clicked it getting deleted
  // adding new value that why it calling whatever we wrote inside return () => {}

  return deleted === true ? (
    " "
  ) : (
    <div className="allData" style={{ textAlign: "center" }}>
      <h1>Count : {counter} </h1>
      <button onClick={increment}>click</button>
      <button onClick={deleteAll}>delete</button>

      <div className="allData" style={{ textAlign: "center" }}>
        <button>
          Remove this btn from code to see unMounting : alert = deleted
        </button>
      </div>
    </div>
  );
};

export default LifeCycle;
