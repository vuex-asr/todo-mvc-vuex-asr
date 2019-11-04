import Vue from "vue";
import Vuex from "vuex";
import { ModuleTodos } from './modules/modules-todos'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Todos: ModuleTodos,
  },
  state: {
    message: "message in the root of the store",
  },
});
