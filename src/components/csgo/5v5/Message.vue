<template>
  <div class="controls" v-if="lobby">
       <div class="message_box" v-if="!lobby.show_join && !lobby.in_lobby && !lobby.status === 'match_cancelled'">
           <span>Match starts at :</span>
           <span>{{lobby.match_start_time | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</span>
       </div>
       <div class="message_box" v-if="lobby.show_join && !lobby.status === 'match_cancelled'">
           <span>JOIN LOBBY BEFORE:</span>
           <span>{{lobby.match_start_time | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</span>
       </div>
       <div class="message_box" v-if="!lobby.show_join && lobby.in_lobby && !lobby.status === 'match_cancelled'">
           <span>WAIT FOR THE PLAYERS TO JOIN THE LOBBY.</span>
       </div>
       <div class="message_box" v-if="lobby.status === 'match_cancelled'">
           <span>{{lobby.bot_message}}</span>
       </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
  name: 'Controls',
  data() {
    return {
        show_join: false,
    };
  },
  components: {
  },
  computed: {
    ...mapGetters({
        lobby: 'csgo/lobby',
    }),
  },
};
</script>

<style scoped>
.controls{
    width: 100%;
}
.message_box{
    width: 100%;
    height: 126px;
    margin-bottom: 14px;
    background:#0d16209e;
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
    text-align: center;
    padding: 10px;
    color:white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
}
</style>
