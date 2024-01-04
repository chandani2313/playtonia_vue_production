<template>
  <div class="controls">
        <div class="lobby-join-btn_wrapper" >
            <button class="lobby-join-btn i-lobby"><div class="lobby-join-btn-text"> join lobby </div> </button>
        </div>
        <!-- <a v-if="lobby.event_data !== 'RAINBOW 6 SIEGE WEEKLY QUALIFIERS 1'" target="_blank" href="https://discordapp.com/invite/HsY3pNs">
        <div class="btn-d">
            <img src="../../assets/Discord-Logo-Color.png"/>
            <div>Join Discord</div>
        </div>
        </a> -->
  </div>
</template>
<script>
// @ is an alias to /src

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
  },
  methods: {
  },
  mounted() {
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
