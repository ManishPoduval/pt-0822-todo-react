import React from 'react'
import {Link} from  'react-router-dom'

function TodoList(props) {
  const {todos} = props
  if (!todos) {
    return <p>Loading Todos</p>
  }  
    
  return (
    <div>
        {
            todos.map((todo) => {
                return (
                  <Link to={`/todo/${todo._id}`}>
                    <p key={todo._id}>{todo.name}</p>
                  </Link>
                )
            })
        }
    </div>
  )
}

export default TodoList