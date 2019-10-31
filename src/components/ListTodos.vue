<template>
  <div class="main">
    <ul class="todo-list">
      <todo
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :edit-todo="editTodo"
        :toggle-todo="toggleTodo"
        :delete-todo="deleteTodo"
      />
    </ul>
  </div>
</template>
