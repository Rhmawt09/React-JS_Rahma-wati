import { todos } from "./db/todos"
export default function TodoList() {
    return (
        <div className="todolist">
            {todos.map((todo) => {
                return (<div className="todo" key={todo.id}>
                    {todo.completed ?  (
                        <strike>{todo.title}</strike>
                    ) : todo.title}
                </div>)
            })}
        </div>
    )
}