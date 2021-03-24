import React, { useState } from "react";

const Counter = () => {
  const [clicks, setclicks] = useState(0); //Initialsised clicks variable with 0
  const handlebuttonclick = () => {
    setclicks(clicks + 1);
  };

  //   componentDidMount() {
  //     this.timer = setInterval(() => {
  //       this.setState({ counter: this.state.counter_ + 1 });
  //     }, 1000);
  //   }
  //   componentWillUnmount() {
  //     clearInterval(this.timer);
  //   }
  //   render() {
  //     return <div>{this.state.counter}</div>;
  //   }

  return (
    <div>
      <span>You clicked {clicks} clicks</span>
      <br />
      <button onClick={handlebuttonclick}>Click me</button>
    </div>
  );
};

export default Counter;
