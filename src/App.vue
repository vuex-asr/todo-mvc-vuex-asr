<template>
  <div class="todoapp">
    <header class="header">
      <h1>todos</h1>
    </header>
    <new-todo asr-bind-state="newTodo" asr-bind-actions="addTodo" />
    <list-todos
      asr-bind-getters="todos"
      asr-bind-mutations="removeTodo"
      asr-debug
    />
    <todo-footer asr-bind-getters="todosActive" />
  </div>
</template>

<style lang="scss">
@import "../src/style.css";
</style>
