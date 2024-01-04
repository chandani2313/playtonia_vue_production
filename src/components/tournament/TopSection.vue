<template>
  <div class="topsection">
    <div class="evnt-top-wrap">
      <div class="evt-header" v-if="image" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
        <div class="evt-overlay"></div>
        <div class="evt-gradient"></div>
        <div class="evt-inner">
          <div class="evt-inner-section">
            <div class="evt-logo" >
              <img :src="tournament.tournament_logo_url">
            </div>
            <div class="evt-info">
              <div class="evt-info-name">
                <div class="evt-info-name-title">{{tournament.tournament_name}}</div>
                <div class="evt-info-name-organized">Organized By : Playtonia<span> </span></div>
              </div>
              <div class="evt-info-join" v-if="!tournament.tournament_status.registration_start && tournament.tournament_status.show" >
                <div class="evt-info-join-joinbtn grey" ><span>join now</span></div>
                <div class="evt-info-join-date"> {{tournament.tournament_status.message}}  {{tournament.registration_start  | moment("from", "now")  }}</div>
                <div class="evt-info-join-date"></div>
              </div>
              <div class="evt-info-join" v-if="tournament.tournament_status.registration_start && tournament.tournament_status.show" >
                <div v-if="!tournament.found" class="evt-info-join-joinbtn" @click="Join()" ><span>join now</span></div>
                <div v-if="tournament.found" class="evt-info-join-joinbtn grey"  ><span>JOINED</span></div>
                <div class="evt-info-join-date"> {{tournament.tournament_status.message}} {{tournament.registration_end  | moment("from", "now")  }}</div>
                <div class="evt-info-join-date"></div>
              </div>
              <div class="evt-info-join" v-if="!tournament.tournament_status.registration_start && !tournament.tournament_status.show && !tournament.tournament_status.tournament_end" >
                <div v-if="!tournament.found" class="evt-info-join-joinbtn grey" ><span>On Going</span></div>
                <div class="evt-info-join-date"> {{tournament.tournament_status.message}} {{tournament.tournament_end  | moment("from", "now")  }}</div>
                <div class="evt-info-join-date"></div>
              </div>
               <div class="evt-info-join" v-if="!tournament.tournament_status.registration_start && !tournament.tournament_status.show && tournament.tournament_status.tournament_end" >
                <div class="evt-info-join-joinbtn completed" ><span>Completed</span></div>
                <div class="evt-info-join-date"> {{tournament.tournament_status.message}}  {{tournament.tournament_end | moment("from", "now")  }}</div>
                <div class="evt-info-join-date"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="sponsor__wrapper">
          <div class="sponsor" v-for="sponsor in tournament.sponsors" :key="sponsor.id">
            <img :src="sponsor.sponsor_image"  />
          </div>
        </div>
        <vue-step style="color:white !important;" style-type="style2" class="steps__bar animated slideInUp" active-color="#2e88ef" :now-step="tournament.tournament_steps.step_no" :step-list="tournament.tournament_steps.steps"></vue-step>
      </div>
    </div>
    <PUBGM v-if="game_id && tournament.game  === 'PUBGM'" :game="tournament.game" @close="Close()" @join="Join()" />
    <R6 v-if="game_id && tournament.game  === 'R6'" :game="tournament.game" @close="Close()" @join="Join()" />
    <Phone v-if="phone" :game="tournament.game" @close="Close()" @join="Join()" />
    <Minimum v-if="players" />
    <TeamMinimum v-if="team === 2" :game="tournament.game" />
    <Sponsors v-if="sponsor" @close="Close()" />
    <Join v-if="join_step" :error="error" :error_new="error_new" :tournament="tournament" @close="Close()" @join="Join()" />
  </div>
</template>
<script>
/* eslint-disable */
// @ is an alias to /src
import axios from 'axios';
import Minimum from './Minimum.vue';
import TeamMinimum from './TeamMinimum.vue';
import PUBGM from './gameid/PUBGM.vue';
import Phone from './gameid/Phone.vue';
import R6 from './gameid/R6.vue';
import Sponsors from './Sponsors.vue';
import Join from './gameid/Join.vue';
import vueStep from 'vue-step';
import { mapGetters } from 'vuex';

