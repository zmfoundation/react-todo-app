import React from 'react';
import Task from './task';
import Addtask from './addtask';

class App extends React.Component {

  state = {
    tasks: [
      {
        name: 'WordPress Theme Fix', id: 1
      },
      {
        name: 'PHP Application', id: 2
      },
      {
        name: 'Web Application', id: 3
      }
    ]
  }

  addTask = (task) => {
    task.id = Math.random()*10; 
    let tasks = [...this.state.tasks, task];

    this.setState( {
      tasks: tasks
    } )
  }


  deleteTask = (id) => {
    let tasks = this.state.tasks.filter( task => {
      return task.id != id;
    });

    this.setState( {
      tasks: tasks
    } )
  }

  render() {

    return(
      <div>
        <h2 className="app-heading">To do React Application</h2>
          <Task tasksList = { this.state.tasks } deleteTask={ this.deleteTask } />
          <Addtask addTask = { this.addTask } />
      </div>
    )

  }

}

export default App; 