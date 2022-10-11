import React from 'react'

function Input({functionChange,inputValue,inputRef, functionEnter}) {
  return (
    <div>
        <input type = 'text'placeholder='Task name' className='content__input'
        onChange={(e) => functionChange(e)}
        value = {inputValue}
        ref = {inputRef}
        onKeyDown = {(e) => functionEnter(e)}
        >
        </input>
    </div>
  )
}

export default Input