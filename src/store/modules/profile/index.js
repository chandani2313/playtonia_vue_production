import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  Profile: null,
  Username: null,
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
