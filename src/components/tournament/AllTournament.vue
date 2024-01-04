<template>
  <div class="alltournament">
      <div class="section_bottom_wrap">
        <div class="section_bottom_title_wrap">
            <div class="section_bottom_title_wrap_text">GAMES</div>
        </div>
        <Games />
        <div class="nav desktop">
            <div class="nav-links">
                <router-link data-animation="ripple"  tag="a" :to="{ name: 'NAllTournament',params: {game: game} }"  active-class="active" exact>ALL TOURNAMENTS</router-link>
                <router-link data-animation="ripple"   tag="a" :to="{ name: 'Upcoming',params: {game: game} }"  active-class="active" exact>UPCOMING</router-link>
                <router-link data-animation="ripple"  tag="a" :to="{ name: 'Ongoing',params: {game: game} }"  active-class="active" exact>ON GOING</router-link>
                <router-link data-animation="ripple"  tag="a" :to="{ name: 'Completed',params: {game: game} }"  active-class="active" exact>COMPLETED</router-link>
            </div>
        </div>
         <div class="nav mobile">
            <div class="nav-links">
                <router-link data-animation="ripple"   tag="a" :to="{ name: 'Upcoming',params: {game: game} }"  active-class="active" exact>UPCOMING</router-link>
                <router-link data-animation="ripple"  tag="a" :to="{ name: 'Ongoing',params: {game: game} }"  active-class="active" exact>ON GOING</router-link>
                <router-link data-animation="ripple"  tag="a" :to="{ name: 'Completed',params: {game: game} }"  active-class="active" exact>COMPLETED</router-link>
            </div>
        </div>
        <!-- <div class="section_bottom_title_wrap">
            <div class="section_bottom_title_wrap_text">TOURNAMENTS</div>
        </div> -->
        <div class="section_bottom_wrap_inner">
            <router-view></router-view>
        </div>
      </div>
  </div>
</template>
<script>
import axios from 'axios';
import Games from './Games.vue';
// @ is an alias to /src

export default {
  name: 'AllTournament',
  data() {
    return {
        tournaments: null,
        hide: false,
        game: null,
    };
  },
  components: {
      Games,
  },
  methods: {
    Tournaments() {
        this.$Progress.start();
        axios
        .get('/tournament/all_tournament')
        .then((response) => {
            if (response.status === 201) {
                if (this.game !== 'all_games') {
                    this.tournaments = response.data
                    .filter((entry) => [entry.game].find((x) => x === this.game));
                    this.$store.dispatch('tournament/Tournaments', this.tournaments);
                    this.$Progress.finish();
                    if (this.$route.name === 'Upcoming') {
                        this.Check();
                    }
                } else {
                    this.tournaments = response.data;
                    this.$store.dispatch('tournament/Tournaments', response.data);
                    this.$Progress.finish();
                    if (this.$route.name === 'Upcoming') {
                        this.Check();
                    }
                }
            }
        })
        .catch((e) => {
            if (e.response.status === 400) {
                this.$router.push('/');
            }
        });
    },
    Check() {
        const data = this.tournaments
        .filter((entry) => [entry.tournament_status.status].find((x) => x === 'upcoming'));
        if (!data.length > 0) {
             this.$router.push({ name: 'NAllTournament', params: { game: this.game } });
        }
    },
  },
  mounted() {
      if (!localStorage.getItem('token')) {
          this.$router.push({ name: 'PAllTournament' });
      }
      this.Tournaments();
      if (!this.$route.params.game) {
          this.game = 'all_games';
      } else {
          this.game = this.$route.params.game;
      }
  },
  watch: {
      '$route.params.game': function () {
            if (!this.$route.params.game) {
                this.game = 'all_games';
            } else {
                this.game = this.$route.params.game;
                this.Tournaments();
            }
      },
  },
};
</script>

<style scoped>
.section_bottom_wrap{
  padding: 10px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.nav {
    background-color: #1b2731;
    /* width: 100%; */
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 3px 2px 20px 3px rgba(0,0,0,.16);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
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
.nav > .nav-links {
  display: flex;
  font-size: 16px;
  width: 100%;
}
.nav > .nav-links > a {
  padding: 18px 20px;
  text-decoration: none;
  color: #ffffff82;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  text-transform: uppercase;
  position: relative;
  /*border-width: 0px;*/
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
    /*background-color: #4facfe;*/
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    width: 100%;
}
.nav > .nav-links > .active {
 color:#fff;
 background: #111c25;
}
.nav > .nav-links > .active:after{
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    /*background-color: #4facfe;*/
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
    /* background-color: #101820; */
    -webkit-box-shadow: 1px 0 0 #000000;
    box-shadow: 1px 0 0 #000000;
    height: calc(100% - 10px);
    right:0px;
}
.mobile{
    display: none;
}
.desktop{
    display: block;
}
@media (min-width: 320px) and (max-width: 767px) {
    .nav{
        width: auto;
    }
    .mobile{
        display: block;
    }
    .desktop{
        display:none;
    }
    .nav > .nav-links {
        font-size: 13px;
    }
}
</style>
