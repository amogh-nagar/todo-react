import React, { useEffect } from "react";

const Test = () => {
  //This gets invoked everytime the function is called
  useEffect(() => {
    console.log("Hiii");
  });
  //This gets invoked at the time of first render onlyyyy
  useEffect(() => {
    console.log("Hiii");
  }, []);
  //First render + condition
//   useEffect(() => {
//     console.log("Hiii");
//   }, [testvar]); //>called at a time of first render and each time testvar will gets changed,means whenver testvar is updated useeffect will be called again
  
  return <div>Test</div>;
};

export default Test;
