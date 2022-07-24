import {createSlice} from '@reduxjs/toolkit'

export const todos = [
    {
        id:1,
        title:"test",
        checked: true
    },
    {
        id:2,
        title:"test2",
        checked: false
    },
    {
        id:3,
        title:"Membuat Komponen",
        checked: true
    },
    {
        id:4,
        title:"deploy ke server",
        checked: false
    }
]

export const todoSlice = createSlice({
    name:'todo',
    initialState: {
        todos:todos
    },
    reducers:{
        addTodo: (state,action) => {
            let data = [...state.todos]
            data.push({id:state.todos.length+1, ...action.payload})
            // data.push({id:state.todos.length+1, title:formTodo.title, checked:formTodo.checked})
            state.todos = data
        },
        deleteTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
        checkedTodo: (state, action) => {
            let data = state.todos.filter((todo)=>todo.id===action.payload)
            state.todos = state.todos.map(t=>t.id!==action.payload?t:{...t, checked:data.checked})
        }
    }
})

export const {addTodo, deleteTodo, checkedTodo} = todoSlice.actions
export default todoSlice.reducer