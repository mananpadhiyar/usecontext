import React, { useEffect, useState } from "react";

const Unmouting = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  // for dynamic update
  const actualWidth = () => {
    setWidthCount(window.screen.width);
  };

  useEffect(() => {
    // console.log("add event");
    window.addEventListener("resize", actualWidth);
    // work on OnMouting + on all update

    return () => {
      // console.log("remove event");
      window.removeEventListener("resize", actualWidth);
    };
  });
  return (
    <div>
      <p>The actual size of window is</p>
      <h1>{widthCount}</h1>
    </div>
  );
};

// NOTE : why to use Unmouting over here ?
// => whenver we resize over value its storing somewhere
// => TO SEE => GO => INSPECT => IN BOTTOM SIDE => OPTION LIKE => STYLE , COMPUTED
// => GO => RESIZE => EVENT LISTNER => YOU will see there so many window called storing there
// its storing memory there , so server may be crashed for that reason
// to avoid that problem we need to delete the data we can to this by unMouting (remove data)
// i want here whenver i resize that size it must we automically get deleted for that
// i will create one cleanUp Function

// return () => {

// }

// whatever we are writting inside of it it will gonna remove it

// after using this now you will notice there only once resize is there (done!)

export default Unmouting;
