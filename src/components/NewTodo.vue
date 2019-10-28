<template>
  <div class="new-todo">
    <input v-model="newTodo.title" @keyup.enter="addTodo(newTodo)" />
  </div>
</template>