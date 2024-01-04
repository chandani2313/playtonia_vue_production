const Game = (state) => state.game || localStorage.getItem('GAME');
export default {
  Game,
};
