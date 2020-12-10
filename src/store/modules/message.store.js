/* eslint-disable no-unused-vars */

const state = {
  error: null,
  sending: false
}

const getters = {
  common: (state, getters, rootState) => `${rootState.host}/ticket/common`
}

const mutations = {
  ERROR: (state, payload) => {
    state.authError = payload
  },
  SEND: (state, payload) => {
    state.sending = payload
  }
}

const actions = {
  async SEND ({ getters, commit, dispatch }, payload) {
    let response = null
    try {
      commit('SEND', true)
      response = await (await fetch(
        getters.common,
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
        console.error(response.error)
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
