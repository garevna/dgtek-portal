const postData = require('@/helpers/postData').default

console.log(postData)

const state = {
  registeredError: null,
  registeredSending: false
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
  async SEND (context, payload) {
    const response = await postData('agreement', payload)
    // let response = null
    // try {
    //   commit('SEND', true)
    //   response = await (await fetch(`${process.env.VUE_APP_API_URL}/agreement`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json;charset=utf-8',
    //       Authorization: process.env.VUE_APP_AUTHORIZATION_KEY
    //     },
    //     body: JSON.stringify(payload)
    //   })).json()

    console.log(response)
    context.commit('SEND', false)

    if (response?.error) {
      context.commit('ERROR', response.error)
      return false
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
