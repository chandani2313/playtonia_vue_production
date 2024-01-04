<template>
  <div class="overview">
       <div class="lobby_player_wrapper">
            <div class="lobby_player_wrapper_inner">
              <div class="lobby_player_wrapper_inner_team1" v-if="lobby">
                  <PlayerCard :data="lb" v-for="lb in lobby.player_data.team1.players" :key="lb.slot_number" />
                  <Empty v-for="i in lobby.size -  Object.keys(lobby.player_data.team1.players).length" :key="i" />
              </div>
              <div class="lobby_player_wrapper_inner_stats">
                <Message/>
                <Controls/>
              </div>
              <div class="lobby_player_wrapper_inner_team2" v-if="lobby">
                  <PlayerCard :data="lb" v-for="lb in lobby.player_data.team2.players" :key="lb.slot_number" />
                  <Empty v-for="i in lobby.size - Object.keys(lobby.player_data.team2.players).length" :key="i" />
              </div>
            </div>
       </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import PlayerCard from './PlayerCard.vue';
import Empty from './Empty.vue';
import Controls from './Controls.vue';
import Message from './Message.vue';

export default {
  name: 'Overview',
  data() {
    return {
    };
  },
  components: {
    PlayerCard,
    Controls,
    Message,
    Empty,
  },
  computed: {
    ...mapGetters({
        lobby: 'lobby/lobby',
    }),
  },
};
</script>

<style>
.lobby-join-btn_wrapper{
  margin-bottom: 1rem;
}
.lobby-join-btn{
  padding: 14px 50px;
  font-size: 16px;
  line-height: 1.5em;
  border-radius: 5px;
  color: #333;
  text-transform: uppercase;
  background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
  font-weight: 700;
  border: 2px solid #15232e;
}
.lobby-join-btn:hover{
     background: #15232e;
      box-shadow: 0px 1px 20px 0px #3CA3F0;
          border: 2px solid #3df0ff;
}
.i-lobby {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  letter-spacing: 0.2px;
  transition: 1s box-shadow;
}
.i-lobby:hover {
  color: white;
}
.i-lobby:hover:before, .i-lobby:hover:after {
  display: block;
  content: '';
  position: absolute;
  width: 103%;
  height: 103%;
  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  border-radius: 5px;
  z-index: -1;
  animation: 1s clockwise infinite;
}
.i-lobby:hover:after {
  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  animation: 2s counterclockwise infinite;
}
@keyframes clockwise {
  0% {
    top: -5px;
    left: 0;
  }
  12% {
    top: -2px;
    left: 2px;
  }
  25% {
    top: 0;
    left: 5px;
  }
  37% {
    top: 2px;
    left: 2px;
  }
  50% {
    top: 5px;
    left: 0;
  }
  62% {
    top: 2px;
    left: -2px;
  }
  75% {
    top: 0;
    left: -5px;
  }
  87% {
    top: -2px;
    left: -2px;
  }
  100% {
    top: -5px;
    left: 0;
  }
}

@keyframes counterclockwise {
  0% {
    top: -5px;
    right: 0;
  }
  12% {
    top: -2px;
    right: 2px;
  }
  25% {
    top: 0;
    right: 5px;
  }
  37% {
    top: 2px;
    right: 2px;
  }
  50% {
    top: 5px;
    right: 0;
  }
  62% {
    top: 2px;
    right: -2px;
  }
  75% {
    top: 0;
    right: -5px;
  }
  87% {
    top: -2px;
    right: -2px;
  }
  100% {
    top: -5px;
    right: 0;
  }
}
.lobby_player_wrapper_inner{
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1rem;
}
.lobby_player_wrapper_inner_stats{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.lobby_player_wrapper_inner_team2 > .lobby_player_card > .lobby_player_card_inner{
    flex-direction: row-reverse;
}
.lobby_player_wrapper_inner_team2 > .lobby_player_card > .lobby_player_card_inner > .lobby_player_card_inner_img_wrapper{
  flex-direction: row-reverse;
}
@media (min-width: 320px) and (max-width: 767px) {
    .lobby_player_wrapper_inner{
        grid-gap: .3rem;
    }
    .lobby-join-btn{
        padding: 10px 30px;
    }
    .lobby_player_wrapper_inner_team2 > .lobby_player_card{
        margin-left: auto;
    }
}
</style>
