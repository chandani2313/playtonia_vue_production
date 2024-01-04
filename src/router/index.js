import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Terms from '../views/landing/Terms.vue';
import Privacy from '../views/landing/Privacy.vue';
import AuthMobile from '../views/AuthMobile.vue';
import Dashboard from '../views/Dashboard.vue';
import Lobby from '../views/Lobby.vue';
import CsLobby from '../views/csgo/1v1/Lobby.vue';
import Cs5v5Lobby from '../views/csgo/5v5/Lobby.vue';
import CsOverview from '../components/csgo/1v1/Overview.vue';
import Cs5v5Overview from '../components/csgo/5v5/Overview.vue';
import Cs5v5Scorecard from '../components/csgo/5v5/Scorecard.vue';
import Cs5v5Admin from '../components/csgo/5v5/Admin.vue';
import Razer from '../views/Razer.vue';
import Profile from '../views/Profile.vue';
import AllLobby from '../views/AllLobby.vue';
import AllTeams from '../views/AllTeams.vue';
// import Overview from '../components/profile/Overview.vue';
import Teams from '../components/profile/Teams.vue';
import Match from '../components/profile/Match.vue';
// import Edit from '../components/profile/Edit.vue';
import EditProfile from '../components/profile/EditProfile.vue';
import Basic from '../components/profile/edit/Basic.vue';
import Game from '../components/profile/edit/Game.vue';
// import Games from '../components/profile/Games.vue';
import Team from '../views/Team.vue';
import Members from '../components/team/Members.vue';
import MatchTeam from '../components/team/Match.vue';
import EditTeam from '../components/team/EditTeam.vue';
import Rooster from '../components/team/edit/Rooster.vue';
import TeamDetails from '../components/team/edit/Basic.vue';
import AcceptInvite from '../components/team/AcceptInvite.vue';
import Tournament from '../views/Tournament.vue';
import PTournament from '../views/public/Tournament.vue';
import TOverview from '../components/tournament/Overview.vue';
import Info from '../components/tournament/Info.vue';
import Brackets from '../components/tournament/Brackets.vue';
import Schedule from '../components/tournament/Schedule.vue';
import Participants from '../components/tournament/Participants.vue';
import Prize from '../components/tournament/Prize.vue';
import AllTournament from '../components/tournament/AllTournament.vue';
import NAllTournament from '../components/tournament/all_tournaments/AllTournament.vue';
import Upcoming from '../components/tournament/all_tournaments/Upcoming.vue';
import Ongoing from '../components/tournament/all_tournaments/Ongoing.vue';
import Completed from '../components/tournament/all_tournaments/Completed.vue';
import PAllTournament from '../views/public/AllTournament.vue';
import LobbyOverview from '../components/lobby/Overview.vue';
import Admin from '../components/lobby/Admin.vue';
import MatchControl from '../components/lobby/MatchControl.vue';
import Stats from '../components/lobby/Stats.vue';
import PNAllTournament from '../views/public/all_tournaments/AllTournament.vue';
import PUpcoming from '../views/public/all_tournaments/Upcoming.vue';
import POngoing from '../views/public/all_tournaments/Ongoing.vue';
import PCompleted from '../views/public/all_tournaments/Completed.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'no-sidebar' },
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms,
    meta: { layout: 'no-sidebar', title: 'Terms and Conditions' },
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
    meta: { layout: 'no-sidebar', title: 'Privacy Policy' },
  },
  {
    path: '/mobile/auth',
    name: 'AuthMobile',
    component: AuthMobile,
    meta: { layout: 'no-footer', title: 'Register | Login' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true, title: 'Dashboard' },
  },
  {
    path: '/razer',
    name: 'Razer',
    component: Razer,
    meta: { requiresAuth: true, title: 'Razer Id' },
  },
  {
    path: '/profile/:username',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true, title: 'Profile' },
    redirect: { name: 'Teams' },
    children: [
      // {
      //   path: '',
      //   name: 'Overview',
      //   component: Overview,
      // },
      {
        path: 'teams',
        name: 'Teams',
        component: Teams,
      },
      {
        path: 'edit',
        name: 'EditProfile',
        component: EditProfile,
        redirect: { name: 'Basic' },
        children: [
          {
            path: '',
            name: 'Basic',
            component: Basic,
          },
          {
            path: 'game',
            name: 'Game',
            component: Game,
          },
        ],
      },
      {
        path: 'match',
        name: 'Match',
        component: Match,
      },
    ],
  },
  {
    path: '/team/:alias',
    name: 'Team',
    component: Team,
    redirect: { name: 'Members' },
    meta: { requiresAuth: true, title: 'Team' },
    children: [
      {
        path: 'members',
        name: 'Members',
        component: Members,
      },
      {
        path: 'match',
        name: 'MatchTeam',
        component: MatchTeam,
      },
      {
        path: 'join',
        name: 'AcceptInvite',
        component: AcceptInvite,
      },
      {
        path: 'editteam',
        name: 'EditTeam',
        component: EditTeam,
        redirect: { name: 'TeamDetails' },
        children: [
          {
            path: '',
            name: 'TeamDetails',
            component: TeamDetails,
          },
          {
            path: 'rooster',
            name: 'Rooster',
            component: Rooster,
          },
        ],
      },
    ],
  },
  {
    path: '/tournaments/:game?',
    name: 'AllTournament',
    component: AllTournament,
    redirect: { name: 'Upcoming' },
    meta: { requiresAuth: true, title: 'All Tournament' },
    children: [
      {
        path: '',
        name: 'Upcoming',
        component: Upcoming,
      },
      {
        path: 'all',
        name: 'NAllTournament',
        component: NAllTournament,
      },
      {
        path: 'ongoing',
        name: 'Ongoing',
        component: Ongoing,
      },
      {
        path: 'completed',
        name: 'Completed',
        component: Completed,
      },
    ],
  },
  {
    path: '/public/tournaments/:game?',
    name: 'PAllTournament',
    component: PAllTournament,
    redirect: { name: 'PUpcoming' },
    meta: { requiresAuth: false, title: 'All Tournament', layout: 'no-sidebar' },
    children: [
      {
        path: '',
        name: 'PUpcoming',
        component: PUpcoming,
        meta: { requiresAuth: false, layout: 'no-sidebar' },
      },
      {
        path: 'all',
        name: 'PNAllTournament',
        component: PNAllTournament,
        meta: { requiresAuth: false, layout: 'no-sidebar' },
      },
      {
        path: 'ongoing',
        name: 'POngoing',
        component: POngoing,
        meta: { requiresAuth: false, layout: 'no-sidebar' },
      },
      {
        path: 'completed',
        name: 'PCompleted',
        component: PCompleted,
        meta: { requiresAuth: false, layout: 'no-sidebar' },
      },
    ],
  },
  {
    path: '/lobbies',
    name: 'AllLobby',
    component: AllLobby,
    meta: { requiresAuth: true, title: 'Lobbies' },
  },
  {
    path: '/teams',
    name: 'AllTeams',
    component: AllTeams,
    meta: { requiresAuth: true, title: 'All Teams' },
  },
  {
    path: '/tournament/:id',
    name: 'Tournament',
    component: Tournament,
    redirect: { name: 'TOverview' },
    meta: { requiresAuth: true, title: 'Tournament' },
    children: [
       {
        path: '',
        name: 'TOverview',
        component: TOverview,
      },
      {
        path: 'info',
        name: 'Info',
        component: Info,
      },
      {
        path: 'brackets',
        name: 'Brackets',
        component: Brackets,
      },
      {
        path: 'schedule',
        name: 'Schedule',
        component: Schedule,
      },
      {
        path: 'participants',
        name: 'Participants',
        component: Participants,
      },
      {
        path: 'prize',
        name: 'Prize',
        component: Prize,
      },
    ],
  },
  {
    path: '/csgo/lobby/:lobby_id',
    name: 'CsLobby',
    component: CsLobby,
    meta: { requiresAuth: true, title: 'Lobby' },
    children: [
      {
        path: '',
        name: 'CsOverview',
        component: CsOverview,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/csgo/5v5/lobby/:lobby_id',
    name: 'Cs5v5Lobby',
    component: Cs5v5Lobby,
    redirect: { name: 'Cs5v5Overview' },
    meta: { requiresAuth: true, title: 'CSGO | Lobby' },
    children: [
      {
        path: '',
        name: 'Cs5v5Overview',
        component: Cs5v5Overview,
        meta: { requiresAuth: true },
      },
      {
        path: 'admin',
        name: 'Cs5v5Admin',
        component: Cs5v5Admin,
        meta: { requiresAuth: true },
      },
      {
        path: 'scorecard',
        name: 'Cs5v5Scorecard',
        component: Cs5v5Scorecard,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/public/tournament/:id',
    name: 'PTournament',
    component: PTournament,
    redirect: { name: 'PTOverview' },
    meta: { requiresAuth: false, title: 'Tournament', layout: 'no-sidebar' },
    children: [
       {
        path: '',
        name: 'PTOverview',
        component: TOverview,
        meta: { requiresAuth: false, layout: 'no-sidebar' },
      },
      {
        path: 'info',
        name: 'PInfo',
        component: Info,
        meta: { requiresAuth: false, layout: 'no-sidebar' },
      },
      {
        path: 'brackets',
        name: 'PBrackets',
        component: Brackets,
        meta: { requiresAuth: false, layout: 'no-sidebar' },
      },
      {
        path: 'schedule',
        name: 'PSchedule',
        component: Schedule,
        meta: { requiresAuth: false, layout: 'no-sidebar' },
      },
      {
        path: 'participants',
        name: 'PParticipants',
        component: Participants,
        meta: { requiresAuth: false, layout: 'no-sidebar' },
      },
      {
        path: 'prize',
        name: 'PPrize',
        component: Prize,
        meta: { requiresAuth: false, layout: 'no-sidebar' },
      },
    ],
  },
  {
    path: '/lobby/:lobby_id',
    name: 'Lobby',
    component: Lobby,
    meta: { requiresAuth: true, title: 'Lobby' },
    redirect: { name: 'LobbyOverview' },
    children: [
      {
        path: '',
        name: 'LobbyOverview',
        component: LobbyOverview,
      },
      {
        path: 'admin',
        name: 'Admin',
        component: Admin,
        redirect: { name: 'MatchControl' },
        children: [
          {
            path: '',
            name: 'MatchControl',
            component: MatchControl,
          },
          {
            path: 'stats',
            name: 'Stats',
            component: Stats,
          },
        ],
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
