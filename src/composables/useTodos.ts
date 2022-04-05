import {onMounted, reactive} from "vue"
import TodoListItemVue from "../components/TodoListItem.vue"
import {Todo} from "./iTodo"

export default function useTodos() {
    const todos = reactive<Array<Todo>>([])
    const addTodo = (todo: any) => todos.push(todo)

    const fetchTodos = async () => {
        const response = await fetch(
            "http://127.0.0.1:8000/todos"
        )
        const rawTodos = await response.json() 
        for (let i=0; i < rawTodos.length;i++) {
            let rawtodo = rawTodos[i]
            todos.push(
                {
                    id: rawtodo.id,
                    content: rawtodo.content,
                    completed: rawtodo.completed
                }
            )
        }
        // todos = rawTodos.map((rawtodo: any) => ({
        //     id: rawtodo.id,
        //     content: rawtodo.title,
        //     completed: rawtodo.completed
        // }))
    }

    onMounted(() => {
        fetchTodos();
    })

    return {
        todos,
        addTodo
    }

}