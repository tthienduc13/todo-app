import React from 'react'

function Task({info,index, functionDelete}) {
  return (
    <div> 
    <div className='content__list row'>
        <div className='content__list-order '>{index + 1}</div>
        <div className='content__list-desc '>{info}</div>
        <button className='content__list-btn ' onClick={() => functionDelete(index)}>DELETE</button>
  </div>
  </div>
  )
}

export default Task