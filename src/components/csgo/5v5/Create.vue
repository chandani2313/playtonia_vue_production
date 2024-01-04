<template>
  <div class="pubgm_details">
      <div class="modal__wrapper">
            <div class="table__wrapper animated zoomIn">
                <div class="table__header">
                    <div class="backdrop">
                    <div class="heading">CSGO 5V5 LOBBY CREATION</div>
                    <div class="close" @click="toggle()" >X</div>
                    </div>
                </div>
                <div class="table__body">
                    <form novalidate>
                        <div class="input-wrapper">
                            <select v-model="tournament_id" @change="GetData()">
                                <option>Select a tournament</option>
                                <option v-for="tournament in tournaments" :value="tournament.id" :key="tournament.id">{{tournament.tournament_name}} </option>
                            </select>
                            <div class='validator error'  ></div>
                        </div>
                        <div class="input-wrapper" v-if="game_servers">
                            <select v-model="game_server_id" >
                                <option>Select a server</option>
                                <option v-for="game_server in game_servers.servers" :value="game_server.id" :key="game_server.id">{{game_server.server_name}} </option>
                            </select>
                            <div class='validator error'  ></div>
                        </div>
                        <div class="input-wrapper" v-if="game_server_id">
                            <select v-model="game_mode"  @change="GeTeam()">
                                <option>GAME MODE</option>
                                <option value="1">1V1</option>
                                <option value="2">2V2</option>
                                <option value="3">3V3</option>
                                <option value="4">4V4</option>
                                <option value="5">5V5</option>
                            </select>
                            <div class='validator error'  ></div>
                        </div>
                        <div class="input-wrapper" v-if="game_mode"  >
                            <input type="number"  v-model="max_round" placeholder="Rounds"  required/>
                        </div>
                         <div class="input-wrapper" v-if="teams">
                            <select  v-model="team_1" >
                                <option>Team 1</option>
                                <option v-for="team in teams.participants" :value="team.team_id" :key="team.team_id">{{team.team_name}} </option>
                            </select>
                            <div class='validator error'  ></div>
                        </div>
                        <div class="input-wrapper" v-if="team_1">
                            <select v-model="team_2" >
                                <option>Team 2</option>
                                <option v-for="team in teams.participants" :value="team.team_id" :key="team.team_id">{{team.team_name}} </option>
                            </select>
                            <div class='validator error'  ></div>
                        </div>
                        <div class="input-wrapper" v-if="team_2" >
                            <input type="number" v-model="spectator_id" placeholder="Spectator Steam Id"  required/>
                        </div>
                         <div class="input-wrapper"  v-if="spectator_id">
                            <input type="datetime-local" v-model="match_time" placeholder="Match Start Time"  required/>
                        </div>
                        <div class="input-wrapper" v-if="spectator_id"  >
                            <select v-model="series_type" @change="GeTserver()" >
                                <option>SERIES TYPE</option>
                                <option value="1"> Bo1 with map vetoes</option>
                                <option value="2"> Bo2 with map vetoes</option>
                                <option value="3"> Bo3 with map vetoes</option>
                                <option value="4"> Bo5 with map vetoes</option>
                                <option value="5"> Bo7 with map vetoes</option>
                            </select>
                            <div class='validator error'  ></div>
                        </div>
                        <div v-if="series_type">
                            <div class="input-wrapper grid" v-for="map in map_list" :key="map.map_name" >
                                <label>{{map.map_name}}</label>
                                <input   type="checkbox" v-model="map_pool" :value="map.map_workshop_id"   required/>
                            </div>
                        </div>
                        <button class="btn" @click.prevent="SaveData()" >SAVE</button>
                    </form>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'create_team',
  data() {
    return {
        tournaments: '',
        tournament_id: null,
        game_servers: null,
        game_server_id: null,
        game_mode: null,
        max_round: null,
        teams: null,
        team_1: null,
        team_2: null,
        spectator_id: null,
        series_type: null,
        map_pool: [],
        match_time: null,
        map_list: null,
    };
  },
  props: ['game'],
  methods: {
        toggle() {
            this.$store.dispatch('csgo/create');
        },
      TOurnaments() {
          axios.get('/csgo/1v1/all_tournament')
            .then((response) => {
                this.tournaments = response.data;
            })
            .catch((e) => {
                if (e.response.status === 400) {
                    this.$notify({
                        type: 'warn',
                        title: 'Warning.',
                        group: 'notifications',
                        text: 'Something went wrong try again.',
                    });
                }
            });
      },
      GeTeam() {
          axios.post('/csgo/1v1/teams_tournament', {
              tournament_id: this.tournament_id,
          })
            .then((response) => {
                this.teams = response.data;
            })
            .catch((e) => {
                if (e.response.status === 400) {
                    this.$notify({
                        type: 'warn',
                        title: 'Warning.',
                        group: 'notifications',
                        text: 'Something went wrong try again.',
                    });
                }
            });
      },
      GeTserver() {
          axios.get('/tournament/game_maps')
            .then((response) => {
                this.map_list = response.data;
            })
            .catch((e) => {
               if (e.response.status === 400) {
                    this.$notify({
                        type: 'warn',
                        title: 'Warning.',
                        group: 'notifications',
                        text: 'Something went wrong try again.',
                    });
                }
            });
      },
      GetData() {
          axios.post('/csgo/1v1/game_servers', {
              tournament_id: this.tournament_id,
          })
            .then((response) => {
                this.game_servers = response.data;
            })
            .catch((e) => {
                if (e.response.status === 400) {
                    this.$notify({
                        type: 'warn',
                        title: 'Warning.',
                        group: 'notifications',
                        text: 'Something went wrong try again.',
                    });
                }
            });
      },
      SaveData() {
          axios.post('/csgo/5v5/create_lobby', {
                tournament_id: this.tournament_id,
                server_id: this.game_server_id,
                game_mode: this.game_mode,
                max_rounds: this.max_round,
                team_1: this.team_1,
                team_2: this.team_2,
                spectator_id: this.spectator_id,
                series_type: this.series_type,
                map_list: this.map_pool,
                match_start_time: this.match_time,
          })
            .then((response) => {
                if (response.status === 201) {
                    this.$notify({
                        type: 'success',
                        title: 'Success.',
                        group: 'notifications',
                    });
                    this.toggle();
                    this.$router.push({ name: 'Cs5v5Lobby', params: { lobby_id: response.data.lobby_id } });
                }
            })
            .catch((e) => {
                if (e.response.status === 400) {
                    this.$notify({
                        type: 'warn',
                        title: 'Warning.',
                        group: 'notifications',
                        text: 'Something went wrong try again.',
                    });
                }
            });
      },
  },
  mounted() {
      this.TOurnaments();
      this.GeTserver();
  },
};
</script>


