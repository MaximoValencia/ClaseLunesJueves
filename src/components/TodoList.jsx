import React, { Fragment, useState, useRef } from "react";
import  ReactDOM  from "react-dom";

import { TodoItem } from "./TodoItem";
import {v4 as uuid} from "uuid";

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

    const tareaRef = useRef();

    const agregarTarea = () =>{
        //alert("Agregando tarea....");
        const tarea = tareaRef.current.value;
        //alert(tarea);
        const id = uuid();
        //alert(id);

        if(tarea === '') return;

        setTodos((prevTodos) =>{
            const nuevaTarea = {
            id: uuid(),

            tarea: tarea
        }
        
        //3 PUNTITOS: TOMO EL ARREGLO NUEVO Y LO DESCOMPONGO
        //Y CON EL RETURN TOMO EL ARREGLO ANTIGUO Y LE SUMO LA TAREA NUEVA
        //RESULTANDO UN ARREGLO ACTUALIZADO
       tareaRef.current.value='';
        return [...prevTodos, nuevaTarea]
    })
    };
    







    return (
                <Fragment>

                    <div className="input-group mt-4 mb-4">
                        <input ref={tareaRef} placeholder="Ingrese una tarea" className="form-control" type="text"></input>
                        <button onClick={agregarTarea} className="btn btn-success ms-2">+</button>
                    </div>


                    <h1>Listado de tareas</h1>
                    <ul className="list-group">
                        {todos.map((todo) => (
                            <TodoItem todo={todo} key={todo.id}></TodoItem>
                        ))}
                    </ul>
                </Fragment>


    );
}