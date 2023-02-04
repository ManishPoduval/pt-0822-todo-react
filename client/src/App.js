import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MyNav from "./components/MyNav";
import routes from "./config/routes";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [todos, setTodos] = useState(null)
  const navigate = useNavigate()

  const handleAdd = async (e) => {
    e.preventDefault()
    const {name, description} = e.target
    let todo = {
      name: name.value, 
      description: description.value, 
      completed: false,
    }

    let response = await axios.post('http://localhost:5005/api/create', todo)
    toast(`Todo  ${todo.name} Added successfully. Redirecting in 5 seconds`)
    setTodos([response.data, ...todos])
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }

  async function getData(){
      let response = await axios.get('http://localhost:5005/api/todos')
      setTodos(response.data)
  }

  useEffect(() => {
      getData();
  }, [])

  return (
    <div >
      <ToastContainer />
      <MyNav />
      <div  >
        <h1>Shopping List</h1>
      </div>
      <Routes>
        {routes({
          onHandleAdd: handleAdd,
          todos,
        }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
