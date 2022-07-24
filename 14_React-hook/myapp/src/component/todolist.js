import { todos } from "./database/todos"
import {InputGroup, FormControl, Button, Form} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function TodoList() {
        const [todoList, setTodoList] = useState(todos)
        const [formTodo, setFormTodo] = useState({
        title:'',
        checked:false
    })

    function handleChange(e){
        let data = {...formTodo}
        data[e.target.name] = e.target.value
        setFormTodo(data)
    }

    function handleChecked(e){
        let data = {...formTodo}
        data[e.target.checked] = e.target.value
        setFormTodo(data)
    }

    function handleDelete(id){
        let data = [...todoList]
        let filteredData = data.filter((todo)=>todo.id!==id)
        setTodoList(filteredData)
    }

    function addTodo(e){
        if(formTodo.title === ''){
        alert('input tidak boleh kosong!')
        return
    }
    let data = [...todoList]
    data.push({id:todoList.length+1, title:formTodo.title, checked:formTodo.checked})
    setTodoList(data)
    }

    return (
        <div className="todolist">
            <InputGroup className="mb-3">
            <FormControl
                placeholder="Todo"
                aria-label="Todo"
                id="inputTodo"
                value={formTodo.title}
                onChange={handleChange}
                name="title"
            />
            <Button onClick={addTodo} variant="outline-success" id="button-add-todo">
            Add
            </Button>
            </InputGroup>
                    {todoList.map((todo) => {
                        return (<div className="todo" onClick={()=>{todo.checked=!todo.checked}}
                        onChange={handleChecked} key={todo.id}>
                    <FontAwesomeIcon onClick={()=>handleDelete(todo.id)} icon={faXmark} style={{color:"red", display:"inline-block"}} />
                    <Form.Check 
                        style={{display:"inline-block",paddingLeft:"1rem",paddingRight:"1rem"}}
                        type={'checkbox'}
                        id={`default-checkbox`}
                        checked={todo.checked}
                        onChange={handleChecked}
                    />
                    {todo.checked ?  (
                        <strike style={{display:"inline-block"}}>{todo.title}</strike>
                    ) : todo.title}
                </div>)
            })}
    </div>
    )
}
