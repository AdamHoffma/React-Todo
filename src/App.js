import React from 'react';
import ToDoForm from "./components/TodoComponents/TodoForm.js"

const todoData = [
  {
    task: "",
    id: 0,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super()
    this.state= {
      todo: todoData
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleItem= id => {
    console.log(id)
    this.setState ({
      todo: this.state.todo.map(chore => {
        if (chore.id === id) {
          return {
            ...chore,
            completed: !chore.purchased
          }
          
          }
          else {
            return chore
        }
      })
    })
  }

  addTask = choreName => {
    const newChore = {
      task: choreName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newChore]
    })
  }

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(chore => !chore.completed)
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
