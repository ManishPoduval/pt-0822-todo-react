import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
import {AppWrapper} from './context/app.context'
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import  'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

let root = createRoot( document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppWrapper>
      <App />
    </AppWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
