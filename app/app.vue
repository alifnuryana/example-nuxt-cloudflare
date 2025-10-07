<template>
  <div>
    <NuxtRouteAnnouncer />
    <h1>Nuxt on Cloudflare!</h1>

    <div>
      <h2>Add new task</h2>
      <form @submit.prevent="onSubmit">
        <input
          ref="titleInput"
          v-model="form.title"
          type="text"
          placeholder="Task title"
          required
        >
        <button type="submit">
          Add Task
        </button>
      </form>
    </div>

    <div>
      <h2>Tasks</h2>
      <template v-if="tasks?.length">
        <ul>
          <li
            v-for="task in tasks"
            :key="task.id"
          >
            {{ task.title }}
          </li>
        </ul>
      </template>
      <template v-else>
        <li>No tasks found.</li>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: tasks, refresh } = await useFetch('/api/tasks')
const titleInput = ref<HTMLInputElement | null>(null)
const form = reactive<{ title: string }>({ title: '' })
const onSubmit = async () => {
  await $fetch('/api/tasks', {
    method: 'POST',
    body: form,
  })
  await refresh()
  form.title = ''
  titleInput.value?.focus()
}
</script>

<style>
body {
  font-family: sans-serif;
  background-color: black;
  color: whitesmoke;
}
</style>
