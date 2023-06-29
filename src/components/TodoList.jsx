import React, { Fragment, useState } from "react";
import  ReactDOM  from "react-dom";

import { TodoItem } from "./TodoItem";

export function TodoList(){

    //INICIALIZAR LAS VARIABLES QUE ESTARA VIENDO REACT 
    //POR SI SUFRE CAMBIOS
    //todos = NOMBRE DE LA CONSTANTE
    //setTodos = METODO QUE SE VA A UTILIZAR PARA CAPTURAR MODIFICACIONES
    //useState = USARA UN STATE PARA CAPTURAR LOS ESTADOS
    //VIGILAREMOS EL ESTADO DEL ARREGLO


    const [todos, setTodos] = useState([
        {id:1, tarea:'Tarea 1'}, {id:2, tarea:'Tarea 2'},
        {id:3, tarea:'Tarea 3'}, {id:4, tarea:'Tarea 4'}


    ]);












    return (
                <Fragment>

                    <h1>Listado de tareas</h1>

                    <div className="input-group mt-4 mb-4">
                        <input placeholder="Ingrese una tarea" className="form-control" type="text"></input>
                        <button className=""></button>
                    </div>


                    <ul className="list-group">
                        {todos.map((todo) => (
                            <todoItem todo={todo}></todoItem>
                        ))}
                    </ul>
                </Fragment>


    );
}