export default {
  name: 'TopSection',
  data() {
    return {
      error: '',
      success: '',
      game_id: false,
      players: false,
      team: false,
      phone: false,
      sponsor: false,
      image: null,
      join_step: false,
      error_new: '',
    };
  },
  components: {
    Minimum,
    TeamMinimum,
    Phone,
    R6,
    PUBGM,
    Sponsors,
    vueStep,
    Join,
  },
  props: ['tournament'],
  computed: {
    ...mapGetters({
        username: 'profile/Username',
    }),
  },
  methods: {
    Image() {
      if (this.tournament.game === 'MLBB'){
        this.image = require('../../assets/tournament/banner/mlbb.png');
      } else if (this.tournament.game === 'R6'){
        this.image = require('../../assets/tournament/banner/r6.png');
      } else if (this.tournament.game === 'PUBGM'){
        this.image = require('../../assets/tournament/banner/pubg-cover.png');
      } else if (this.tournament.game === 'CODM'){
        this.image = require('../../assets/tournament/banner/cod-cover-1.png');
      } else {
        this.image = require('../../assets/tournament/banner/overviewbg.png');
      }
    },
    Close() {
      if (this.game_id === true){
        this.game_id = false;
      }
      if (this.phone === true){
        this.phone = false;
      }
      if (this.sponsor === true){
        this.sponsor = false;
      }
       if (this.join_step === true){
        this.join_step = false;
      }
    },
    Sock() {
          const vm = this;
            this.connection = new WebSocket('wss://api.playtonia.com/ws/general/'.concat(this.username).concat('/'));
            this.connection.onmessage = function (event) {
                const data = JSON.parse(event.data);
                if (data.message === 'REFRESH') {
                    vm.Close();
                    vm.Join();
                }
                if (data.message === 'DUPLICATE') {
                    vm.error_new = 'The steam account is already linked with different player.';
                }
            };
    },
    Join() {
      this.Sock();
      this.$emit('reload');
      axios
      .post('/tournament/join_tournament', {
        tournament_id: this.$route.params.id,
      })
      .then((response) => {
          if (response.status === 201) {
              this.error = 'completed';
              this.$emit('reload');
               this.$notify({
                    title: 'Success.',
                    group: 'notifications',
                    text: 'Joined Tournament Successfully.',
                });
              this.join_step = false;
          }
      })
      .catch((e) => {
          console.log(e.response.data);
          if (e.response.status === 401) {
            this.$router.push({ name: this.$route.name, query: {  s: 'login' } });
          }
          if (e.response.status === 400) {
            this.join_step = true;
            if (e.response.data.response[0] === 'game_id') {
              this.game_id = true;
            }
            // if (e.response.data.response[0] === 'players_not_found') {
            //   this.players = true;
            // }
            if (e.response.data.response[0] === 'no_team') {
              this.team = true;
            }
            if (e.response.data.response[0] === 'phone') {
              this.phone = true;
            }
            this.error = e.response.data.response[0];
            this.join_step = true;
            if (e.response.data.response[0] === 'country') {
               this.game_id = false;
              this.join_step = false;
              this.$notify({
                  type: 'warn',
                  title: 'Warning.',
                  group: 'notifications',
                  text: 'Only Teams from UAE are allowed to join this tournament.',
              });
            }
          }
      });
    },
  },
  mounted() {
    this.Image();
  },
};
</script>

<style scoped>
.sponsor__wrapper{
  position: absolute;
  top:0;
  right: 0;
  width: 50%;
  display: flex;
  align-items: center;
  background: #0000006b;
  border-bottom-left-radius: 10px;
}
.sponsor__wrapper .sponsor{
  width: 13%;
}
ul{
  color:white !important;
}
.steps__bar{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 55%;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  color:white !important;
  background: #00000038;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.grey{
  background: grey!important;
}
.grey:hover{
  box-shadow: grey!important;
}
.completed{
  background: #77e800!important;
}
.error{
  color: red;
}
.evnt-top-wrap{
  padding: 1.5rem;
}
.evt-header{
    position: relative;
    /* background: #171a20; */
    width: 100%;
    background-size: cover;
    background-position: right;
    border-radius: 10px;
    overflow: hidden;
}
.evt-overlay{
    background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.32), rgb(15, 15, 15)100%);
    position: absolute;
    height: 100%;
    width: 100%;
}
.evt-gradient{
    background-image: url('../../assets/tournament/evt-overlay.png');
    opacity: 1;
    background-size: 2px 2px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.evt-inner{
    width: 100%;
    min-height: 420px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
    position: relative;
    max-width: 1400px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;
    margin: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.evt-inner-section{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
}
.evt-logo{
    width: 200px;
    min-width: 200px;
    background: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
}
.evt-info{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.evt-info-name{
  margin-left: 1.5em;
  align-self: baseline;
}
.evt-info-name-title {
    color: #fff;
    font-size: 30px;
    line-height: 1em;
    margin-bottom: 10px;
    letter-spacing: .8px;
    font-weight: 600;
}
.evt-info-name-organized{
  color: #999;
}
.evt-info-name-organized span{
    font-weight: 800;
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
}
.evt-info-join{
    color: #fff;
    margin: auto;
    text-align: center;
    white-space: nowrap;
}
.evt-info-join-joinbtn {
    margin: auto auto 12px;
    width: max-content;
    padding: 8px 40px;
    font-size: 16px;
    line-height: 1.5em;
    border-radius: 4px;
    color: white;
    background-image: linear-gradient(90deg,#1b8fe4,#2e88ef);
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;
}
.evt-info-join-joinbtn:hover{
    box-shadow: 0px 0px 10px 0px #3CA3F0;
    color: #ffffff;
}
.evt-info-join-date{
    line-height: 1.2rem;
    display: inline-block;
    padding: 5px;
}
@media (min-width: 320px) and (max-width: 767px) {
  .sponsor__wrapper{
    width: 100%;
  }
  .sponsor__wrapper .sponsor{
    width: 20%;
  }
  .steps__bar{
    width: 100%;
    left: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .evnt-top-wrap{
    padding: 0;
  }
  .evt-header{
    border-radius: 0px;
  }
  .evt-inner{
    padding-left: 20px;
    padding-right: 20px;
  }
  .evt-inner-section{
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
  }
  .evt-logo{
    width: 150px;
    height: auto;
    min-width: 150px;
  }
  .evt-info{
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
    margin-top: 12px;
    margin-left: 0;
    margin-right: 0;
  }
  .evt-info-name{
    margin: auto auto 12px;
  }
  .evt-info-name-title {
    text-align: center;
    font-size: 1rem;
  }
  .evt-info-name-organized{
    font-size: 14px;
    text-align: center;
  }
  .evt-info-join-date{
    font-size: 14px;
  }
}
</style>
