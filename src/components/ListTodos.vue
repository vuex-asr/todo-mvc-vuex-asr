<template>
  <div class="main">
    <ul class="todo-list">
      <todo
        v-for="todo in todosSelected"
        :key="todo.id"
        :todo="todo"
        asr-bind-mutations="editTodo, toggleTodo, deleteTodo"
      ></todo>
    </ul>
  </div>
</template>