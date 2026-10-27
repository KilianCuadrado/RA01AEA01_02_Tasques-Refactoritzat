<script setup>
  import { computed, ref } from 'vue';
  import Task from './model/task.js';

  const showNotCompletedTasks = ref(false);
  const newTaskTitle = ref('');
  const newTaskDescription = ref('');

  const tasks = ref([
    new Task('1', 'Task 1'),
    new Task('2', 'Task 2'),
    new Task('3', 'Task 3')
  ]);

  const addTask = () => {
    if (newTaskTitle.value.trim() === '') {
      alert('Please enter a task title.');
      return;
    }
    let newTaskId = tasks.value.length + 1;

    while (tasks.value.some(task => task.id === newTaskId.toString())) {
      newTaskId++;
    }

    const newTask = new Task(newTaskId.toString(), newTaskTitle.value);
    tasks.value.push(newTask);
    newTaskTitle.value = '';
  };

  const deleteTask = (task) => {
    tasks.value.splice(tasks.value.indexOf(task), 1);
  };

  const visibleTasks = computed(() => {
    return showNotCompletedTasks.value
      ? tasks.value.filter(task => !task.completed)
      : tasks.value;
  });

  const pendingTasks = computed(() => {
    return tasks.value.filter(task => !task.completed).length;
  });

</script>

<template>

  <main class="task-app">
    <h1>Task Manager</h1>

    <form class="task-form" v-on:submit.prevent="addTask">
      <input v-model="newTaskTitle" placeholder="Task title" required />
      <button type="submit">Add task</button>
    </form>

    <label class="filter">
      <input v-model="showNotCompletedTasks" type="checkbox" />
      Show not completed tasks
    </label>

    <ul class="task-list">
      <li v-for="task in visibleTasks" :key="task.id" class="task-item">
          <span>{{ task.title }}</span>
          <span class="date">Created: {{ task.date }}</span>
          <span :class="['status', { completed: task.completed }]">
            {{ task.completed ? 'Completed' : 'Pending' }}
          </span>
          <div class="actions">
            <button type="button" v-on:click="task.completed = !task.completed">
              {{ task.completed ? 'Mark pending' : 'Complete' }}
            </button>
            <button type="button" class="delete" v-on:click="deleteTask(task)">Delete</button>
          </div>
      </li>
      <li v-if="visibleTasks.length === 0" class="empty">No tasks to show.</li>
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

  .task-form {
    display: flex;
    gap: 8px;
    margin-bottom: 18px;
  }

  input:not([type='checkbox']) {
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

  .task-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    border: 1px solid #e1e5eb;
    border-radius: 4px;
  }

  .date {
    color: #6b7280;
    font-size: 0.85rem;
  }

  .status {
    color: #a16207;
    font-size: 0.85rem;
  }

  .status.completed {
    color: #15803d;
  }

  .actions {
    display: flex;
    gap: 6px;
    margin-left: auto;
  }

  .delete {
    background: #c94b4b;
  }

  .delete:hover {
    background: #a93636;
  }

  .empty {
    padding: 18px;
    color: #6b7280;
    text-align: center;
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

    .task-form,
    .task-item {
      align-items: stretch;
      flex-direction: column;
    }

    .actions {
      margin-left: 0;
    }
  }
</style>
