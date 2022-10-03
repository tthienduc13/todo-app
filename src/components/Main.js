import React from 'react'
import "../Style/Main.css"
import {useState} from "react";

function Main() {
  const [todoList, setTodoList] = useState([])
  const [inputValue, setInputValue] = useState("")
  const handleApp = () => {
    setTodoList([...todoList,inputValue])
    
  }
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  }
  const deleteHandler = (index) => {
    const newTodoList = todoList.filter((value, id) => index !== id)
    setTodoList(newTodoList)
  }
  console.log(todoList);
  return (
  <div className='main'>
    <div className='content'>
      <div className='content__container'>
        <div className='content__title'>
          <h1>TODO APP</h1>
        </div>
        <input type = 'text'placeholder='Task name' className='content__input'
        onChange={(e) => handleOnChange(e)}
        >
        </input>
        <div className='content__submit-button'>
          <button className='submit-btn'
          onClick={handleApp}
          > 
          Add task
          </button>
        </div>
        <div className='content__todo-list'>
          {todoList.map((task,index) => (
            <div className='content__list row'>
              <div className='content__list-order '>{index + 1}</div>
              <div className='content__list-desc '> {task}</div>
              <button className='content__list-btn ' onClick={() => deleteHandler(index)}>DELETE</button>
            </div>
          ))}
        </div>
        <div className='content__footer'>You have {todoList.length} {todoList.length > 1 ? "tasks" : "task"}</div>
      </div>
    </div>
  </div>
  )
}

export default Main
