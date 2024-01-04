<template>
  <div class="dashboard">
       <div class="page-content">
        <div class="container">
          <Header/>
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>
<script>
// @ is an alias to /src
import axios from 'axios';
import Header from '../../../components/csgo/5v5/Header.vue';

export default {
  name: 'Lobby',
  data() {
    return {
      timer: null,
      connection: null,
    };
  },
  components: {
    Header,
  },
  methods: {
      Lobby() {
        this.$Progress.start();
        axios
        .get('/csgo/5v5/'.concat(this.$route.params.lobby_id))
        .then((response) => {
            if (response.status === 200) {
              this.$store.dispatch('csgo/lobby', response.data);
              this.$Progress.finish();
            }
        })
        .catch((e) => {
            if (e.response.status === 400) {
              this.$Progress.finish();
            }
        });
      },
  },
  created() {
      const vm = this;
      this.connection = new WebSocket('wss://api.playtonia.com/ws/lobby/'.concat(this.$route.params.lobby_id).concat('/'));
      this.connection.onmessage = function (event) {
          const data = JSON.parse(event.data);
          if (data.message === 'JOINED') {
              vm.Lobby();
          }
        };
    },
  mounted() {
    //  this.timer = setInterval(() => {
    //       this.Lobby();
    //  }, 10000);
      this.Lobby();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style >
img {
  max-width: 100%;
  height: auto;
}
figure {
  margin: 0;
}
a {
  color: white;
  text-decoration: none;
}
*, *::before, *::after {
    -webkit-box-sizing: border-box;
     box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6 {
  color: #fff;
  margin: 0 0 .75em 0;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}
.page-content{
    padding: 1rem;
    overflow: hidden;
}
.container {
    max-width: 1400px;
    margin-right: auto;
    margin-left: auto;
}
</style>
