import React from 'react'
import Task from './Task';
import Input from './Input';
import "../Style/Main.css"
import {useRef, useState, useEffect} from "react";

function Main() {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')) ?? []);
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  },[todoList])
  useEffect(() => {
    console.log(todoList);
  }, [])
  const handleAdd = () => {
    if (inputValue !== "") {
      setTodoList([...todoList,inputValue])
      inputRef.current.focus()
      setInputValue("")
      
    } else {
      alert("Enter your work")
    }
  }
  const handleEnter = (e) => {
    if (e.code === "Enter") {
      handleAdd()
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
        <Input  functionChange={(e) => handleOnChange(e)} inputValue = {inputValue} inputRef = {inputRef} functionEnter={(e) => handleEnter(e)}></Input>
        <div className='content__submit-button'>
          <button className='submit-btn'
          onClick={handleAdd}
          > 
          Add task
          </button>
        </div>
        <div className='content__todo-list'>
          {todoList.map((task,index) => (
            <Task key={index} info ={task} index = {index} functionDelete = {() => handleDelete(index)}></Task>
          ))}
        </div>
        <div className='content__footer'>You have {todoList.length} {todoList.length>1 ? "tasks" : "task"} </div>
      </div>
    </div>
  </div>
  )
}

export default Main
