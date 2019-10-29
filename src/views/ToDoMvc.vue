<template>
  <div class="todoapp">
    <header class="header">
      <h1>todos</h1>
    </header>
    <new-todo asr-bind-state="newTodo" asr-bind-actions="addTodo" />
    <list-todos
      asr-bind-getters="todosActive AS todos"
      asr-bind-mutations="removeTodo"
      asr-debug
    />
    <to-do-footer asr-bind-getters="todosActive" />
  </div>
</template>

<style>
/*div.todos {*/
/*margin: 0 auto;*/
/*min-width: 600px;*/
/*max-width: 600px;*/
/*}*/
</style>
