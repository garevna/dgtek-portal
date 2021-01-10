const { getData, postData, putData, deleteData } = require('@/helpers').default

const errors = require('@/config/errors').default.services
const messages = require('@/config/messages').default.services
const endpoints = require('@/config/endpoints').default.services

const state = {
  services: {},
  serviceSchema: require('@/config/servicesSchema').default
}

const mutations = {
  UPDATE_SERVICES: (state, payload) => {
    state.services = payload
  },
  UPDATE_SERVICE_BY_ID: (state, payload) => {
    state.services = Object.assign({}, state.services, {
      [payload.id]: payload.value
    })
  },
  REMOVE_SERVICE: (state, id) => {
    const ids = Object.keys(state.services).filter(item => item !== id)
    state.services = Object.assign({}, ...ids.map(item => ({ [item]: state.services[item] })))
  }
}

const actions = {
  async GET_SERVICES ({ state, commit }) {
    const response = await getData(endpoints.get)
    const services = []
    if (!response.error) {
      for (const record of response.data) {
        const _id = record._id
        const service = {}
        for (const key in state.serviceSchema) {
          service[key] = Object.assign({}, state.serviceSchema[key], {
            value: record[key]
          })
        }
        services.push(Object.assign(service, { _id }))
      }

      commit('UPDATE_SERVICES', services)
    } else {
      commit('ERROR', errors.get, { root: true })
    }
  },

  async UPDATE_SERVICE ({ state, commit }, id) {
    const data = state.services[id]
    const body = Object.assign({}, ...Object.keys(data).map(propName => ({ [propName]: data[propName].value })))
    const response = await putData(`${endpoints.put}/${id}`, body)

    if (!response.error) {
      commit('MESSAGE', messages.update, { root: true })
    } else {
      commit('ERROR', errors.update, { root: true })
    }
    return response
  },

  async CREATE_SERVICE ({ state, commit }) {
    const service = Object.assign({}, ...Object.keys(state.serviceSchema).map(propName => ({ [propName]: state.serviceSchema[propName].value })))

    const response = await postData(endpoints.post, service)

    if (!response.error) {
      commit('UPDATE_SERVICE_BY_ID', { id: response.data, value: Object.assign({}, state.serviceSchema) })
      commit('MESSAGE', messages.create, { root: true })
      return {
        id: response.data,
        service
      }
    } else {
      commit('ERROR', errors.create, { root: true })
      return null
    }
  },

  async DELETE_SERVICE ({ state, commit }, id) {
    const response = await deleteData(`service/${id}`)

    if (!response.error) {
      commit('REMOVE_SERVICE', id)
      commit('MESSAGE', messages.delete, { root: true })
    } else {
      commit('ERROR', errors.delete, { root: true })
    }

    return response
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
