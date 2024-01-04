<template>
  <div class="auth_mobile">
      <div class="wrapper" >
        <div class="tab__wrapper" v-if="bottom">
          <router-link class="tab login" tag="div" :to="{ name: 'AuthMobile', query: { s: 'login', redirect: redirectl }}"  v-bind:class="{ active: login }"  exact>
            LOGIN
          </router-link>
          <router-link class="tab register" tag="div" :to="{ name: 'AuthMobile', query: { s: 'register', redirect: redirectl }}"  v-bind:class="{ active: register }"  exact>
            REGISTER
          </router-link>
        </div>
        <Register v-if="register"/>
        <Login v-if="login"/>
        <Verify v-if="verify"/>
        <Forgot v-if="forgot"/>
        <ForgotOtp v-if="forgot_otp"/>
        <SetPassword v-if="set_password"/>
        <Steam v-if="steam"/>
        <Google v-if="google"/>
        <div class="seperator" v-if="social">or {{query}} with</div>
        <div class="social__wrapper" v-if="social">
          <a href="https://api.playtonia.com/v1/social/login/steam">
            <img src="../assets/auth/steam.svg" />
          </a>
          <a href="https://api.playtonia.com/v1/social/login/google-oauth2">
            <img src="../assets/auth/google.svg" />
          </a>
          <a href="https://api.playtonia.com/v1/social/login/facebook">
            <img src="../assets/auth/f.svg" style="border-radius:8px;" />
          </a>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Register from '../components/auth/mobile/Register.vue';
import Login from '../components/auth/mobile/Login.vue';
import Verify from '../components/auth/mobile/Verify.vue';
import Forgot from '../components/auth/mobile/Forgot.vue';
import ForgotOtp from '../components/auth/mobile/ForgotOtp.vue';
import SetPassword from '../components/auth/mobile/SetPassword.vue';
import Steam from '../components/auth/mobile/SteamForm.vue';
import Google from '../components/auth/mobile/GoogleForm.vue';

