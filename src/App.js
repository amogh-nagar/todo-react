import React from "react";

//Name of all componenets should start with capital letters
const sayhello=()=>{
  return <p>You clickd the button</p>
}
const Header = () => {
  return <h1>Click the button</h1>;
};
const Button = () => {
  return <button onClick={sayhello}>Click me!</button>;
};
const App = () => {
  return (
    <div>
      <Header/>
      <Button />
    </div>
  );
};
//Component is a javascript function that return HTML or XML
//A component can only return one tag at a time

export default App;
