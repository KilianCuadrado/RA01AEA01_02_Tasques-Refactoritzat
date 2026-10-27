<script setup>
import { ref } from 'vue'
import Task from '../model/task.js'

const props = defineProps({
  taskList: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['enviarTaskCreate'])
const newTaskTitle = ref('')

const enviarTaskCreate = () => {
  if (newTaskTitle.value.trim() === '') {
    alert('Please enter a task title.')
    return
  }

  let newTaskId = props.taskList.length + 1
  while (props.taskList.some(task => task.id === newTaskId.toString())) {
    newTaskId++
  }

  const createdTask = new Task(newTaskId.toString(), newTaskTitle.value)
  newTaskTitle.value = ''
  emit('enviarTaskCreate', createdTask)
}
</script>

<template>
  <form class="task-form" @submit.prevent="enviarTaskCreate">
    <input v-model="newTaskTitle" placeholder="Task title" required />
    <button type="submit">Add task</button>
  </form>
</template>

<style scoped>
.task-form {
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
}

input {
  flex: 1;
  min-width: 0;
  padding: 10px;
  border: 1px solid #b8c1cf;
  border-radius: 4px;
}

button {
  padding: 10px 13px;
  color: #ffffff;
  background: #3478c6;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #265f9e;
}

@media (max-width: 560px) {
  .task-form {
    align-items: stretch;
    flex-direction: column;
  }
}
</style>
