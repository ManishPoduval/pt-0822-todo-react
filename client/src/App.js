import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Form } from "react-router-dom";
import MyNav from "./components/MyNav";
import routes from "./config/routes";
import { ToastContainer, toast } from 'react-toastify';
import GoogleSignIn from './components/GoogleSignIn'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";
import "./App.css";
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

  const handleSuccess = (gObj) => {
      console.log('Success', gObj)
  }
  const handleFailure = (err) => {
    console.log('Failure',err)
  }

  const stripePromise = loadStripe("pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3");

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5005/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

   const onFormSubmit = async (e) => {
      e.preventDefault();
      let img = e.target.imageUrl.files[0]
      let form = new FormData()
      form.append('imageUrl', img)
      let response = await axios.post('http://localhost:5005/api/upload',form )

      console.log(response.data.url)
      // upload it to our DB
  }

  return (
  //   <div className="App">
  //   {clientSecret && (
  //     <Elements options={options} stripe={stripePromise}>
  //       <CheckoutForm />
  //     </Elements>
  //   )}
  // </div>
  
    <div >
      <form onSubmit={onFormSubmit} enctype="multipart/form-data">
        <input type="file" name="imageUrl" accept="image/png, image/jpg" />
        <button type="submit">Submit</button> 
    </form> 
      <ToastContainer />
      <GoogleSignIn onSuccess={handleSuccess} onFailure={handleFailure} />
      <MyNav />
      <div  >
        <h1>Shopping List</h1>
      </div>
      <Routes>
        {routes({
          onHandleAdd: handleAdd,
          todos,
          onSetTodos: setTodos,
        }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
