import {useState} from "react"

export default function Todo() {
     let [todos, setTodos] = useState(["sample task"]);
     let [newTodo, setNewTodo] = useState("");
     
     let addnewTask = () =>{
        setTodos([...todos, newTodo]);
        setNewTodo("");
     }
     let updateTaskValue = (event)=>{
        setNewTodo(event.target.value);
     }
    return(
       
        <div>
            <input 
            placeholder = "add a task"
             value = {newTodo}
            onChange={updateTaskValue}
            >

            </input>
            <br></br>
            <button onClick={addnewTask}>add</button>
            <br></br><br></br><br></br>
            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
               { todos.map((todo) =>(
                <li>{todo}</li>
                ))}
            </ul>
        </div>
    );
}