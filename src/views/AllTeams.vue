<template>
  <div class="lobbies">
      <div class="section_bottom_wrap">
         <div class="section_bottom_title_wrap">
            <div class="section_bottom_title_wrap_text">Teams</div>
            <div class="section_bottom_title_wrap_text flex">
                <router-link  v-if="profile_data"  tag="div" :to="{ name: 'Teams' ,params: {username: profile_data } ,query: { t: 'team'}}"  exact>Create Team</router-link>|
                <router-link  v-if="profile_data"  tag="div" :to="{ name: 'Teams' ,params: {username: profile_data }}"  exact>My Teams</router-link>
            </div>
        </div>
        <div class="section_bottom_wrap_inner">
            <div class="input-wrapper">
                <input v-model="query" placeholder="Search Team..." type="text" @keypress="Search()" />
            </div>
        </div>
        <div class="section_bottom_wrap_inner" v-if="teams && !refresh">
            <TeamCard  v-for="team in teams" :data=team :key="team.id"  />
        </div>
      </div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from 'axios';
import { mapGetters } from 'vuex';
import TeamCard from '../components/team/TeamCard.vue';
// @ is an alias to /src

export default {
  name: 'AllLobby',
  data() {
    return {
        query: '',
        teams: null,
        refresh: false,
    };
  },
  computed: {
    ...mapGetters({
        profile_data: 'profile/Username',
    }),
  },
  components: {
      TeamCard,
  },
  methods: {
      Search() {
        this.$Progress.start();
        axios
        .post('/team/search_team', {
            query: this.query,
        })
        .then((response) => {
            if (response.status === 200) {
                this.teams = null;
                this.refresh = true;
                this.teams = response.data;
                this.refresh = false;
                this.$Progress.finish();
            }
        })
        .catch((e) => {
            if (e.response.status === 400) {
                this.$router.push('/');
            }
        });
      },
  },
  mounted() {
      this.Search();
  },
};
</script>

<style scoped>
.flex{
    display: flex!important;
    justify-content: space-between;
    width: 250px;
}
.input-wrapper input:focus {
  border: 2px solid #1b8fe4;
}
.input-wrapper input {
  border: 2px solid #364444;
  padding: 12px;
  border-radius: 11px;
  background: transparent;
  /* margin-block-end: 12px; */
  outline: none;
  color: white;
  box-shadow: 5px 10px 20px #141f28;
  width: -webkit-fill-available;
  font-weight: 700;
}
.text{
    color: white;
}
.section_bottom_wrap{
  padding: 10px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 110px;
}
.nav {
    background-color: #1b2731;
    padding: 25px;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 3px 2px 20px 3px rgba(0,0,0,.16);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
}
.section_bottom_wrap_inner{
    grid-template-columns: repeat(auto-fill, minmax(319px, 1fr));
    grid-auto-flow: dense;
    display: grid;
    grid-gap: 1rem;
    margin-bottom: 1rem;
}
.section_bottom_title_wrap {
    display: flex;
    border-bottom: 2px solid #ffffff0f;
    padding-bottom: 14px;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
}
.section_bottom_title_wrap_text {
    cursor: pointer;
    position: relative;
    font-size: 16px;
    text-transform: uppercase;
    color: white;
    display: inline-block;
    /*padding: 0 20px;*/
    font-weight: 600;
}
.section_bottom_title_wrap_text:before {
    content: "";
    position: absolute;
    bottom: -16px;
    height: 2px;
    width: 100%;
    left: 0;
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    box-shadow: 0 0 9px #009fd1c7;
}
@media (min-width: 320px) and (max-width: 767px) {
    .nav{
        width: auto;
    }
}
</style>
