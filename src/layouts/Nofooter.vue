<template>
  <div id="no_sidebar">
      <Navbar/>
      <main class="main-layout__content">
        <slot/>
      </main>
  </div>
</template>
<script>
import Navbar from '../components/nosidebar/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  methods: {
  },
  mounted() {
  },
};
</script>
<style scoped>

</style>
