<template>
  <div class="todo-mvc">
    <v-app>
      <list-todos
        asr-bind-getters="todos"
        asr-bind-mutations="removeTodo"
        asr-debug
      />
      <new-todo asr-bind-mutations="addTodo" />
    </v-app>
  </div>
</template>

<style>
div.todos {
  margin: 0 auto;
  min-width: 600px;
  max-width: 600px;
}
</style>
