import { useState } from "react";
import "./App.css";
// Components
import HandleInput from "./components/HandleInput";
import ListItem from "./components/ListItem";
import List from "./components/List";
//Redux
import { UseDispatch, useDispatch } from "react-redux";
import {addTodo} from "./store/todoSlice"



function App() {

  const [value, setValue] = useState("");
  const dispatch = useDispatch()


const addTask = ()=>{
  if(value){
    dispatch(addTodo({value}))
    setValue("")
  } 

  }


  // const toggleComplited =(todoID)=>{

   
  //     // setTodos(
  //     //   todos.map(
  //     //     todo =>{
  //     //       if (todo.id !== todoID) return todo
                            
  //     //       return {
  //     //         ...todo,
  //     //         complited: !todo.complited
  //     //       }
            
  //     //     }
  //     //   )
  //     // )
  // }
  



  return (
    <div className="App">
      <HandleInput value={value}   setValue = {setValue}  addTodo ={addTask}/>
      <List  />
      
    </div>
  );
}

export default App;
