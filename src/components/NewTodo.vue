<template>
  <div class="header">
    <input
      class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      v-model="newTodo.text"
      @keyup.enter="addTodo(newTodo)"
    />
  </div>
</template>
