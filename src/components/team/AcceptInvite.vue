<template>
  <div class="matches">
      <h1>Accept</h1>
  </div>
</template>
<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Team',
  data() {
    return {
    };
  },
  components: {
  },
  methods: {
      Accept() {
        axios
        .post('/team/accept_invite', {
        team_alias: this.$route.params.alias,
        })
        .then((response) => {
            if (response.status === 200) {
                this.$router.push({ name: 'login', params: { alias: this.$route.params.alias } });
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
      this.Accept();
  },
};
</script>
<style scoped>
.matches{
    color: white;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
</style>
