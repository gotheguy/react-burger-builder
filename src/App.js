import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Gonzalo', age: 29 },
      { name: 'German', age: 29 },
      { name: 'Nacho', age: 27 }
    ],
    otherState: 'some other value'
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);
  
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Gonzaleishon', age: 29 },
        { name: 'German', age: 29 },
        { name: 'Nacho', age: 27 }
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >
        My Hobbies: Programming
      </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;
