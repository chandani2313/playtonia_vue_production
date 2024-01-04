const lobby = (context, data) => {
  context.commit('lobby', data);
};
const staff = (context, data) => {
  context.commit('staff', data);
};
export default {
  lobby,
  staff,
};
