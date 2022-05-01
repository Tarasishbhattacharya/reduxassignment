import logo from './logo.svg';
import './App.css';
import {store} from "./Redux/store"
import { addCount, delTodo } from './Redux/action';
import { addTodo } from './Redux/action';
import {useDispatch,useSelector} from "react-redux";
import { useState } from 'react';
function App() {
  const dispatch=useDispatch()
  const counter=useSelector((store)=>store.counter)
  const task=useSelector((store)=>store.todos)
  const[data,setData]=useState("")
  function handlechange(e){
     setData(e.target.value);
  }
  return (
    <div className="App">
      <h3>Counter:{counter}</h3>
      <button onClick={()=>{
        dispatch(addCount(1));
      }}>Add 1</button>
      <input type="text" placeholder='Add todo' onChange={handlechange}></input>
      <button onClick={()=>{
          dispatch(addTodo(data));
      }}>submit</button>
      {task.map((item)=>{ return <div>{item}</div>})}
    
  
  </div>
  )}
export default App;
