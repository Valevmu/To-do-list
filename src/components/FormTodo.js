import React, { useState } from "react";

export const FormTodo = (props) => {

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTodo(input)
    setInput("")   

  }
  return (
    <form onSubmit={handleSubmit}className="form-control">
      <label className="form-label">Tareas</label>
      <input
        value={input}     //al escribir, y colocar input se vuelve en blanco 
        onChange={(e) => setInput(e.target.value)}
        className="form-control"
        type="text"
        placeholder="Tareas pendientes"
      ></input>
      <button className="btn btn-primary" type="submit">
        Añadir
      </button>
    </form>
  );
};
