import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newTodo: {},
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
    },
    newId: state => {
      let max = 0;
      state.todos.forEach(todo => {
        if (todo.id > max) {
          max = todo.id;
        }
      });
      return max + 1;
    }
  },
  mutations: {
    pushTodoToTodos(state, item) {
      console.log("pushTod was triggered with item: ", item);
      state.todos.push(item);
    },
    removeTodo(state, item) {
      console.log("removeTodo was triggered");
      console.log(state.todos);
      state.todos = state.todos.filter(todo => {
        return todo.id !== item.id;
      });
    },
    initializeNewTodo(state) {
      state.newTodo = {};
    }
  },
  actions: {
    addTodo({ commit, getters }, item) {
      // create id
      const mappedItem = {};
      mappedItem.id = getters.newId;
      mappedItem.title = item.title;
      mappedItem.description = item.description;
      mappedItem.done = false;

      // Getters are only acailable in actions and can be passed
      // via a commit:

      commit("pushTodoToTodos", mappedItem);
      commit("initializeNewTodo");
    }
  },
  modules: {}
});
