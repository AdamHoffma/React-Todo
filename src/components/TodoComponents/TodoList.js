// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Task from "./Todo.js"


const TodoList = props => {
    return (
        <div>
            {props.todo.map(task => (
                <Task key={task.id} task={task}/>
            ))}
        </div>
    )
}

export default TodoList


