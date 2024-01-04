import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './modules/auth';
import Dashboard from './modules/dashboard';
import Profile from './modules/profile';
import Team from './modules/team';
import Lobby from './modules/lobby';
import Csgo from './modules/csgo';
import Tournament from './modules/tournament';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: Auth,
    dashboard: Dashboard,
    profile: Profile,
    team: Team,
    lobby: Lobby,
    tournament: Tournament,
    csgo: Csgo,
  },
});
