<template>
  <div class="auth_mobile">
      <Register v-if="register"/>
      <Login v-if="login"/>
      <Verify v-if="verify"/>
      <Forgot v-if="forgot"/>
      <ForgotOtp v-if="forgot_otp"/>
      <SetPassword v-if="set_password"/>
      <Steam v-if="steam"/>
      <Google v-if="google"/>
      <div class="social__wrapper" v-if="social">
        <a href="https://api.playtonia.com/v1/social/login/steam">
          <img src="../../assets/auth/steam.svg" />
        </a>
        <a href="https://api.playtonia.com/v1/social/login/google-oauth2">
          <img src="../../assets/auth/google.svg" />
        </a>
        <a href="https://api.playtonia.com/v1/social/login/facebook">
          <img src="../../assets/auth/f.svg" style="border-radius:8px;" />
        </a>
      </div>
      <div class="wrapper_bottom" v-if="bottom">
        <router-link class="options" tag="div" :to="{ name: this.$route.name, query: { s: 'login' }}"  exact>
          <i class="fas fa-sign-in-alt"></i>
          <span>Log In</span>
        </router-link>
        <router-link class="options" tag="div" :to="{ name: this.$route.name, query: { s: 'register' }}"  exact>
          <i class="fas fa-user-plus"></i>
          <span>Sign Up</span>
        </router-link>
        <router-link class="options" tag="div" :to="{ name: this.$route.name, query: { s: 'forgot' }}"  exact>
          <i class="fas fa-exclamation-circle"></i>
          <span>Forgot Password ?</span>
        </router-link>
      </div>
        <router-link class="btn" tag="button" :to="{ name: this.$route.name, query: { s: 'close' }}"  exact>
          GO BACK
        </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from './auth/Register.vue';
import Login from './auth/Login.vue';
import Verify from './auth/Verify.vue';
import Forgot from './auth/Forgot.vue';
import ForgotOtp from './auth/ForgotOtp.vue';
import SetPassword from './auth/SetPassword.vue';
import Steam from '../../components/auth/mobile/SteamForm.vue';
import Google from '../../components/auth/mobile/GoogleForm.vue';

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
      } else if (this.query === 'token' && this.$route.query.token) {
          localStorage.setItem('token', this.$route.query.token);
          this.$router.push(this.$route.query.redirect || '/dashboard');
      } else {
        // this.$router.push({ query: { s: 'login' } });
        this.$router.replace({ s: 'close' });
      }
    },
  },
};
</script>

<style scoped>
.social__wrapper{
  background: #192632;
  width: 400px;
  height: 60px;
  border-radius: 10px;
  margin-top: 12px;
  box-shadow: 5px 7px 6px rgba(0,0,0,.16);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.btn{
    background: linear-gradient(90deg,#e41b1b,#ef542e);
    padding: 11px;
    outline: none;
    border-radius: 5px;
    border-style: none;
    margin: 15px auto;
    cursor: pointer;
    box-shadow: 5px 10px 20px #141f28;
    color: white;
    font-weight: 600;
}
.btn:hover{
    box-shadow: 0px 0px 10px 0px #2e88ef;
    transform: translateY(-2px);
    transition-duration: .5s;
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
/* .auth_mobile{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.auth_mobile{
    height: 100vh;
} */
.auth_mobile{
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    top: 0;
    height: 100%;
    background: #000000d9;
    z-index: 2;
    flex-direction: column;
}
.wrapper_bottom{
    width: 400px;
    border-radius: 11px;
    display: flex;
    align-items: center;
    height: 78px;
    margin-top: 10px;
    justify-content: space-around;
}
@media (min-width: 320px) and (max-width: 767px) {
  .wrapper_bottom{
    width: 90%;
    margin-top: 10px;
  }
  .social__wrapper{
     width: 90%;
  }
}
</style>
