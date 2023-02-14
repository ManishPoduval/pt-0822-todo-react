import React, { createContext, useState } from 'react'

let TodoAppContent = createContext()

function AppWrapper(props) {

  const [user, setUser] = useState(null)
  const [todos, setTodos] = useState(null)

  const values = {
      user, setUser,
      todos, setTodos,
    }

  return (
    <TodoAppContent.Provider value={values}>
        {props.children}
    </TodoAppContent.Provider>
  )
}

export {AppWrapper, TodoAppContent}