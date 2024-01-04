<template>
  <div class="controls" v-if="lobby">
        <div class="lobby-join-btn_wrapper" v-if="show_join && lobby.schedule.lobby_game_status !== 'forfeit' && lobby.schedule.lobby_game_status !== 'stop'">
            <button class="lobby-join-btn i-lobby" @click="Join()"><div class="lobby-join-btn-text"> join lobby </div> </button>
        </div>
        <!-- <a v-if="lobby.event_data !== 'RAINBOW 6 SIEGE WEEKLY QUALIFIERS 1'" target="_blank" href="https://discordapp.com/invite/HsY3pNs">
        <div class="btn-d">
            <img src="../../assets/Discord-Logo-Color.png"/>
            <div>Join Discord</div>
        </div>
        </a> -->
         <a target="_blank" href="https://discord.gg/qpxqwpW">
        <div class="btn-d">
            <img src="../../assets/Discord-Logo-Color.png"/>
            <div>Join Discord</div>
        </div>
        </a>
  </div>
</template>
<script>
// @ is an alias to /src
import axios from 'axios';
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
        lobby: 'lobby/lobby',
    }),
  },
  methods: {
      Validate() {
        axios
        .post('/lobby/get_user_lobby_status', {
            lobby_id: this.$route.params.lobby_id,
        })
        .then((response) => {
            if (response.status === 200) {
                if (response.data.response === 'not_joined') {
                    this.show_join = true;
                }
                if (response.data.response === 'joined') {
                    this.show_join = false;
                }
            }
        })
        .catch((e) => {
           if (e.response.status === 400) {
            this.show_join = false;
           }
        });
      },
      Join() {
        axios
        .post('/lobby/join_lobby', {
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
      this.Validate();
  },

};
</script>

<style>
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
