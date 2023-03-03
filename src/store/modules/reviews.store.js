export default {
  state: {
    reviews: [
      {
        id: 1,
        firstname: 'Samuel',
        lastname: 'Jackson',
        date: '2022-04-13',
        comment: `Hey Eva! You're cool. Nice pic!`
      },
      {
        id: 2,
        firstname: 'Angela',
        lastname: 'Deimon',
        date: '2022-04-10',
        comment: `Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.`
      },
      {
        id: 3,
        firstname: 'Ronald',
        lastname: 'Harris',
        date: '2022-04-08',
        comment: `Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?`
      }
    ]
  },
  getters: {
    getReviews(state) {
      return state.reviews;
    }
  },
  mutations: {
    ADD_REVIEW(state, payload) {
      const date = new Date();
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-GB', options);
      const formattedComment = payload == '' ? '-' : payload;
      state.reviews.push({ date: formattedDate, comment: formattedComment });
    }
  },
  actions: {
    addReview({ commit }, payload) {
      commit('ADD_REVIEW', payload);
    }
  }
};
