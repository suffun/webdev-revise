import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone : false }]);
  let [newTodo, setNewTodo] = useState("");

  let addnewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone : false }];
    });
    setNewTodo("");
  };
  let updateTaskValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id)=>{
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));

  };

  let MarkAsDoneAll = () => {
    setTodos((prevTodo) =>
        prevTodo.map((todo) => {
            return{
                ...todo,
                isDone : true,
            }
        })
  )
  };
 let markAsDone = (id) => {
    setTodos((prevTodo) =>
        prevTodo.map((todo) => {
            if(todo.id == id){
                return{
                ...todo,
                isDone:true,
            };
            }
            else{
                return todo;
            }
            
        })
  )
  };


  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTaskValue}
      ></input>
      <br></br>
      <button onClick={addnewTask}>add</button>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style = {todo.isDone ? {textDecoration : "line-through"}: {}}>{todo.task}</span>
            &nbsp; &nbsp;
            <button onClick={()=> deleteTodo(todo.id)}>delete</button>
             &nbsp; &nbsp;
             <button onClick = {() => markAsDone(todo.id)}>Done</button>
            </li>
        ))}
      </ul>
      <br></br>
      <button onClick = { MarkAsDoneAll} >
        Mark As Done All
      </button>
    </div>
  );
}
