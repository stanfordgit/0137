import { createStore } from 'vuex';
import user from './modules/user.store';
import reviews from './modules/reviews.store';
import services from './modules/services.store';

export default createStore({
  modules: { user, reviews, services }
});
