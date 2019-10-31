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

<script>
export default {
  computed: {
    // todosSelected: function() {
    //
    //   let todosSelected = this.todos;
    //
    //   switch (this.visibility) {
    //     case "active":
    //       todosSelected = this.todosActive;
    //       break;
    //     case "completed":
    //       todosSelected = this.todosDone;
    //       break;
    //   }
    //
    //   return todosSelected;
    // }
  },
  // filters: {
  //   capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  // }
};
</script>
