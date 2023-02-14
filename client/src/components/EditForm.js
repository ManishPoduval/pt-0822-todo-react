import React, { useState, useEffect, useContext } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import {Link} from  'react-router-dom'
import { TodoAppContent } from '../context/app.context'

function EditForm() {
    const [todo, setTodo] = useState(null)
    const [updating, setUpdating] = useState(false)
    const {user, setUser} = useContext(TodoAppContent)  
    const { id } = useParams()
    let navigate = useNavigate()
    console.log('USER IS', user)
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

    async function editTodo(e){
        e.preventDefault()
        setUpdating(true)
        let todoObj = {
            name: e.target.name.value,
            description: e.target.description.value
        }
        await axios.patch(`http://localhost:5005/api/todos/${id}`, todoObj)
        setUpdating(false)
        navigate(`/todo/${id}`)
    }
    

    return (
        <form onSubmit={editTodo}>
            {
                updating && (<p>Updating Info . . .</p>)
            }
            <input defaultValue={todo.name} name="name" type="text" placeholder="Enter name" />
            <input defaultValue={todo.description} name="description" type="text" placeholder="Enter desc" />
            <Button type="submit">Edit</Button>
        </form>
    )
}

export default EditForm