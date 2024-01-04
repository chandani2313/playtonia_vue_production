<template>
  <div class="dashboard">
    <Slider class="animated fadeIn" v-if="images.length !== 0" :images=images />
    <div class="bottom-container">
      <div class="section_bottom_wrap">
        <Tournaments  v-if="tournaments" :tournaments=tournaments />
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import axios from 'axios';
import Slider from '../components/dashboard/Slider.vue';
import Tournaments from '../components/Home/Tournaments.vue';

export default {
  name: 'Dashboard',
  data() {
    return {
      images: [],
      tournaments: null,
    };
  },
  components: {
    Slider,
    Tournaments,
  },
  methods: {
    Slider() {
      axios
      .get('/tournament/slider_images')
      .then((response) => {
        if (response.status === 201) {
          this.images = response.data;
        }
      })
      .catch((e) => {
        if (e.response.status === 400) {
            this.$router.push('/');
        }
      });
    },
    Tournaments() {
      this.$Progress.start();
      axios
      .get('/tournament/all_tournament')
      .then((response) => {
        if (response.status === 201) {
          this.tournaments = response.data;
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
    if (localStorage.getItem('token')) {
      this.Slider();
      this.Tournaments();
    }
  },
};
</script>

<style scoped>
.bottom-container{
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.section_bottom_wrap{
  padding: 10px;
}
</style>
