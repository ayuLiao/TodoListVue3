<script setup lang="ts">
import {reactive , ref, computed, Ref} from "vue"
import TodoAdd from "./components/TodoAdd.vue"
import TodoFilter from "./components/TodoFilter.vue";
import TodoList from "./components/TodoList.vue"
import useTodos from "./composables/useTodos"
import useFilteredTodos from "./composables/useFilteredTodos"
import {Todo} from './composables/iTodo'

// reactive 关联复杂数据结构
// https://juejin.cn/post/7038859745020608548#heading-2
// const todos = reactive<Array<Todo>>([])
// const addTodo = (todo: any) => todos.push(todo)


// const filter = ref<string>("all");
// const filteredTodos = computed(() => {
//   switch(filter.value) {
//     case "done":
//       return todos.filter((todo) => todo.completed);
//     case "todo":
//       return todos.filter((todo) => !todo.completed);
//     default:
//       return todos;
//   }
// })

const {todos , addTodo} = useTodos();
const {filter, filteredTodos} = useFilteredTodos(todos);

</script>

<template>
<div class="main">
<div class="container">
    <h1>欢迎使用Todo List</h1>
    
    <TodoAdd :tid="todos.length" @add-todo="addTodo"/>
    <TodoFilter 
    :selected="filter"
     @change-filter="filter=$event"
     />
    <TodoList :todos="filteredTodos"/>
  </div>
</div>
  
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}

/* 整个页面 */
.main {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background: rgb(216, 243, 214);
}

.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgba(26, 25, 25, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(229, 230, 235);
}

/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #384280;
}


</style>
