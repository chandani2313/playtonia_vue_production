<template>
  <div id="defalut">
      <Navbar @sidebar="open()" @game="toggle()"/>
      <Sidebar :style="{display: display}" id="sidebar"/>
      <main class="main-layout__content">
        <div class="top-wrap">
          <slot/>
        </div>
        <Footer/>
      </main>
      <GameSelect v-if="show" id="gameselect" @game="toggle()"/>
  </div>
</template>
<script>
import axios from 'axios';
import Navbar from '../components/default/Navbar.vue';
import Sidebar from '../components/default/Sidebar.vue';
import Footer from '../components/default/Footer.vue';
import GameSelect from '../components/popups/GameSelect.vue';

export default {
  data() {
    return {
      display: '',
      show: false,
      invite_check: null,
    };
  },
  components: {
    Navbar,
    Sidebar,
    GameSelect,
    Footer,
  },
  methods: {
    open() {
      if (this.display === 'none') {
        this.display = 'block';
      } else if (this.display === 'block') {
        this.display = 'none';
      } else if (this.display === '') {
        this.display = 'block';
      }
    },
    toggle() {
      if (this.show === false) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    CheckInvite() {
      axios
      .get('/team/check_invite')
      .then((response) => {
          if (response.status === 200) {
            this.$dialog
            .confirm('Confirm to join the team - '.concat(response.data.team_name))
            .then(() => {
              this.AcceptInvi('1');
            })
            .catch(() => {
              this.AcceptInvi('0');
            });
          }
      })
      .catch((e) => {
          if (e.response.status === 400) {
            this.invite_check = false;
          }
      });
    },
    AcceptInvi(st) {
      axios
      .post('/team/invite_save', {
        status: st,
      })
      .then((response) => {
          if (response.status === 201) {
              this.$notify({
                  title: 'Success.',
                  group: 'notifications',
                  text: 'Joined Team Successfully.',
              });
          }
      })
      .catch((e) => {
          if (e.response.status === 400) {
            if (e.response.data.member_exceed) {
              this.$notify({
                  title: 'Warning.',
                  type: 'warn',
                  group: 'notifications',
                  text: 'Team member limit exceeded.',
              });
            }
            if (e.response.data.member_exists) {
              this.$notify({
                  title: 'Warning.',
                  type: 'warn',
                  group: 'notifications',
                  text: 'Already Part Of Team.',
              });
            }
            if (e.response.data.reject) {
              this.$notify({
                  title: 'Warning.',
                  type: 'warn',
                  group: 'notifications',
                  text: 'Team Join Reauest Cancelled.',
              });
            }
          }
      });
    },
  },
  mounted() {
    this.CheckInvite();
  },
};
</script>
<style scoped>
.main-layout__content{
  margin-top: 60px;
  margin-left: 70px;
}
@media (min-width: 320px) and (max-width: 767px) {
    #sidebar{
        display: none;
    }
    .main-layout__content{
      margin-left: 0;
    }
}
</style>
