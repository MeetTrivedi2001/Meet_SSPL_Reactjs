import React, { Component } from 'react';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem('tasks')) || [],
      inputValue: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  addTask = () => {
    const { tasks, inputValue } = this.state;
    if (inputValue.trim() !== '') {
      const newTasks = [...tasks, inputValue];
      this.setState({ tasks: newTasks, inputValue: '' });
    }
  }

  deleteTask = (index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    this.setState({ tasks: newTasks });
  }

  render() {
    const { tasks, inputValue } = this.state;

    return (
      <div>
        <input type="text"value={inputValue}onChange={this.handleInputChange}/>  
        <button onClick={this.addTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;