<template>
  <div class="todoapp">
    <header class="header">
      <h1>todos</h1>
    </header>
    <new-todo
            asr-bind-state="newTodo"
            asr-bind-actions="addTodo"
    />
    <list-todos
            asr-bind-getters="todosSelected"
            asr-bind-mutations="removeTodo, editTodo, toggleTodo, deleteTodo"
            asr-debug
    />
    <todo-footer
            asr-bind-state="visibility, filters"
            asr-bind-getters="todosActive"
            asr-bind-mutations="changeVisibility"
            asr-debug
    />
  </div>
</template>

<style lang="scss">
  @import '../src/style.css';
</style>
