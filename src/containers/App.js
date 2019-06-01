import React, {Component} from 'react';
import styleClasses from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component{

  state = {
    persons: [
      {id: "df423", name: "Yoosuf", age:23},
      {id:"dfdf55dds", name: "Izman", age:21},
      {id:"pldjj34", name: "Hamdhoon", age:26},
    ],
    showPersons: false
  }

  onNameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const newPersons = [...this.state.persons];

    newPersons[personIndex] = person;

    this.setState({persons: newPersons});
  }

  togglePersonsHandler = () =>
  {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
  
  deletePersonHandler = (index) =>
  {
      const persons = [...this.state.persons];
      persons.splice(index, 1);
      this.setState({persons:persons})
  }

  render = () => {
  
    const persons = this.state.showPersons ? 
    (
      <div>  
          <Persons persons={this.state.persons} deletePersonHandler={this.deletePersonHandler} onNameChangeHandler={this.onNameChangeHandler}/>
      </div>
    )
    : null;


    return (
      <div className={styleClasses.App}>
        <Cockpit showPersons={this.state.showPersons} togglePersonsHandler={this.togglePersonsHandler}/>
        {
          persons
        }
               
      </div>
    );
  }
}

export default App;