export default {
  name: 'AuthMobile',
  data() {
    return {
      login: false,
      register: false,
      verify: false,
      forgot: false,
      forgot_otp: false,
      set_password: false,
      query: this.$route.query.s,
      redirectl: null,
      steam: false,
      bottom: true,
      social: true,
      google: false,
    };
  },
  components: {
    Register,
    Login,
    Verify,
    Forgot,
    ForgotOtp,
    SetPassword,
    Steam,
    Google,
  },
  mounted() {
    this.Render();
  },
  watch: {
    '$route.query.s': function (data) {
      this.query = data;
      this.Render();
    },
    immediate: true,
  },
  methods: {
    CheckAuth() {
        axios
        .get('/auth/check_account')
        .then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('token');
                localStorage.setItem('token', this.$route.query.token);
                this.$router.push(this.$route.query.redirect || '/dashboard');
            }
        })
        .catch((e) => {
            if (e.response.status === 400) {
               this.$notify({
                type: 'warn',
                title: 'Warning.',
                group: 'notifications',
                text: 'Something went wrong try again.',
              });
              window.close();
            }
        });
      },
    Render() {
      if (!this.$route.query.redirect) {
          this.redirectl = '/';
      } else {
        this.redirectl = this.$route.query.redirect;
      }
      if (this.query === 'register') {
        this.register = true;
        this.login = false;
        this.verify = false;
        this.forgot_otp = false;
        this.forgot = false;
        this.set_password = false;
        this.bottom = true;
        this.steam = false;
        this.social = true;
        this.google = false;
      } else if (this.query === 'login') {
        this.login = true;
        this.register = false;
        this.verify = false;
        this.forgot_otp = false;
        this.forgot = false;
        this.set_password = false;
        this.bottom = true;
        this.steam = false;
        this.social = true;
        this.google = false;
      } else if (this.query === 'verify' && this.$route.query.e) {
        this.verify = true;
        this.login = false;
        this.register = false;
        this.forgot_otp = false;
        this.forgot = false;
        this.set_password = false;
        this.bottom = true;
        this.steam = false;
        this.social = false;
        this.google = false;
      } else if (this.query === 'forgot') {
        this.forgot = true;
        this.verify = false;
        this.login = false;
        this.register = false;
        this.forgot_otp = false;
        this.set_password = false;
        this.bottom = true;
        this.steam = false;
        this.social = false;
        this.google = false;
      } else if (this.query === 'forgot_verify' && this.$route.query.e) {
        this.forgot_otp = true;
        this.forgot = false;
        this.verify = false;
        this.login = false;
        this.register = false;
        this.set_password = false;
        this.bottom = true;
        this.steam = false;
        this.social = false;
        this.google = false;
      } else if (this.query === 'set_password' && this.$route.query.p && this.$route.query.o) {
        this.set_password = true;
        this.forgot_otp = false;
        this.forgot = false;
        this.verify = false;
        this.login = false;
        this.register = false;
        this.bottom = true;
        this.steam = false;
        this.social = false;
        this.google = false;
      } else if (this.query === 'steam' && this.$route.query.token && this.$route.query.id) {
        this.steam = true;
        this.set_password = false;
        this.forgot_otp = false;
        this.forgot = false;
        this.verify = false;
        this.login = false;
        this.register = false;
        this.bottom = false;
        this.social = false;
        this.google = false;
      } else if (this.query === 'google-oauth2' && this.$route.query.token && this.$route.query.id) {
        this.steam = false;
        this.google = true;
        this.set_password = false;
        this.forgot_otp = false;
        this.forgot = false;
        this.verify = false;
        this.login = false;
        this.register = false;
        this.bottom = false;
        this.social = false;
      } else if (this.query === 'facebook' && this.$route.query.token && this.$route.query.id) {
        this.steam = false;
        this.google = true;
        this.set_password = false;
        this.forgot_otp = false;
        this.forgot = false;
        this.verify = false;
        this.login = false;
        this.register = false;
        this.bottom = false;
        this.social = false;
      } else if (this.query === 'token' && this.$route.query.token) {
          if (this.$route.query.provider === 'steam') {
            if (localStorage.getItem('token')) {
              this.CheckAuth();
            } else {
              localStorage.removeItem('token');
              localStorage.setItem('token', this.$route.query.token);
              this.$router.push(this.$route.query.redirect || '/dashboard');
            }
          } else {
            localStorage.removeItem('token');
            localStorage.setItem('token', this.$route.query.token);
            this.$router.push(this.$route.query.redirect || '/dashboard');
          }
      } else {
        this.$router.push({ query: { s: 'login' } });
      }
    },
  },
};
</script>

<style scoped>
.seperator{
  color: rgba(219,219,232,.4);
  margin-top: 15px;
  font-size: 12px;
}
.btn {
  background: linear-gradient(90deg, #1b8fe4, #2e88ef);
  width: 100%;
  padding: 11px;
  outline: none;
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
  box-shadow: 5px 10px 20px #141f28;
  color: white;
  font-weight: 600;
}
.btn:hover {
  box-shadow: 0px 0px 10px 0px #2e88ef;
  transform: translateY(-2px);
  transition-duration: 0.5s;
}
.active{
  background: #192632 !important;
  color: white !important;
}
.tab__wrapper{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tab__wrapper .tab{
  width: 100%;
  text-align: center;
  background: #0f131b;
  padding: 15px;
  color: rgba(219,219,232,.4);
  cursor: pointer;
}
.login{
  border-top-left-radius: 10px;
}
.register{
  border-top-right-radius: 10px;
}
.wrapper{
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #192632;
    box-shadow: 5px 7px 6px rgba(0,0,0,.16);
    border-radius: 11px;
}
.social__wrapper{
  width: 400px;
  height: 60px;
  border-radius: 10px;
  margin-top: 12px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.options{
  display:flex;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  color: rgba(219,219,232,.4);
  cursor: pointer;
}

.fas{
  font-size: 20px;
}
.auth_mobile{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.auth_mobile{
    height: 100vh;
}
.wrapper_bottom{
    width: 400px;
    border-radius: 11px;
    display: flex;
    align-items: center;
    height: 78px;
    justify-content: space-around;
}
@media (min-width: 320px) and (max-width: 767px) {
}
</style>
