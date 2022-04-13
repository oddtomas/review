// import React, { Component, useState } from "react";
import "./App.css";
import { useState, useEffect } from "react";

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastname}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const name = "Clementine";
  const isNameShowing = true;

  // loads with the first render
  useEffect(() => {
    setCounter(100);
  }, []); // [] means that it will only run once

  useEffect(() => {
    alert("Counter changed to " + counter);
  }, [counter]); // [counter] means that it will only run if counter changes

  return (
    <div className="App">
      <h1>Hello {isNameShowing ? name : "Someone"}!</h1>
      {/* is there a name? is yes display 'test' if not 'there is no name' */}
      {name ? <>test</> : <>there is no name</>}
      {/* call person component */}
      <Person name={"Elliot"} lastname={"Nguyen"} age={1} />
      {/* pass props with name='Jenny' */}
      <Person name={"Clementine"} lastname={"Nguyen"} age={4} />

      {/* use state */}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};
export default App;
