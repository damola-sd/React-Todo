import React, {Component, useState} from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const initialList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);

    this.state = {
       todoList: initialList,
       todoItem: '',
    }
  }

  enterButton = (event) => {
    if(event.keyCode == 13) {
      addItem;
    }
  };

  addItem = () => {
    const newItem = {
        task: this.state.todoItem,
        id: Date.now,
        completed: false,
    };
    
      this.setState({
          todoList: this.state.todoList.concat(newItem),
          todoItem: '',
      });
    }
  
  
    changeHandler = (event) => {
      this.setState({
          todoList: event.target.value,
      });
    }
  
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList items={this.state.todoList} />
        <TodoForm 
          todoItem={this.state.todoItem}
          changeHandler={this.changeHandler}
          enterBtn={this.enterButton}
          addItem={this.addItem}
          />
      </div>
    );
  }
}


export default App;
