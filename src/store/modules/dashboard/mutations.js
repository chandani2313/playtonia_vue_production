const SelectGame = (state) => {
  state.game = localStorage.getItem('GAME');
};
export default {
  SelectGame,
};
