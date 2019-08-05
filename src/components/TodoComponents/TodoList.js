// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'


const TodoList = props => {
    return (
        <div>
            {props.list.map(task => (
                <Todo key={task.id} task={task} toggleItem={props.toggleItem}/>
            ))}
        </div>
    )
}

export default TodoList


