<script setup>
const props = defineProps({
  taskInfo: Object
})

const emit = defineEmits(['enviarTaskDelete'])

const enviarTaskDelete = (taskElim) => {
  emit('enviarTaskDelete', taskElim)
}
</script>

<template>
  <span>{{ props.taskInfo.title }}</span>
  <span class="date">Created: {{ props.taskInfo.date }}</span>
  <span :class="['status', { completed: props.taskInfo.completed }]">
    {{ props.taskInfo.completed ? 'Completed' : 'Pending' }}
  </span>
  <div class="actions">
    <button type="button" @click="props.taskInfo.completed = !props.taskInfo.completed">
      {{ props.taskInfo.completed ? 'Mark pending' : 'Complete' }}
    </button>
    <button type="button" class="delete" @click="enviarTaskDelete(props.taskInfo)">Delete</button>
  </div>
</template>

<style scoped>
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

.delete {
  background: #c94b4b;
}

.delete:hover {
  background: #a93636;
}

@media (max-width: 560px) {
  .actions {
    margin-left: 0;
  }
}
</style>
