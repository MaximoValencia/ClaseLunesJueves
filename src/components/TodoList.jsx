import React, { Fragment, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { v4 as uuid } from "uuid";

export function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, tarea: "Vacaciones" },
    { id: 2, tarea: "Paseo" },
    { id: 3, tarea: "Viaje" },
    { id: 4, tarea: "Fiesta" }
  ]);

  const tareaRef = useRef();

  const agregarTarea = () => {
    const tarea = tareaRef.current.value;

    if (tarea === "") return;

    setTodos((prevTodos) => {
      const nuevaTarea = {
        id: uuid(),
        tarea: tarea
      };

      return [...prevTodos, nuevaTarea];
    });

    tareaRef.current.value = "";
  };

  return (
    <Fragment>
      <h1>Mi Álbum</h1>
      <div className="input-group mt-4 mb-4">
        <input
          ref={tareaRef} placeholder="Ingrese un título" className="form-control" type="text" />
        <button onClick={agregarTarea} className="btn btn-success ms-2">+</button>
      </div>

      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </Fragment>
  );
}

function TodoItem({ todo }) {
  return (
    <li >
   
      <div className="card" width= "18 rem;">
      <img src="https://picsum.photos/200" alt="Icon" className="ms-2" width="100" height="100" />
        <div className="card-body">
      {todo.tarea}
      </div>
      </div>
    
    </li>
  );
}

