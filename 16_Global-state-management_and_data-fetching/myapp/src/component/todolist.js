import {InputGroup, FormControl, Button, Form} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, checkedTodo } from "../store/todo";
export default function TodoList() {
    const td = useSelector((state)=>state.todos.todos)
    const dispatch = useDispatch()
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
        <Button onClick={()=>dispatch(addTodo(formTodo))} variant="outline-success" id="button-add-todo">
            Add
        </Button>
        </InputGroup>
            {td.map((todo) => {
                return (<div className="todo" onClick={()=>{dispatch(checkedTodo(todo.id))}}
                onChange={handleChecked} key={todo.id}>
                    <FontAwesomeIcon onClick={()=>{dispatch(deleteTodo(todo.id))}} icon={faXmark} style={{color:"red", display:"inline-block"}} />
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
