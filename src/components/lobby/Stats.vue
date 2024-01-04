<template>
  <div class="stats" v-if="lobby">
    <div class="form" v-for="(index,i) in lobby.score.overall_score.max_maps" :key="i">
        <h2 v-if="i === 0">Match {{index}} Score</h2>
        <form novalidate v-if="i === 0">
            <div class="input-wrapper">
                <input type="number" required  v-model="team_1_1" />
                <span class="floating-label"  >TEAM 1 SCORE</span>
            </div>
             <div class="input-wrapper">
                <input type="number"  required v-model="team_2_1" />
                <span class="floating-label">TEAM 2 SCORE</span>
            </div>
             <div class="input-wrapper">
                <span style="color:white;">Match completed </span>
                <input type="checkbox" v-model="match_complete" required value="true" />
            </div>
            <button class="btn" @click.prevent="Save(0)" >SAVE</button>
        </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
// @ is an alias to /src

export default {
  name: 'Stats',
  data() {
    return {
        team_1_1: null,
        team_2_1: null,
        match_complete: null,
    };
  },
  components: {
  },
  computed: {
    ...mapGetters({
        lobby: 'lobby/lobby',
        staff: 'lobby/staff',
    }),
  },
  methods: {
      Save(data) {
        axios
        .post('/lobby/lobby_score_update', {
            lobby_id: this.$route.params.lobby_id,
            team1_score: this.team_1_1,
            team2_score: this.team_2_1,
            map_id: data,
            match_complete_status: true,
        })
        .then((response) => {
            if (response.status === 200) {
                this.$notify({
                    group: 'notifications',
                    title: 'Success.',
                    text: 'Saved Successfully',
                });
            }
        })
        .catch(() => {
            this.$notify({
                type: 'warn',
                group: 'notifications',
                title: 'WARNING.',
                text: 'Contact Admin',
            });
        });
      },
      Default() {
          if (this.lobby) {
              this.team_1_1 = Object.values(this.lobby.score.map_wise.t1_score);
              this.team_2_1 = this.lobby.score.overall_score.t2_score;
          }
      },
  },
};
</script>

<style scoped>
.stats{
    padding: 10px;
    text-align: center;
    width: 55%;
    margin: auto;
}
.error{
    color: red !important;
}
.err{
    border: 2px solid red!important;
}
.options{
  display:flex;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  color: rgba(219,219,232,.4);
  cursor: pointer;
}

.fas{
  font-size: 20px;
}

.validator{
  padding: 4px 10px;
  display: flex;
  margin-bottom: 10px;
  font-size: 12px;
  color: rgba(219,219,232,.4);
}

.wrapper{
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #192632;
    box-shadow: 5px 7px 6px rgba(0,0,0,.16);
    border-radius: 11px;
}

.wrapper img {
    width: 60%;
}
.form{
    width: 100%;
    margin-top: 16px;
    height: 100%;
}
.form .input-wrapper{
  width: 89%;
  position: relative;
  margin-top: 20px;
}
.form form{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.form form input {
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
.form .floating-label{
  position: absolute;
  font-size: 10px;
  top: 16px;
  font-weight: 700;
  left: 15px;
  color: rgba(219,219,232,.4);
  pointer-events: none;
  transition: 0.2s ease all;
}
.form form input:valid {
  border: 2px solid #1b8fe4;
}
.form form input:valid~ .floating-label {
  color: #1b8fe4;
}
input:focus ~ .floating-label,input:not(:focus):valid ~ .floating-label{
  top: -11px;
  left: 20px;
  background: #192632;
  padding: 6px;
  font-size: 10px;
}
.form form input:focus {
  border: 2px solid #1b8fe4;
}
.form form input:focus ~ .floating-label {
  color: #1b8fe4;
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
@media (min-width: 320px) and (max-width: 767px) {
  .wrapper{
    width: 90%;
  }
  .form .input-wrapper{
    width: 88%;
  }
}

</style>
