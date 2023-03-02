 import React, { useState } from 'react'
import { AddTodoAction, RemoveTodoAction,EditTodoAction} from './Actions/TodoAction';
import { useDispatch, useSelector } from 'react-redux';
import "./App.css"
//import {useNavigate} from "react-router-dom"
 

const App = () => {
const [todo, setTodo] = useState(''); 
// const navigate = {useNavigate}  
const dispatch = useDispatch()
const Todo = useSelector(state=>state.Todo);

const {todos}  = Todo;
const [toggle,setToggle] = useState(true);
const [edit,setEdit] =useState(null);

function HandleSubmit(e){
    e.preventDefault();
if(todo && !toggle){
  setTodo(
    todos.map((elem)=>{
      if(elem.id===edit){
        return {...elem,todo:todo}
      }
      return elem;
    })
  ) 
}

    dispatch(AddTodoAction(todo))
    setTodo('')}

function EditHandler(id){ 
 let Editeditem = todos.find((elem) => {
    if(elem.id === id){
      return id    
    }
    return elem;
  });


  console.log(Editeditem);
   setToggle(false)
   setTodo(Editeditem.todo)  
  setEdit(id)
    
  // dispatch(EditTodoAction(id) // //setTodo("")
}

function RemoveHandler(t){ 
  dispatch(RemoveTodoAction(t))
}
 return (
    <div className='App'>
     <header className='App-header' > 
      <h2>TO-DO-APP IN REDUX</h2>
      <form onSubmit={HandleSubmit}>
        
        <input
        value={todo}
        placeholder='Enter a todo'  
        style={{
         width:350,
         padding:10,
         borderRadius:20,
         border:"none",
         fontSize:20,
         }}
        onChange={(e)=>setTodo(e.target.value)}
        ></input>
        {
          toggle ? <button type='submit'
          style={{
            borderRadius:50,
            width:45,
              height:45,
            background:"orangered",
            color:"black",
             fontSize:22,
             marginLeft:20,
             cursor: 'pointer'
          }}
          >+</button>: <button type='submit'
          style={{
          borderRadius:50,
          width:120,
          height:40,
          background:"lightgreen",
          color:"black",
           fontSize:22,
           float:"right",
           marginTop:2,
        }}
        onSubmit = {HandleSubmit}        
        >EditTodo</button>
      }
      
      </form>
      <ul className='alltodos'>
        {todos && todos.map((t) =>(
            <li key={t.id} className ='singletodo'>
            <span className='todotext'
            style={{
               color:"black",
               fontSize:22,
               float:"left",
               marginLeft:20,
               marginTop:5,
            }}
            >{t.todo}</span>
            <button type='submit'
            style={{
              borderRadius:50,
              width:90,
              height:40,
              background:"yellow",
              color:"black",
               fontSize:22,
               float:"right",
               marginTop :2, 
               cursor: 'pointer',
               }}
               onClick={()=>RemoveHandler(t)}
            >Delete</button>
             
             
             <button type='submit'
              style={{
              borderRadius:50,
              width:90,
              height:40,
              background:"lightgreen",
              color:"black",
               fontSize:22,
               float:"right",
               marginTop:2,
            }}
             onClick={()=>EditHandler(t)}
            >Edit</button>
            </li>
        ))}
         </ul>
     </header>
    </div>
  )
}

export default App;