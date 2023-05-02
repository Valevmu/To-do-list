import React from "react";
import { BookmarkCheck, Trash } from "react-bootstrap-icons";



export const TodoItem = (props) => {
  const {todo, removeTodo, completeTodo} =props
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}  >
      <div className="form-control " >
      {props.todo.text}
      <div>
        <Trash  onClick={() => removeTodo(todo.id)}/>
        <BookmarkCheck onClick={() => completeTodo(todo.id)} />
      </div>
    </div>
    </div>
    
  );
};
