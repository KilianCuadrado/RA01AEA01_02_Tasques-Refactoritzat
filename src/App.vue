<script setup>
import { computed, ref } from 'vue'
import Task from './model/task.js'
import TaskList from './components/TaskList.vue'
import TaskForm from './components/TaskForm.vue'

const showNotCompletedTasks = ref(false)

const tasks = ref([
  new Task('1', 'Task 1'),
  new Task('2', 'Task 2'),
  new Task('3', 'Task 3')
])

const addTask = (newTask) => {
  tasks.value.push(newTask)
}

const deleteTask = (task) => {
  tasks.value.splice(tasks.value.indexOf(task), 1)
}

const pendingTasks = computed(() => {
  return tasks.value.filter(task => !task.completed).length
})
</script>

<template>
  <main class="task-app">
    <h1>Task Manager</h1>

    <TaskForm :taskList="tasks" @enviarTaskCreate="addTask" />

    <label class="filter">
      <input v-model="showNotCompletedTasks" type="checkbox" />
      Show not completed tasks
    </label>

    <ul class="task-list">
      <TaskList
        :taskList="tasks"
        :showNotCompletedTasks="showNotCompletedTasks"
        @gestionarDelTask="deleteTask"
      />
    </ul>

    <footer class="summary">
      <span>Total: {{ tasks.length }}</span>
      <span>Pending: {{ pendingTasks }}</span>
    </footer>
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.task-app {
  width: min(680px, 92%);
  margin: 40px auto;
  padding: 28px;
  background: #ffffff;
  border: 1px solid #d9dee7;
  border-radius: 8px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
}

h1 {
  margin-top: 0;
  color: #26364a;
}

.filter {
  display: block;
  margin-bottom: 18px;
  color: #4b5563;
}

.task-list {
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.summary {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 16px;
  color: #26364a;
  font-weight: 600;
  border-top: 1px solid #e1e5eb;
}

@media (max-width: 560px) {
  .task-app {
    padding: 20px;
  }
}
</style>
