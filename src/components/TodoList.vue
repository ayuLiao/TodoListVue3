<script setup lang="ts">
import TodoListItem from './TodoListItem.vue';
import {Todo} from '../composables/iTodo'

// interface TTdos extends Array<Todo>{}

const props = defineProps<{todos: Array<Todo>}>()

</script>

<template>
<div class="todo-list">
    <TodoListItem 
    v-for="todo in todos" 
    :key="todo.id" 
    :todo-item="todo"
    @change-state="todo.completed = $event.target.checked"
    >
    </TodoListItem>
</div>
</template>

<style>

.todo-list {
  display: grid;
  row-gap: 14px;
}

</style>