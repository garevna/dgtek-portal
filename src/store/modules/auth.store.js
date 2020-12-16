/* eslint-disable no-unused-vars */

const cryptico = require('cryptico')

const bits = 1024

const RSAkey = cryptico.generateRSAKey(process.env.VUE_APP_CLIENT_PASS_PHRASE_SECRET, bits)

const successfulAnswer = 'The registration request has been successfully sent. \n\tThe administrator will review the request shortly. \n\tThe answer will come to the specified email.'

const state = {
  authError: null,
  authMessage: null,
  loading: false
}

const getters = {
  authorizationEndpoint: (state, getters, rootState) => `${rootState.host}/auth/signin`,
  authorizationEndpoint2: (state, getters, rootState) => `${rootState.host}/cabinet/door`,
  registrationEndpoint: (state, getters, rootState) => `${rootState.host}/auth/signup`,
  registrationEndpoint2: (state, getters, rootState) => `${rootState.host}/ticket/registration`
}

const mutations = {
  ERROR: (state, payload) => {
    state.authError = payload
  },
  MESSAGE: (state, payload) => {
    state.authMessage = payload
  },
  LOADING: (state, payload) => {
    state.loading = payload
  }
}
const actions = {
  async SIGN_IN ({ getters, commit, dispatch }, payload) {
    commit('LOADING', true)
    commit('ERROR', null)
    try {
      const response = await (await fetch(
        getters.authorizationEndpoint2,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: process.env.VUE_APP_AUTHORIZATION_KEY
          },
          body: JSON.stringify(payload)
        }
      )).json()
      if (!response.error && response.link) {
        const decriptResult = cryptico.decrypt(response.link, RSAkey)
        if (decriptResult.status === 'success') document.location.href = decriptResult.plaintext
        else {
          commit('ERROR', 'Decryption error!')
          // commit('LOADING', false)
          console.error('Decryption error!')
          console.error(decriptResult.status)
        }
      } else {
        commit('ERROR', response.error)
        console.error(response.error)
      }
    } catch (e) {
      commit('ERROR', e.message)
      console.error(e.message)
    } finally {
      commit('LOADING', false)
    }

    commit('LOADING', false)
  },
  async SIGN_UP ({ getters, commit, dispatch }, payload) {
    commit('ERROR', null)
    commit('LOADING', true)
    commit('MESSAGE', null)
    let response = null
    try {
      response =
        await (await fetch(
          getters.registrationEndpoint2,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              Authorization: process.env.VUE_APP_AUTHORIZATION_KEY
            },
            body: JSON.stringify(payload)
          }
        )).json()
      if (response && !response.error) {
        commit('MESSAGE', successfulAnswer)
        // const { email, password } = payload
        // dispatch('SIGN_IN', { email, password })
      } else {
        console.error(response.error)
        commit('ERROR', response.error)
      }
    } catch (e) {
      console.error(e.message)
      commit('ERROR', e.message)
    } finally {
      commit('LOADING', false)
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
