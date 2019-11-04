<template>
  <div class="todoapp">
    <header class="header">
      <h1>todos</h1>
    </header>
    <new-todo
      asr-bind-state="Todos/newTodo"
      asr-bind-actions="Todos/addTodo"
    />
    <list-todos
      asr-bind-getters="Todos/todosSelected AS todos"
      asr-bind-mutations="
        Todos/removeTodo,
        Todos/editTodo,
        Todos/toggleTodo,
        Todos/deleteTodo"
      asr-debug
    />
    <todo-footer
      asr-bind-state="Todos/visibility, Todos/filters"
      asr-bind-getters="Todos/todosActive"
      asr-bind-mutations="Todos/changeVisibility"
      asr-debug
    />
  </div>
</template>

<style lang="scss">
@import "../src/style.css";
</style>
