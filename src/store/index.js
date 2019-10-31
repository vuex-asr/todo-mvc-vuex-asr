import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newTodo: {},
    todos: [
      {
        id: 1,
        text: "this one is done",
        done: true
      },
      {
        id: 2,
        text: "this one is active",
        done: false
      }
    ],
    visibility: "all",
    filters: ["all", "active", "completed"]
  },
  getters: {
    todos: state => {
      return state.todos;
    },
    todosActive: state => {
      return state.todos.filter(item => {
        return item.done === false;
      });
    },
    todosDone: state => {
      return state.todos.filter(item => {
        return item.done === true;
      });
    },
    todosSelected: (state, getters) => {

      let todosSelected = state.todos;
      console.log("state.visibility", state.visibility);

      switch (state.visibility) {
        case "active":
          todosSelected = getters.todosActive;
          break;
        case "completed":
          todosSelected = getters.todosDone;
          break;
      }

      return todosSelected;
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
    changeVisibility: (state, key) => {
      state.visibility = key;
    },
    initializeNewTodo(state) {
      state.newTodo = {};
    },
    deleteTodo(state, { todo }) {
      state.todos.splice(state.todos.indexOf(todo), 1);
    },
    toggleTodo(state, { todo }) {
      todo.done = !todo.done;
    },
    editTodo(state, { todo, value }) {
      todo.text = value;
    },
    toggleAll(state, { done }) {
      state.todos.forEach(todo => {
        todo.done = done;
      });
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(todo => !todo.done);
    }
  },
  actions: {
    addTodo({ commit, getters }, item) {
      // create id
      const mappedItem = {};

      mappedItem.id = getters.newId;
      mappedItem.text = item.text;
      mappedItem.done = false;

      // Getters are only acailable in actions and can be passed
      // via a commit:

      commit("pushTodoToTodos", mappedItem);
      commit("initializeNewTodo");
    },
    // doneEdit({ commit }, {e, todo}) {
    //   console.log("e", e);
    //   console.log("todo", todo);
    //
    //
    //   const value = e.target.value.trim();
    //   // const { todo } = this;
    //   if (!value) {
    //     commit("deleteTodo",{
    //       todo
    //     });
    //   } else if (this.editing) {
    //     commit("editTodo", {
    //       todo,
    //       value
    //     });
    //
    //     // Resolve in state;
    //
    //     //this.editing = false;
    //   }
    // },
    // cancelEdit({}, {e, todo}) {
    //   e.target.value = todo.text;
    //   // this.editing = false;
    // },
  }
});
