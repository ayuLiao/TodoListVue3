<script setup lang="ts">
import { Todo } from "../composables/iTodo";
const props = defineProps<{todoItem: Todo}>()

</script>

<template>
<div class="todo-item" :class="{done: todoItem.completed}">
<!-- 用 label 包裹后，点击里边任何一个元素都能触发 checkbox 的事件 -->
<label>
    <input
     type="checkbox" 
    :checked="todoItem.completed"
    @click="$emit('change-state', $event)"
    />
     {{ todoItem.content }}
    <span class="check-button"></span>
</label>
</div>
</template>

<style>
.todo-item {
  background: white;
  padding: 16px;
  border-radius: 8px;
  color: #626262;
}

.todo-item label {
  position: relative;
  display: flex;
  align-items: center;
}

.todo-item label span.check-button {
  position: absolute;
  top: 0;
}

.todo-item label span.check-button::before,
.todo-item label span.check-button::after {
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}

.todo-item label span.check-button::before {
  border: 1px solid #7ad86d;
}

.todo-item label span.check-button::after {
  transition: 0.4s;
  background: #7ad86d;
  transform: translate(1px, 1px) scale(0.8);
  opacity: 0;
}

.todo-item input {
  margin-right: 16px;
  opacity: 0;
}

.todo-item input:checked + span.check-button::after {
  opacity: 1;
}

.todo-item.done label {
  /* 划线 */
  text-decoration: line-through;
  /* 斜体 */
  font-style: italic;
}
</style>