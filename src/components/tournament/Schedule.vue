<template>
  <div class="info">
    <div class="eventinfo_wrap" v-if="tournament">
      <div class="eventinfo_wrap-content" v-if="tournament.schedule" v-html="tournament.schedule" >
      </div>
       <div class="eventinfo_wrap-content" v-if="!tournament.schedule" >
         Schedule will be updated soon.
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Info',
  data() {
    return {
      tournament: null,
    };
  },
  components: {
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
};
</script>

<style scoped>

.eventinfo_wrap{
  box-shadow: 2px 3px 6px rgba(0,0,0,.5);
  background: #1b2731;
  padding: 10px;
  margin-bottom: 1.5rem;
}
.eventinfo_wrap-header{
  font-size: 30px;
  font-weight: 800;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  font-style: italic;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  margin-top: 10px;
  position: relative;
}
.eventinfo_wrap-header:before{
  content: "";
  position: absolute;
  left: 10px;
  height: 1px;
  background-color: #2a2d30;
  /* background-color: #101820; */
  -webkit-box-shadow: 0 1px 0 #000000;
  box-shadow: 0 -1px 0 #000000;
  width: calc(100% - 20px);
  bottom: -16px;
}
.eventinfo_wrap-content{
  max-width: 1024px;
  margin: auto;
  text-align: justify;
  color:#fff;
  padding: 16px;
}
</style>
