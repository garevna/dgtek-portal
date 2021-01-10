/* eslint-disable no-unused-vars */

const state = {
  registeredError: null,
  registeredSending: false
}

const getters = {
  registration: (state, getters, rootState) => `${rootState.host}/???`
}

const mutations = {
  ERROR: (state, payload) => {
    state.registeredError = payload
  },
  SEND: (state, payload) => {
    state.registeredSending = payload
  }
}

const actions = {
  async SEND ({ getters, commit, dispatch }, payload) {
    let response = null
    try {
      commit('SEND', true)
      response = await (await fetch(
        getters.registration,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: process.env.VUE_APP_AUTHORIZATION_KEY
          },
          body: JSON.stringify(payload)
        }
      )).json()
      if (response?.error) {
        commit('ERROR', response.error)
      }
    } catch (e) {
      console.error(e.message)
    } finally {
      commit('SEND', false)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
