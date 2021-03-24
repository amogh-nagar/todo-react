import React, { useState, useEffect } from "react";

const Seconds = () => {
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    // const timer = setInterval(() => {
    //     setcounter(
    //        counter + 1
    //     );//it will not use the updated  value of counter so for that the counter will always be 0
    //   }, 1000);
    const timer = setInterval(() => {
      setcounter(
        (counter) =>
          //this function recieves updated version of counter state variable
          counter + 1
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
    //What happen if we refresh the page and component unmount and after mounting there will be two timers, to remove this, we will remove all rest timers
  }, []);

  useEffect(()=>{
      console.log("Everytime");
    return ()=>{
        console.log("Called before");
    }
    })
  return <span>You spend {counter} seconds</span>;
};

export default Seconds;
