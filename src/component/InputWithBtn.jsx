import React from 'react'
import './ui.css'
function InputWithBtn({ topic, btntext ,handleTopicChange, handleBtnClick}) {
  return (
    <div className={'addTodo'}>
        <input className='todotext' value={topic} onChange={handleTopicChange}/>
        <button className='btnaddtodo' onClick={handleBtnClick}>{btntext}</button>
    </div>
  )
}

export default InputWithBtn