import { useState } from 'react';
import WeatherInfo from './WeatherInfo';


export default function Todo() {
  const [todoList,setTodoList]=useState([{
    title:"Todo-List",
    status:"pending"
  },])
  const [inputTodo,setInputTodo]=useState('')
  const [isEditing, setEditing]=useState(false)
  const [editIndex, setEditIndex] = useState(null);
  const [filterStatus,setFilterStatus]=useState("all");

  const textHandler =((e)=>{
    setInputTodo(e.target.value);
    

  })

  const addTodoHandler=()=>{
    if(inputTodo.trim()==""){
      alert('Todo cannot be empty')
      return;
    }
    isEditing
    ? setTodoList((prevList) => {
        const updatedList = [...prevList];
        const todoObj = { title: inputTodo, status: "pending" };
        updatedList[editIndex] = todoObj;
        return updatedList;
      }, setEditing(false))
    : setTodoList((prevList) => {
        if (inputTodo.length) {
          const todoObj = { title: inputTodo, status: "pending" };
          return [...prevList, todoObj];
        } else {
          return prevList;
        }
      });
  setInputTodo("");
};
  const deleteButtonHandler=(idx)=>{
    const confirmation = window.confirm("Are you Sure you want to delete this Todo")
    if(confirmation){
    const updatedList= todoList.filter((val,index)=>
      index!==idx )
    
    setTodoList(updatedList)
}
  }

  const editButtonHandler=(idx)=>{
    setInputTodo(todoList[idx].title)
    setEditing(true)
    setEditIndex(idx)
  }
  const cancelEditingHandler=()=>{
    setEditing(false)
    setInputTodo('')
    // console.log('Cancel Editing')
  }
  const checkBoxHandler=(value,index)=>{
    // console.log(e.target.checked)
    setTodoList((prevList) => {
      const obj = prevList[index];
      const newObject = { ...obj, status: value ? "done" : "pending" };
      const updatedList = [...prevList];
      updatedList[index] = newObject;
      return updatedList;
    });


  }
  const filterChangeHandler = (e) => {
    setFilterStatus(e.target.value);
    // console.log(e.target.value)
  };


  const filteredTodos =
    filterStatus === "all"
      ? todoList
      : todoList.filter((todo) => todo.status === filterStatus);




  return(
    <>
    <div className='todo-topic'><h2>Todo_List</h2></div>
    <div className='Components'>
    <div className='inputAndButton'>
      <input className="textFiled"type="text" placeholder='Enter todo-list' onChange={textHandler} value={inputTodo}/>
      <select className='select-status' defaultValue={filterStatus}value={filterStatus} onChange={filterChangeHandler}>
        <option value="all">All</option>
        <option value="pending">pending</option>
        <option value="done">Done</option>
      </select>
      
      <button type='button' className='add-Btn' onClick={addTodoHandler}>
         {isEditing?"Update":"Add"}

      </button>
      {isEditing
      ? <button type='button' className='cancel-edit-btn' onClick={cancelEditingHandler}>Cancel Editing</button>
      :null}

    </div>
    <ul className='todo-list'>{filteredTodos.map((todo,index)=>{

      return (

      <li key={index} className='todo-list-tem'>
        <input className='todo-checkbox'  onChange={(e)=>
          checkBoxHandler(e.target.checked,index)
          // console.log(e.target.checked)
        } 
        type="checkbox" 
        id={todo}  
        value={todo}
        checked={todo.status==='done'}
         ></input>
         
          <p>{todo.title} </p>

      
      <button className="edit-btn" type='button' onClick={()=>{
        editButtonHandler(index)
      }}>Edit</button>
      <button className="delete-btn" type='button' onClick={()=>{
        deleteButtonHandler(index);
        
      }}>Delete</button>
      
      
      </li>
             
    
    
    
    );
    
    }

    )}
    </ul>
    </div>
    <WeatherInfo/>
    

    


    </>
  )
};
