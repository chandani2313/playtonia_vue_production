<template>
  <div class="alltournament">
      <Tournaments v-if="tournaments" :tournaments=tournaments />
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
