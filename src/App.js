// import React, { Component }  from 'react';
import './App.css';

const Person = (props) => {  
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: Doe</h2>  
    <h2>Age: 30</h2>  
    </>
  );
}

const App = () => {

  const name = 'Clementine';
  const isNameShowing = true;

  return (
    <div className="App">
<h1>Hello {isNameShowing ? name: 'Someone'}!</h1>
{/* is there a name? is yes display 'test' if not 'there is no name' */}
{name ? (<>test</>): (<>there is no name</>)}
{/* call person component */}
<Person name={'Elliot'} />
{/* pass props with name='Jenny' */}
<Person name={'Jenny'} />
    </div>
  );
}
export default App;
