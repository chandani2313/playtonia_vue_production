<template>
  <div class="admin" v-if="lobby">
    <h3>Match Player Details </h3>
        <!-- <table v-if="lobby.event_data !== 'RAINBOW 6 SIEGE WEEKLY QUALIFIERS 3'">
          <tr>
            <th>Team Name</th>
            <th>Team Alias</th>
            <th>Username</th>
            <th>Phone Number</th>
            <th>Team Phone Number</th>
            <th>MLBB Id</th>
            <th>MLBB Ign</th>
            <th>DISCORD</th>
          </tr>
          <tr v-for="c in csv" :key="c.username">
          <td>{{c.team_name}}</td>
          <td>{{c.team_alias}}</td>
          <td>{{c.username}}</td>
          <td>{{c.phone}}</td>
          <td>{{c.team_phone}}</td>
          <td>{{c.mlbb_id}}</td>
           <td>{{c.mlbb_ign}}</td>
           <td>{{c.discord}}</td>
          </tr>
        </table> -->
        <table v-if="lobby.event_data === 'The Royal Gemilang Cup'" >
          <tr>
            <th>Team Name</th>
            <th>Team Alias</th>
            <th>Username</th>
            <th>Phone Number</th>
            <th>Team Phone Number</th>
            <th>R6 Id</th>
          </tr>
          <tr v-for="c in csv" :key="c.username">
          <td>{{c.team_name}}</td>
          <td>{{c.team_alias}}</td>
          <td>{{c.username}}</td>
          <td>{{c.phone}}</td>
          <td>{{c.team_phone}}</td>
          <td>{{c.r6_id}}</td>
          </tr>
        </table>
      <br>
      <h3>start / stop match</h3>
        <div class="brn__erapper">
            <button class="btn" @click="Match('start')">START</button>
            <button class="btn stop" @click="Match('stop')">STOP</button>
        </div>
      <br>
      <h3>refresh lobby</h3>
        <div class="brn__erapper">
            <button class="btn" @click="Refresh('start')">REFRESH</button>
        </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
// @ is an alias to /src

export default {
  name: 'Admin',
  data() {
    return {
      csv: null,
    };
  },
  components: {
  },
  computed: {
     ...mapGetters({
        lobby: 'lobby/lobby',
    }),
  },
  methods: {
      Match(data) {
        this.$dialog
        .confirm(data.concat(' match ?'))
        .then(() => {
          axios
          .post('/lobby/change_lobby_status', {
              lobby_id: this.$route.params.lobby_id,
              status: data,
          })
          .then((response) => {
              if (response.status === 200) {
               this.$notify({
                title: 'Success.',
                group: 'notifications',
            });
              }
          })
          .catch(() => {
              this.$notify({
                type: 'warn',
                title: 'Warning.',
                group: 'notifications',
                text: 'Something went wrong try again.',
            });
          });
        })
        .catch(() => {
          this.$notify({
                  type: 'warn',
                  title: 'Warning.',
                  group: 'notifications',
                  text: 'Cancelled',
              });
        });
      },
      Csv() {
        axios
        .post('/lobby/player_details', {
            lobby_id: this.$route.params.lobby_id,
        })
        .then((response) => {
            if (response.status === 200) {
              this.csv = response.data;
            }
        })
        .catch(() => {
            this.$notify({
                type: 'warn',
                title: 'Warning.',
                group: 'notifications',
                text: 'Something went wrong try again.',
            });
        });
      },
      Refresh() {
        axios
        .post('/lobby/lobby_refresh', {
            lobby_id: this.$route.params.lobby_id,
        })
        .then((response) => {
            if (response.status === 200) {
              this.$notify({
                    group: 'notifications',
                    title: 'Success.',
                    text: 'Refreshed Successfully',
                });
            }
        })
        .catch(() => {
            this.$notify({
                group: 'notifications',
                type: 'warn',
                title: 'warning.',
            });
        });
      },
  },
  mounted() {
    this.Csv();
  },
};
</script>

<style scoped>
.brn__erapper{
    width: 48%;
    margin: auto;
    display: flex;
}
.admin{
  padding: 20px;
  text-align: center;
}
.stop{
    background: linear-gradient(90deg,red,red) !important;
}
.btn{
    background: linear-gradient(90deg,#1b8fe4,#2e88ef);
    width: 33%;
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  color: white;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

</style>
