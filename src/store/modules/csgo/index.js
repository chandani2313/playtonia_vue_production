import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  lobby: null,
  staff: null,
  create: false,
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};