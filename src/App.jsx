import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import './App.css'

const App = () => {

  const isathent = false
  const loading = false

  if(loading){
     return (<div>
              <p>Loading...</p>
            </div>);
  }

  return (
    <BrowserRouter>
      <Routes>

      </Routes>
    </BrowserRouter>
  )
}

export default App
