import React from 'react'

addTask = taskName => {
    const newTask = {
        task: taskName,
        id: Date.now(),
        completed: false
    }
    list: [...this.state.list, newTask]
}