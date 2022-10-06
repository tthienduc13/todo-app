import React from 'react'
import "../Style/Main.css"
import {useRef, useState} from "react";

function Main() {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleAdd = () => {
    if (inputValue !== "") {
      setTodoList([...todoList,inputValue])
      inputRef.current.focus()
      setInputValue("")
    } else {
      alert("Enter your work")
    }
  }
  const handleDelete = (index) => {
    console.log(index)
    const newTodoList = todoList.filter((value,id) => index !== id)
    setTodoList(newTodoList)
  }
  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
  <div className='main'>
    <div className='content'>
      <div className='content__container'>
        <div className='content__title'>
          <h1>TODO APP</h1>
        </div>
        <input type = 'text'placeholder='Task name' className='content__input'
        onChange={(e) => handleOnChange(e)}
        value = {inputValue}
        ref = {inputRef}
        >
        </input>
        <div className='content__submit-button'>
          <button className='submit-btn'
          onClick={handleAdd}
          > 
          Add task
          </button>
        </div>
        <div className='content__todo-list'>
          {todoList.map((task,index) => (
            <div className='content__list row'>
              <div className='content__list-order '>{index + 1}</div>
              <div className='content__list-desc '>{task}</div>
              <button className='content__list-btn ' onClick={() => handleDelete(index)}>DELETE</button>
            </div>
          ))}
        </div>
        <div className='content__footer'>You have {todoList.length} {todoList.length>1 ? "tasks" : "task"} </div>
      </div>
    </div>
  </div>
  )
}

export default Main
