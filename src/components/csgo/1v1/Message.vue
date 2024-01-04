<template>
    <div class="message" v-if="lobby">
      <div class="message__box background">
        <div class="content__wrapper">
          <div class="content"> TOURNAMENT TYPE: {{lobby.tournament.tournament_type}} V {{lobby.tournament.tournament_type}}</div>
          <div class="content"> <span>MATCH STATUS</span> <span>:</span> <span>{{Status}}</span> </div>
          <div class="content"> <span>TOTAL ROUNDS</span> <span>:</span> <span>{{lobby.max_rounds}}</span> </div>
           <div class="content"> <span>REGION</span> <span>:</span> <span>{{lobby.game_server.server_location}}</span> </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
// @ is an alias to /src

export default {
  name: 'Message',
  data() {
    return {
    };
  },
  components: {
  },
  computed: {
    ...mapGetters({
        lobby: 'csgo/lobby',
    }),
    Status() {
      let Stat = '';
      if (this.lobby.status === 'match_cancelled') {
        Stat = 'MATCH CANCELLED';
      }
      return Stat;
    },
  },
};
</script>

<style scoped>
.content{
  color:white;
  font-size: 13px;
  margin-bottom: 20px;
}
.message__box{
    width: 450px;
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
    background: #1b2731;
    height: 100%;
    border-radius: 10px;
    padding: 20px;
}
.background{
    background: linear-gradient(270deg,rgba(41,60,83,.2),#121c29),url('../../../assets/lobby/csgo.png') no-repeat;
    background-size: 570px 300px;
    background-position-x: right;
}
</style>
