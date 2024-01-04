<template>
  <div id="no_sidebar">
      <Navbar/>
      <main class="main-layout__content">
        <slot/>
      </main>
      <Footer/>
  </div>
</template>
<script>
import Navbar from '../components/nosidebar/Navbar.vue';
import Footer from '../components/nosidebar/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
  methods: {
  },
  mounted() {
  },
};
</script>
<style scoped>
.main-layout__content{
  margin-top: 70px;
}
</style>
