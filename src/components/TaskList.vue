<script setup>
import { computed } from 'vue'
import TaskItem from './TaskItem.vue'

const emit = defineEmits(['toggle-task', 'delete-task'])

const props = defineProps({
  taskList: {
    type: Array,
    default: () => []
  },
  showNotCompletedTasks: {
    type: Boolean,
    default: false
  }
})

const handleToggleTask = (task) => {
  emit('toggle-task', task)
}

const handleDeleteTask = (task) => {
  emit('delete-task', task)
}

const visibleTasks = computed(() => {
  return props.showNotCompletedTasks
    ? props.taskList.filter(task => !task.completed)
    : props.taskList
})
</script>

<template>
  <li v-for="task in visibleTasks" :key="task.id" class="task-item">
    <TaskItem
      :taskInfo="task"
      @toggle-task="handleToggleTask"
      @delete-task="handleDeleteTask"
    />
  </li>
  <li v-if="visibleTasks.length === 0" class="empty">No tasks to show.</li>
</template>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border: 1px solid #e1e5eb;
  border-radius: 4px;
}

.empty {
  padding: 18px;
  color: #6b7280;
  text-align: center;
}

@media (max-width: 560px) {
  .task-item {
    align-items: stretch;
    flex-direction: column;
  }
}
</style>
