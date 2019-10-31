<template>
  <div class="main">
    <ul class="todo-list">
      <todo
        v-for="todo in todosSelected"
        :key="todo.id"
        :todo="todo"
        :editTodo="editTodo"
        :toggleTodo="toggleTodo"
        :deleteTodo="deleteTodo"
      ></todo>
    </ul>
  </div>
</template>