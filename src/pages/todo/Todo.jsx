import React, { useState,useReducer, useEffect } from "react";
import "./todo.css";
import InputWithBtn from "../../component/InputWithBtn";
import TodoContent from "../../component/TodoContent";
import { useTodoContext } from "../../context/TodoContext";
import { TbPencilCancel } from "react-icons/tb";
function Todo() {
  const {state,dispatch} = useTodoContext()
  const [topic, setTopic] = useState("");
  const {showAddTodo,showEditToDo} = state
  useEffect(()=> {

  },[showAddTodo.showEditToDo])
  function handleAddTodo() {
    console.log("hello")
    dispatch({type: "add", payload: topic})
  }
  function handleShowEditInput(topic, index) {
    setTopic(topic)
    console.log(topic,index)
    dispatch({type:"show_edit_input", payload: index})
  }
  function handleEditTodo() {
    dispatch({type:"edit", payload: topic})
  }
  function handleHideEditTodo() {
    dispatch({type: "hide_edit_input", payload:null})
  }
  function deleteTodo(index) {
    dispatch({type: "delete", payload:index})
  }
  function handleCancelEdit () {
    setTopic("")
    dispatch({type: "cancel_edit", payload: null})
  }
  return (
    <div className="todo">
      <h3>Todo App</h3>
      {state.showAddTodo && (
        <InputWithBtn
          topic={topic}
          btntext={"Add Topic"}
          handleBtnClick={handleAddTodo}
          handleTopicChange={(e)=> setTopic(e.target.value)}
        />
      )}

     {state.showEditTodo && (
      <div className="edit">
        <div className="inputedit">
        <InputWithBtn
          topic={topic}
          btntext={"Edit Topic"}
          handleBtnClick={handleEditTodo}
          handleTopicChange={(e)=> setTopic(e.target.value)}
        />
        </div>
        <div className="canceldiv">
            <TbPencilCancel className="cancel" size={23} color="red" onClick={handleCancelEdit}/>
        </div>
      </div>
      )}
        <TodoContent handleDelete={deleteTodo} handleEdit={handleShowEditInput}/>
      

      
    </div>
  );
}

export default Todo;
