export default {
  state: {
    user: {
      firstname: 'Eva',
      lastname: 'Jonson',
      position: 'Sales Manager',
      description: `I will find the best offers for you. My services are absolutely free.`,
      image: require('@/assets/images/profile-image.png')
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    }
  },
  mutations: {
    //Here we describe the mutations that will record the data passed from actions to state.
    //SET_USER(state, payload) etc.
  },
  actions: {
    //Here we describe the actions into which the data are passed, then we make commit mutations.
    //setUser({ commit }, payload) etc.
  }
};
