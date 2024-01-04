<template>
  <div class="team">
      <TopSection v-if="show"  :team_name=team_name :captain=captain :is_member=is_member :team_id=team_id :requested=requested @searchteam="SearchTeam()"  />
      <div class="bottom-container">
        <div class="bottom-wrap">
          <div class="nav">
            <div class="nav-links" v-if="show">
              <!-- <router-link data-animation="ripple"  tag="a" :to="{ name: 'Overview' ,params: {username: username}}"  active-class="active" exact>overview</router-link> -->
              <router-link data-animation="ripple"  tag="a" :to="{ name: 'Members' ,params: {alias: team_alias}}"  active-class="active" exact>members</router-link>
              <router-link data-animation="ripple"  tag="a" :to="{ name: 'MatchTeam' ,params: {alias: team_alias}}"  active-class="active" exact>match</router-link>
              <router-link v-if="captain" data-animation="ripple"  tag="a" :to="{ name: 'EditTeam' ,params: {alias: team_alias}}"  active-class="active" exact>Settings</router-link>
              <!-- <a data-animation="ripple" class="" href="#">achievement</a>
              <a data-animation="ripple" class="" href="#">referral</a> -->
            </div>
          </div>

          <div class="mob_wrapper_outer">
            <span class="mob_arrow"><i class="fas fa-chevron-left"></i></span>
            <div class="mob_wrapper">
              <ul class="mob_nav" v-if="show">
                <!-- <router-link data-animation="ripple" class="mob_navli" tag="li" :to="{ name: 'Overview' ,params: {username: username}}"  active-class="active" exact><div class="mob_nav_title">overview</div></router-link> -->
                <router-link data-animation="ripple" class="mob_navli" tag="li" :to="{ name: 'Members' ,params: {alias: team_alias}}"  active-class="active" exact><div class="mob_nav_title">members</div></router-link>
                <li class="mob_navli"><div class="mob_nav_title">match</div></li>
                <!-- <li class="mob_navli"><div class="mob_nav_title">achievement</div></li>
                <li class="mob_navli"><div class="mob_nav_title">referral</div></li> -->
              </ul>
            </div>
            <span class="mob_arrow"><i class="fas fa-chevron-right"></i></span>
          </div>

          <router-view v-if="show" ></router-view>

        </div>
      </div>
      <Invite :t_alias=team_alias v-if="search_team" @searchteam="SearchTeam()" @nonmembers="nonmembers()"  />
      <NewInvite :team_id=team_id v-if="new_invite" @nonmembers="nonmembers()"   />
      <notifications position="bottom right" group="team_notification" />
  </div>
</template>
<script>
// @ is an alias to /src
import axios from 'axios';
import Invite from '../components/team/Invite.vue';
import NewInvite from '../components/team/NewInvite.vue';
import TopSection from '../components/team/TopSection.vue';

export default {
  name: 'Team',
  data() {
    return {
        team_name: null,
        team_alias: null,
        show: false,
        captain: false,
        search_team: false,
        team_id: null,
        requested: null,
        is_member: null,
        new_invite: false,
    };
  },
  components: {
      TopSection,
      Invite,
      NewInvite,
  },
  methods: {
      Team() {
        this.$Progress.start();
        axios
        .get('/team/'.concat(this.$route.params.alias))
        .then((response) => {
            if (response.status === 200) {
              this.team_name = response.data.team_name;
              this.team_alias = response.data.team_alias;
              this.show = true;
              this.captain = response.data.captain;
              this.team_id = response.data.id;
              this.requested = response.data.join_requested;
              this.is_member = response.data.is_member;
              this.$Progress.finish();
              this.$store.dispatch('team/Team', response.data);
            }
        })
        .catch((e) => {
            if (e.response.status === 400) {
                this.$router.push('/');
            }
        });
      },
      SearchTeam() {
          if (this.search_team === false) {
              this.search_team = true;
          } else {
              this.search_team = false;
          }
      },
      nonmembers() {
        this.search_team = false;
        if (this.new_invite === false) {
              this.new_invite = true;
        } else {
            this.new_invite = false;
        }
      },
  },
  mounted() {
      this.Team();
  },
};
</script>

<style scoped>

.bottom-container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}
.bottom-wrap {
    padding: 20px 16px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
}
.nav {
    background-color: #1b2731;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: 20px;
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
}
.nav > .nav-links {
  display: flex;
  font-size: 16px;
}
.nav > .nav-links > a {
  padding: 20px 10px;
  text-decoration: none;
  color: #ffffff82;
  display: flex;
  justify-content: space-evenly;
  /* width: 20%; */
  width: 100%;
  text-transform: uppercase;
  position: relative;
  transition: 0.5s ease;
}
.nav > .nav-links > a::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background-color: transparent;
    transition: 0.5s ease;
    width: 0;
}
.nav > .nav-links > a:hover::after {
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    width: 100%;
}
.nav > .nav-links > .active {
  color:#fff;
  /* background: #111c25; */
  /* box-shadow: inset 0px -10px 15px 1px #000000d4; */
}
.nav > .nav-links > .active:after{
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    width: 100%;
}
.nav > .nav-links > a:hover {
    color:#fff;
}
.nav > .nav-links > a:before{
    content: "";
    position: absolute;
    top: 5px;
    width: 1px;
    background-color: #2a2d30;
    -webkit-box-shadow: 1px 0 0 #000000;
    box-shadow: 1px 0 0 #000000;
    height: calc(100% - 10px);
    right:0px;
}
.nav > .nav-links > a:last-child:before{
    display: none;
}
.mob_wrapper_outer {
  display: none;
}
.mob_wrapper_outer {
  display: none;
}
.bottom-wrap-first {
    width: 63.5%;
}
@media (min-width: 320px) and (max-width: 767px) {
  .nav{
    display: none;
  }
  .mob_wrapper_outer{
    margin-bottom: 20px;
    display: flex;
    border-radius: 4px;
    border: 2px solid #181f25;
    width: 100%;
  }
  .mob_arrow {
    display: block;
    width: 88px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: #111c25;
    font-weight: bold;
    cursor: pointer;
    box-shadow: inset 0 20px 4px -21px rgba(113, 113, 113, 0.4), 0 19px 13px 0 rgba(0, 0, 0, 0.50);
  }
  .mob_arrow:first-of-type {
    border-radius: 4px 0 0 4px;
  }
  .mob_arrow:nth-of-type(2) {
    border-radius: 0 4px 4px 0;
  }
  .mob_arrow:hover{
    box-shadow: 1px 5px 14px -21px transparent, 20px 0px 20px 0 rgba(0,0,0,0.3), 4px 0px 20px 2px rgba(0,0,0,0.4);
    text-shadow: 1px 0px #423838;
  }
  .mob_wrapper_outer{
    margin-bottom: 20px;
    display: flex;
    border-radius: 4px;
    border: 2px solid #181f25;
    width: 100%;
  }
  .mob_wrapper {
    display: block;
    width: 100%;
    height: 60px;
    background-color: #1b2731;
    box-shadow: inset 0px 0px 15px 0px #000000d4;
    overflow: hidden;
    position: relative;
    color:#fff;
  }
  .mob_nav {
    width: auto;
    height: 60px;
    overflow: hidden;
    list-style-type: none;
    white-space: nowrap;
    transition: 2.0s;
    margin: 0;
    padding: 0;
  }
  .mob_nav li {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
  .bottom-wrap-first,.bottom-wrap-second{
    width: 100%;
  }
}
</style>
