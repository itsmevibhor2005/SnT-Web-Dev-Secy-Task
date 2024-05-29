import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import axios from "axios";
import Edit from "./Edit";
const Todo = () => {
  let id = sessionStorage.getItem("id")
  const [todo, settodo] = useState({ title: "", desc: "" });
  const [todos, settodos] = useState([]);

  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    settodo({ ...todo, [name]: value });
  };
  const handleAdd = async() => {
    if(todo.todo ==="" && todo.desc === ""){
      toast.error("Please write a Todo!")
    }
    else{
      if(id){
        await axios.post("http://localhost:3000/api/v2/addTask", {title: todo.title, desc: todo.desc, id:id}).then((res)=>{
          console.log(res)

        })
        
      
      // settodos([...todos, todo]);
      settodo({ title: "", desc: "" });
      toast.success("Your Todo is Added");
      
      }
      else{
        
      
      
      settodo({ title: "", desc: "" });
      toast.success("Your Todo is Added");
      toast.error("Please Sign Up to save your Todos !!")
      }
      
    }
  };
  
  const handleCheck = async(e) => {
    toast.success("Yay!!, you have completed a task!")
    let id_ = e.target.name
    // console.log(id)
    await axios.delete(`http://localhost:3000/api/v2/delete/${id_}`,{ data: {id:id}}).then((res)=>{
        toast.success("Your Todo is deleted")
    })
  };

  const handleDelete = async(e) => {
    let id_ = e.target.name
    // console.log(id_)
    await axios.delete(`http://localhost:3000/api/v2/delete/${id_}`,{ data: {id:id}}).then((res)=>{
        toast.success("Your Todo is deleted")
    })
    // todos.splice(id, "1")
    // settodos([...todos])
    
  };
  // console.log(todos)
  const handleEdit = (e) => {
    let edit = document.getElementById("edit")
    edit.style.display = "flex"
  };
  useEffect(() => {
    const fetch = async()=>{
      await axios.get(`http://localhost:3000/api/v2/getTodo/${id}`).then((res)=>{
        console.log(res.data)
      })
    }
    fetch()
  }, [handleAdd])
  return (
    <>
      <ToastContainer/>
      <div className=" min-h-[calc(100vh-130px)] bg-gradient-to-b from-purple-200 to-gray-200 mx-auto flex flex-col">
        <div className="addTodo mx-auto py-3 flex flex-col gap-3 my-3 items-center">
          <input
            type="text"
            placeholder="Todo"
            name="title"
            value={todo.title}
            onChange={handleChange}
            className="w-[750px] rounded-md p-2 border-green-500 border border-r-2"
          />
          <textarea
            name="desc"
            value={todo.desc}
            id="desc"
            placeholder="Description"
            className="w-[750px] rounded-md p-2 border-orange-500 border border-r-2"
            onChange={handleChange}
          />
          <button
            className="border bg-violet-800 hover:bg-violet-900 text-white w-20 transition-all rounded-md py-1 "
            onClick={handleAdd}
          >
            Add
          </button>
        </div>

        <h1 className="font-bold text-xl mx-10 text-center">Your Todos</h1>

        {todos.length === 0 && (
          <div className="text-center">No Todos to display</div>
        )}
        {todos &&
          todos.map((item, index) => {
            return (
              <div key={item._id} className="flex justify-center my-2">
                <div className="w-[80vw] h-[100px] bg-violet-300 flex rounded-md">
                  <input type="checkbox" onClick={handleCheck} id="" className="mx-2 w-[15px]" />
                  <div className="w-[70vw] mx-5 my-2">
                    <h3 className="text-xl">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <button className="bg-red-600 w-[30px] h-[30px] flex justify-center items-center rounded-lg hover:bg-red-700" name={item._id} onClick={handleDelete}>
                      <MdDelete className="text-white" />
                    </button>
                    <button className="bg-green-600 w-[30px] h-[30px] flex justify-center items-center rounded-lg border-orange-500 border-2 hover:bg-green-700" onClick={handleEdit}>
                      <CiEdit className="text-lg font-bold"/>
                    </button>
                  </div>
                </div>
              </div>
            );
            
          })}
      </div>
      <Edit/>
    </>
  );
};

export default Todo;
