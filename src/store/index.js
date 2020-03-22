import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [
      {id: "1" , title: "2" , todo: [ "dsd" , "dsd" , ]},
      {id: "2" , title: "2" , todo: [ "dsd" , "dsd" , ]},
      {id: "3" , title: "2" , todo: [ "dsd" , "dsd" , ]},
      {id: "4" , title: "2" , todo: [ "dsd" , "dsd" , ]},
    ],
  },
  mutations: {
    ADD_NOTE(state, data) {
      state.notes.push(data);
    },

    DELETE_NOTE(state , id) {
      state.notes.splice(id , 1);
    }
  },
  actions: {
    deleteNote({ commit }, id) {
      return new Promise( (resolve, reject) => {
        axios({})
            .then(
                commit('DELETE_NOTE', id),
                resolve('deleted')
            )
            .catch(err => {
              reject(err)
            })
      })
    },

    addNote({ commit }, data) {
      return new Promise( (resolve, reject) => {
        axios({})
            .then(
                commit('ADD_NOTE', data),
                resolve('added')
            )
            .catch(err => {
              reject(err)
            })
      })
    }
  },
  modules: {
  }
})
