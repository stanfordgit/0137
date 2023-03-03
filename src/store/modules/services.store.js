export default {
  state: {
    services: [
      {
        id: 1,
        value: 'Manual tour booking',
        data: 11,
        color: '#b1e19b'
      },
      {
        id: 2,
        value: 'Package tours',
        data: 3,
        color: '#ace2f8'
      },
      {
        id: 3,
        value: 'Hotels',
        data: 1,
        color: '#ace2f8'
      }
    ]
  },
  getters: {
    getServices(state) {
      return state.services;
    }
  },
  mutations: {
    //Here we describe the mutations that will record the data passed from actions to state.
    //ADD_SERVICES(state, payload) etc.
  },
  actions: {
    //Here we describe the actions into which the data are passed, then we make commit mutations.
    //addServices({ commit }, payload) etc.
  }
};
