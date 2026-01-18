import React, { use, useState } from 'react'
import {useTodo} from '../contexts/TodoContext';

const TodoItem = ({todo}) => {
    const [isTodoEditable, setisTodoEditable] = useState(false)
    const [todoMsg, settodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTod, toggleComplete}=useTodo()


    const editTodo=()=>{
        updateTodo(todo.id, {...todo, todo:todoMsg})
        setisTodoEditable(false)
    }

    const toggleCompleted=()=>{
        toggleComplete(todo.id)
    }
  return (
    <div>
      
    </div>
  )
}

export default TodoItem
