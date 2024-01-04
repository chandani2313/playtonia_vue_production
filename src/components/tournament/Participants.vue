<template>
  <div class="info">
      <div class="eventoverview-eventprize_wrap">
        <div class="section_bottom_title_wrap">
            <div class="section_bottom_title_wrap_text">PARTICIPANTS</div>
        </div>
        <div class="eventparticipant-wrap" v-if="tournament">
          <PlayerCard :player="participant" v-for="participant in tournament.participants" :key="participant.id" />
        </div>
      </div>
  </div>
</template>
<script>
import axios from 'axios';
import PlayerCard from './PlayerCard.vue';
// @ is an alias to /src

export default {
  name: 'Info',
  data() {
    return {
      tournament: null,
      connection: null,
    };
  },
  components: {
    PlayerCard,
  },
  methods: {
    Tournament() {
    axios
    .get('/tournament/'.concat(this.$route.params.id))
    .then((response) => {
        if (response.status === 201) {
            this.tournament = response.data;
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
    this.Tournament();
  },
  created() {
      const vm = this;
      this.connection = new WebSocket('wss://api.playtonia.com/ws/chat/'.concat(this.$route.params.id).concat('/'));
      this.connection.onmessage = function (event) {
          const data = JSON.parse(event.data);
          if (data.message === 'JOINED') {
              vm.Tournament();
          }
        };
    },
  computed: {
  },
};
</script>

<style scoped>
.eventoverview-eventprize_wrap{
    margin-bottom: 1.5rem;
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
    padding: 0 10px;
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
.eventparticipant-wrap{
    grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
    grid-gap: 10px;
    grid-auto-flow: dense;
    display: grid;
}
</style>
