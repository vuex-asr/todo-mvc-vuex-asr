<template>
  <footer class="footer" style>
    <span class="todo-count">
      <strong>{{ todosActive.length }}</strong>
      items left
    </span>
    <ul class="filters">
      <li :key="key" v-for="key in filters">
        <a
          :href="'#/' + key"
          :class="{ selected: visibility === key }"
          @click="changeVisibility(key)"
          >{{ key | capitalize }}</a
        >
      </li>
    </ul>
    <button class="clear-completed" style="display: none;">
      Clear completed
    </button>
  </footer>
</template>

<script>
export default {
  filters: {
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
};
</script>
