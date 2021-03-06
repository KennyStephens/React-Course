import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component {
  state = {
    persons: [
      { id: 'asdf3', name: 'Max', age: 28},
      { id: 'gfd22', name: 'Manu', age: 29},
      { id: 'aSD1S', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked');
  //   // Don't do this:this.state.persons[0].name = 'Maximilian';
  //     this.setState({    
  //       persons: [
  //       {name: newName, age: 28},
  //       {name: 'Manu', age: 29},
  //       {name: 'Stephanie', age: 27}
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personsIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]/* Creates a new array so we don't mutate the original always make a copy of an array before mutating it*/
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render() {
    let persons = null;
   

    if ( this.state.showPersons ) {
      persons = 
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;  
    }

    return (
      <div className={classes.App}>
      <Cockpit 
      showPersons={this.state.showPersons} 
      persons={this.state.persons}
      clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
    
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;



/* Use bind() if you can instead of line 32 arrow function */