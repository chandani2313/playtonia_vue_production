<template>
  <div class="alltournament">
      <Tournaments v-if="tournaments" :tournaments=filtered />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Tournaments from '../Tournaments.vue';
// @ is an alias to /src

export default {
  name: 'AllTournament',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
        tournaments: 'tournament/Tournaments',
    }),
    filtered() {
      return this.tournaments
        .filter((entry) => [entry.tournament_status.status].find((x) => x === 'ongoing'));
    },
  },
  components: {
      Tournaments,
  },
  mounted() {
  },
};
</script>

<style scoped>
</style>
