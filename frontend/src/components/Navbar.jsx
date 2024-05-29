import React from 'react';
import "../index.css"
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import { authActions } from "../store";
const Navbar = () => {
  const isLoggedIn = useSelector((state)=> state.isLoggedIn)
  const dispatch = useDispatch()
  const handleLogout = () => {
    sessionStorage.clear("id")
    dispatch(authActions.logout())
  }
  
  return (
    <nav className="bg-purple-800 px-4 flex justify-center w-[100vw] h-[65px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
         &lt;<span className='text-orange-500 text-2xl'>i </span><span className='text-green-600 text-2xl'>Todo</span>/&gt;
        </div>

        <div className="space-x-4 flex justify-center items-center">

          
            <Link to="/" className="text-white text-lg hover:text-gray-200 hover:bg-purple-900 w-[8vw] h-[65px] flex justify-center items-center transition-all">Home</Link>
        
          <Link to="/about" className="text-white text-lg hover:text-gray-200 hover:bg-purple-900 w-[8vw] h-[65px] flex justify-center items-center transition-all">About</Link>
          <Link to="/todo" className="text-white text-lg hover:text-gray-200 hover:bg-purple-900 w-[8vw] h-[65px] flex justify-center items-center transition-all">Todos</Link>
          {!isLoggedIn && <><Link 
            to="/signup" 
            className="bg-green-300 text-green-800 hover:bg-green-400 hover:text-green-900 px-4 rounded h-[30px] transition-all"
          >
            SignUp
          </Link>
          <Link 
            to="/signin" 
            className="bg-green-300 text-green-800 hover:bg-green-400 h-[30px] hover:text-green-900 px-4 rounded transition-all"
          >
            SignIn
          </Link></>}
          {isLoggedIn && <><Link 
            to="#" 
            className="bg-green-300 text-green-800 hover:bg-green-400 h-[30px] hover:text-green-900 px-4 rounded transition-all" onClick={handleLogout}
          >
           LogOut
          </Link></>}
          
          <FaRegUserCircle className='w-[25px] h-[35px]' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
