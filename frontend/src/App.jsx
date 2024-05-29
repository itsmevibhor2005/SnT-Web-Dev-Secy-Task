import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/footer'
import About from './components/about'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Todo from './components/Todo'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useDispatch } from "react-redux";
import { authActions } from "./store";
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const id = sessionStorage.getItem("id")
    if(id){

      dispatch(authActions.login())
    }

    
  }, [])
  
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/todo' element={<Todo/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/signin' element={<SignIn/>}/>
      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
