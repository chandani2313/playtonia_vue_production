<template>
  <div class="controls" v-if="lobby">
        <div class="lobby-join-btn_wrapper" v-if="lobby.show_join">
            <button class="lobby-join-btn i-lobby cursor" @click="Join()"><div class="lobby-join-btn-text"> join lobby </div> </button>
        </div>
        <button v-if="lobby.match_started" class="btn" @click="toggle()" >COPY SERVER IP</button>
        <Ip @close="toggle()" v-if="ip" :game="lobby" />
  </div>
</template>
<script>
// @ is an alias to /src
import axios from 'axios';
import { mapGetters } from 'vuex';
import Ip from './Ip.vue';

export default {
  name: 'Controls',
  data() {
    return {
        show_join: false,
        ip: false,
    };
  },
  components: {
      Ip,
  },
  computed: {
    ...mapGetters({
        lobby: 'csgo/lobby',
    }),
  },
  methods: {
      toggle() {
      if (this.ip === false) {
        this.ip = true;
      } else {
        this.ip = false;
      }
    },
      Join() {
        axios
        .post('/csgo/5v5/join_lobby', {
            lobby_id: this.$route.params.lobby_id,
            action: 'join',
        })
        .then((response) => {
            if (response.status === 200) {
                this.show_join = false;
            }
        })
        .catch(() => {
           this.show_join = false;
           this.$notify({
                type: 'warn',
                title: 'Warning.',
                group: 'notifications',
                text: 'Something went wrong try again.',
            });
        });
      },
  },
  mounted() {
  },

};
</script>

<style>
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
.cursor{
    cursor: pointer !important;
    outline: none !important;
}
.btn-d{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
}
.btn-d img {
    max-width: 19%;
}
</style>
