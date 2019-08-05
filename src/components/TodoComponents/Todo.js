import React from 'react'

const Task = props => {
    return (
        <div className="newtask">
            <h1>{props.task.name}</h1>
        </div>
    )
}

export default Task