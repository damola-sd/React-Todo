import React, {Component, useState} from 'react';
import initialList from './TodoList';


export class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
           todoList: initialList,
           todoItem: '',
        }
    }

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
              <h3>ToDo List</h3>
              {
                  this.state.todoList.map(item => (
                      <div key={item.id}>
                          {item.task}
                    </div>
                  ))
              }  

              <TodoForm
                TodoItem={this.state.todoItem}
                changeHandler={this.changeHandler}
                addItem={this.addItem}
                />
            </div>
        )
    }
}

