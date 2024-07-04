import React, { useEffect } from 'react'
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useTodoContext } from '../context/TodoContext';
import './ui.css'


function TodoContent({ handleEdit, handleDelete}) {
  const {state, dispatch} = useTodoContext()
  const {topics} = state
  
  useEffect(()=> {
    console.log(state)
  }, [topics])
  return (
    <div>
      {topics.map((content, index) => {
        return <div key={index} className='todocontent'>
          <div className='taskcontent'>
            {content}
          </div>
          <MdModeEdit className='edit' color='blue' onClick={() => handleEdit(content, index)} />
          <MdDelete className='delete' color='red' onClick={() => handleDelete(index)} />
        </div>
})}
    </div>
  )
}

export default TodoContent