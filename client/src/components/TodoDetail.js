import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

function TodoDetail(props) {

    const [todo, setTodo] = useState(null)
    const { id } = useParams()
    let navigate = useNavigate()

    async function getData() {

        let response = await axios.get(`http://localhost:5005/api/todos/${id}`)
        setTodo(response.data)
    }

    useEffect(() => {
        getData();
    }, [])

    if (!todo) {
        return <p>Fetching todo detail</p>
    }

    async function deleteTodo(e) {
        const {todos, onSetTodos} = props
        await axios.delete(`http://localhost:5005/api/todos/${id}`)
        let filteredTodos = todos.filter(t => t._id !== id)
        onSetTodos(filteredTodos)
        navigate(`/`)
    }

    return (
        <div>
            <h2>Name: {todo.name}</h2>
            <h2>Name: {todo.description}</h2>
            <Link to={`/todo/${todo._id}/edit`}>
                <button>Edit</button>
            </Link>
            <button onClick={deleteTodo }>Delete</button>
        </div>
    )
}

export default TodoDetail