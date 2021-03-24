import React from "react";
import axios from "axios";
import Counter from "./components/Counter";
import Test from "./components/Test";
import Seconds from "./components/Seconds";
import Search from "./components/Search";

//Name of all componenets should start with capital letters
// const sayhello=()=>{
//   return <p>You clickd the button</p>
// }
// const Header = (props) => {
//   return <h1>{props.text}</h1>;
// };
// const Button = (props) => {
//   return <button onClick={sayhello}>{props.text}</button>;
// };
const App = () => {
  return (
    <div className="ui grid container center aligned">
      <div classname="column eight wide">
      <Search />
      </div>
      
    </div>
  );
};
//Component is a javascript function that return HTML or XML
//A component can only return one tag at a time

export default App;
