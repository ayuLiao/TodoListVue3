<script setup lang="ts">
import { ref } from 'vue';

const filters = [
  {label: "全部", value: "all"},
  {label: "已完成", value: "done"},
  {label: "未完成", value: "todo"},
]

const props = defineProps<{
  selected: string
}>()

</script>

<template>
 <div class="filters">
    <span 
    v-for="filter in filters"
    :key="filter.value"
    class="filter"
    :class="{active: selected === filter.value}"
     @click="$emit('change-filter', filter.value)"
    >{{filter.label}}
    </span>
</div>
</template>

<style>
/* 过滤选项 */
.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;

}

.filters .filter {
  margin-right: 14px;
  transition: 0.8s;

  /* 鼠标移动过去时，成为小手 */
  cursor: pointer;
}

.filters .filter.active {
  color: #6b729c;
  transform: scale(1.2);
}
</style>