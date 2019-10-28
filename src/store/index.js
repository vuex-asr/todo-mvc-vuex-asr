import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, title: "do groceries", description: "", done: false },
      { id: 2, title: "do wash", description: "with care", done: false },
      {
        id: 3,
        title: "go to hairdresser",
        description: "tip if you are happy",
        done: true
      }
    ]
  },
  getters: {
    todos: state => {
      return state.todos;
    },
    done: state => {
      return state.todos.filter(item => {
        return item.done === true;
      });
    }
  },
  mutations: {
    addTodo(state, item) {
      // create id
      let max = 0;
      state.todos.forEach(todo => {
        if (todo.id > max) {
          max = todo.id;
        }
      });

      item.id = max + 1;
      item.done = false;

      console.log(item);

      state.todos.push(item);
    },
    removeTodo(state, item) {
      console.log('removeTodo was triggered');
      console.log(state.todos);
      state.todos = state.todos.filter(todo => {
        return todo.id !== item.id;
      });
    }
  },
  actions: {},
  modules: {}
});
