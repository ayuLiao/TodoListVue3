<script setup lang="ts">
import {ref} from "vue"
import useAddTodo from "../composables/useAddTodo"
// const todoContent = ref("")
// 接收父元素的传递下来的值

const props = defineProps<{
  tid: number
}>()

const emit = defineEmits(['add-todo'])
const {todoContent, emitAddTodo} = useAddTodo(props.tid, emit)
// const emitAddTodo = () => {
//     const todo = {
//         id: props.tid,
//         content: todoContent.value,
//         completed: false
//     }
//     // 发出add-todo事件给父元素
//     emit('add-todo', todo);
//     todoContent.value = ''
// }
</script>

<template>
<div class="add-todo">
  
    <input type="text" name="todo" v-model="todoContent" @keyup.enter="emitAddTodo"/>
    <button @click="emitAddTodo">
    <!-- 按钮上的加号元素 -->
    <i class="add-icon"></i>
    </button>
</div>
</template>

<style>
/* 添加框 */
.add-todo {
  position: relative;
  display: flex;
  align-items: center;
}

.add-todo input {
  padding: 16px 52px 16px 18px;
  border-radius: 48px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  font-size: 16px;
  color: #626262;
}

.add-todo button {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(#b6f1a2, #6df86d);
  border: none;
  outline: none;
  
  color: white;
  position: absolute;
  right: 0px;
  cursor: pointer;
}

.add-todo .add-icon {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>