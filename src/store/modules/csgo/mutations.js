const lobby = (state, data) => {
  state.lobby = data;
};
const staff = (state, data) => {
  state.staff = data;
};
const create = (state) => {
  if (state.create === true) {
    state.create = false;
  } else {
    state.create = true;
  }
};
export default {
  lobby,
  staff,
  create,
};
