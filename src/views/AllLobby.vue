<template>
  <div class="lobbies">
      <div class="section_bottom_wrap">
        <div class="nav">
        </div>
         <div class="section_bottom_title_wrap">
            <div class="section_bottom_title_wrap_text">LOBBIES</div>
        </div>
        <div class="section_bottom_wrap_inner"  v-if="lobbies">
            <Lobbyies :data="lobby" v-for="lobby in lobbies.lobbies" :key="lobby.created_at" />
            <CSGO5v5Lobby :data="lobby" v-for="lobby in cs_lobby" :key="lobby.created_at" />
        </div>
      </div>
  </div>
</template>
<script>
import axios from 'axios';
import Lobbyies from '../components/lobby/AllLobby.vue';
import CSGO5v5Lobby from '../components/csgo/5v5/AllLobby.vue';
// @ is an alias to /src

export default {
  name: 'AllLobby',
  data() {
    return {
        lobbies: null,
        cs_lobby: null,
    };
  },
  components: {
      Lobbyies,
      CSGO5v5Lobby,
  },
  methods: {
      Lobbies() {
        this.$Progress.start();
        axios
        .post('/lobby/get_all_lobbies_in_tournament', {
            tournament_id: 3,
        })
        .then((response) => {
            if (response.status === 200) {
                this.lobbies = response.data;
                this.$Progress.finish();
            }
        })
        .catch((e) => {
            if (e.response.status === 400) {
                this.$router.push('/');
            }
        });
      },
      CsLobbies() {
        this.$Progress.start();
        axios
        .get('/csgo/5v5/all_lobby')
        .then((response) => {
            if (response.status === 201) {
                this.cs_lobby = response.data;
                this.$Progress.finish();
            }
        })
        .catch((e) => {
            if (e.response.status === 400) {
                this.$router.push('/');
            }
        });
      },
  },
  mounted() {
      this.Lobbies();
      this.CsLobbies();
  },
};
</script>

<style scoped>
.lobby_wrapper {
    grid-template-columns: repeat(auto-fill, minmax(267px, 1fr));
    grid-auto-flow: dense;
    display: grid;
    grid-gap: 2rem;
    padding: 16px;
}
.text{
    color: white;
}
.section_bottom_wrap{
  padding: 10px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.nav {
    background-color: #1b2731;
    padding: 25px;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 3px 2px 20px 3px rgba(0,0,0,.16);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
}
.section_bottom_wrap_inner{
    grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
    grid-auto-flow: dense;
    display: grid;
    grid-gap: 1rem;
    margin-bottom: 1rem;
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
@media (min-width: 320px) and (max-width: 767px) {
    .nav{
        width: auto;
    }
}
</style>
