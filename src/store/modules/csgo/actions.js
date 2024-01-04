const lobby = (context, data) => {
  context.commit('lobby', data);
};
const staff = (context, data) => {
  context.commit('staff', data);
};
const create = (context) => {
  context.commit('create');
};
export default {
  lobby,
  staff,
  create,
};
