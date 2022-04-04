import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eventi: [],
    event: null,
  },
  mutations: {
    SET_EVENTI(state, eventi) {
      state.eventi = eventi;
    },
    SET_EVENT(state, event) {
      state.event = event;
    },
    DELETE_EVENT(state, value) {
      state.eventi = state.eventi.filter((ele) => {
        return ele.id !== value;
      });
    },
  },
  actions: {
    loadEventi({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.data)
        .then((eventi) => {
          console.log(eventi);

          commit("SET_EVENTI", eventi);
        });
    },
    deletePost({ commit }, id) {
      console.log("ciao", id);
      commit("DELETE_EVENT", id);
    },
    update({ commit }, { id, obj }) {
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          body: JSON.stringify(obj),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => response.data)
        .then((event) => {
          console.log(event);
          commit("SET_EVENT", event);
          console.log(event);
        });
    },
    async loadItem({ commit }, id) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        this.event = response.data;
        if (!response) {
          throw new Error(`error: ${response.status}`);
        }
        commit("SET_EVENT", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
  getters: {
    getEventi: (state) => {
      return state.eventi;
    },
    getEvent: (state) => (id) => {
      return state.eventi.find((post) => post.id === id);
    },
  },
});