<style scoped>
form{
    width: 90%;
}
.input-wrapper span {
    padding: 4px;
}
.result{
    padding: 21px;
    height: 200px;
    background: #00000061;
    margin-top: 16px;
    border-radius: 12px;
    overflow: auto;
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
   margin-top: 10px;
   margin-bottom: 10px;
}
.close{
    margin-right: 22px;
    font-size: 20px;
    color: white;
    font-weight: 400;
    cursor: pointer;
}
.phone__wrap input:valid{
    border: 2px solid #1b8fe4 !important;
}
label{
    font-size: 12px;
    color: #848484;
    padding: 10px;
    font-weight: 700;
}
select{
    padding: 14px;
    width: -webkit-fill-available;
    background: #111e2a;
    outline: none;
    border: none;
    color: white;
    border-radius: 10px;
    -webkit-appearance: none;
}
.formphonenumber_code{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 40%;
    margin-right: 20px;
}
.formphonenumber_code::before, .formphonenumber_code::after {
    content: "";
    position: absolute;
    pointer-events: none;
}
.formphonenumber_code::before {
    width: 25px;
    height: 43px;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0 3px 3px 0;
}
.formphonenumber_code::before {
    background-color: rgba(0,0,0,.15);
}
.formphonenumber_code::after {
    color: #6c829d;
    content: "\25BC";
    height: 1em;
    font-size: .625em;
    line-height: 1;
    right: 7.5px;
    top: 16px;
}
.select_dropdown{
    position: relative;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.select_dropdown::before, .select_dropdown::after {
    content: "";
    position: absolute;
    pointer-events: none;
}
.select_dropdown::before {
    width: 25px;
    height: 43px;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0 12px 12px 0;
}
.select_dropdown::before {
    background-color: rgba(0,0,0,.15);
}
.select_dropdown::after {
    color: #6c829d;
    content: "\25BC";
    height: 1em;
    font-size: .325em;
    line-height: 1;
    right: 7.5px;
    top: 16px;
}
.phone__wrap{
    width: -webkit-fill-available;
    display: flex;
    flex-direction: row;
    margin-top: 18px;
}
.phone__wrap select{
    width: 100%;
}
.modal__wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000073;
    z-index: 3;
}
.modal__wrapper .table__wrapper{
    width: 480px;
    background: #1b2731;
    border-radius: 10px;
    box-shadow: -6px 7px 20px 3px rgba(0,0,0,.16);
    margin: 90px auto;
}
.table__wrapper .table__header{
    width: 100%;
    height: 65px;
    border-top-right-radius: 10px;
    display: flex;
    align-items: center;
    border-top-left-radius: 10px;
    /* background-image: url('../../assets/img/table__img.png'); */
    background-repeat: no-repeat;
    background-position: right;
    position: relative;
}
.table__header .heading{
    width: fit-content;
    color: white;
    font-weight: 700;
    margin-left: 18px;
    font-size: 13px;
    display: flex;
    align-items: center;
    height: 100%;
}
.table__wrapper .table__body{
    display: flex;
    padding: 13px;
    flex-direction: column;
    color: white;
    align-items: center;
    overflow: auto;
    max-height: 500px;
}
.table__header .backdrop{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    z-index: 2;
    background: #111c25e0;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 100%;
    justify-content: space-between;
}
.table__body .input-wrapper{
  width: 100%;
  position: relative;
  /* margin-top: 10px; */
  /* margin-bottom: 17px; */
}
.table__body form input {
  border: 2px solid #364444;
  padding: 12px;
  border-radius: 11px;
  background: transparent;
  outline: none;
  color: white;
  box-shadow: 5px 10px 20px #141f28;
  width: -webkit-fill-available;
  font-weight: 700;
}
#border_reset{
    border: 2px solid #364444 ;
}
.table__body .floating-label{
  position: absolute;
  font-size: 10px;
  top: 25px;
  font-weight: 700;
  left: 15px;
  color: #848484;
  pointer-events: none;
  transition: 0.2s ease all;
}
.table__body form input:valid {
  border: 2px solid #1b8fe4;
}
.err{
  border: 2px solid red!important;
}
.err_text{
  color: red !important;
}
.error {
    font-size: 11px;
    padding: 8px;
    color: red !important;
}
.table__body form input:valid~ .floating-label {
  color: #1b8fe4;
}
input:focus ~ .floating-label,input:not(:focus):valid ~ .floating-label{
  top: 5px;
  left: 20px;
  background: #192632;
  padding: 6px;
  font-size: 10px;
}
.table__body form input:focus {
  border: 2px solid #1b8fe4 !important;
}
.table__body form input:focus ~ .floating-label {
  color: #1b8fe4;
}
.btn{
    background: linear-gradient(90deg,#1b8fe4,#2e88ef);
    width: 100%;
    padding: 11px;
    outline: none;
    border-radius: 5px;
    border-style: none;
    margin: 15px auto;
    cursor: pointer;
    box-shadow: 5px 10px 20px #141f28;
    color: white;
    font-weight: 600;
}
.btn:hover{
    box-shadow: 0px 0px 10px 0px #2e88ef;
    transform: translateY(-2px);
    transition-duration: .5s;
}
@media (min-width: 320px) and (max-width: 480px) {
    .modal__wrapper .table__wrapper{
        width: 90%;
        margin: 115px auto;
    }
}
</style>
