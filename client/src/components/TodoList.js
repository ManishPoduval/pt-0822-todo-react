import React from 'react'

function TodoList(props) {
  const {todos} = props
  if (!todos) {
    return <p>Loading Todos</p>
  }  
    
  return (
    <div>
        {
            todos.map((todo) => {
                return <p key={todo._id}>{todo.name}</p>
            })
        }
    </div>
  )
}

export default TodoList