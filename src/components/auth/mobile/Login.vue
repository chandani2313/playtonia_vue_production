<template>
  <div class="login__wrap">
          <div class="form">
            <form novalidate>
                <div class="input-wrapper">
                    <input type="text" v-model="email" required v-bind:class="{ err: email_error }" />
                    <span class="floating-label"  v-bind:class="{ error: email_error }">EMAIL ADDRESS</span>
                    <div class="validator" v-if="!email_error">Use a valid email address that you have access to.</div>
                    <div class='validator error' v-if="email_error">{{email_error}}</div>
                </div>
                <div class="input-wrapper">
                    <input type="password" v-model="password" required v-bind:class="{ err: password_error }" />
                    <label class="floating-label" v-bind:class="{ error: password_error }">PASSWORD</label>
                    <div class="validator" v-if="!password_error">Min. length: 8 Characters.</div>
                    <div class='validator error' v-if="password_error">{{password_error}}</div>
                </div>
                <div class="input-wrapper">
                <router-link class="forgot" tag="div" :to="{ name: 'AuthMobile', query: { s: 'forgot', redirect: null }}"  exact>
                  Forgot Password ?
                </router-link>
                </div>
                <div class="input-wrapper">
                  <button class="btn" @click.prevent="Validate()">LOGIN AND PLAY</button>
                </div>
            </form>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      password_error: '',
      email_error: '',
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,/* eslint-disable-line */
    };
  },
  components: {
  },
  methods: {
    Validate() {
      if (!this.reg.test(this.email)) {
        this.email_error = 'Enter a valid email address.';
      } else {
        this.email_error = '';
      }

      if (this.password === '') {
        this.password_error = 'This field is required.';
      } else {
        this.password_error = '';
      }

      if (this.email !== '' && this.password !== '') {
        this.Login();
      }
    },
    Login() {
      axios
        .post('/auth/sign_in', {
          email: this.email.toLowerCase().trim(),
          password: this.password,
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            this.$router.push(this.$route.query.redirect || '/dashboard');
            // this.$router.push('/dashboard');
          }
        })
        .catch((e) => {
          if (e.response.data.response) {
            const [AccountStatus] = e.response.data.response;
            if (AccountStatus === 'account_not_active') {
              this.$router.push({ query: { s: 'verify', e: this.email } });
            }
          }

          if (e.response.data.email) {
            const [EmailData] = e.response.data.email;
            this.email_error = EmailData;
          } else {
            this.email_error = '';
          }

          if (e.response.data.password) {
            const [PasswordData] = e.response.data.password;
            this.password_error = PasswordData;
          } else {
            this.password_error = '';
          }
        });
    },
  },
};
</script>

<style scoped>
.forgot{
  color: #2e88ef;
  width: 100%;
  text-align: right;
  cursor: pointer;
  font-size: 12px;
}
.login__wrap{
  width: 100%;
  margin-top: 10px;
}
.error{
    color: red !important;
}
.err{
    border: 2px solid red!important;
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

.validator{
  padding: 4px 10px;
  display: flex;
  margin-bottom: 10px;
  font-size: 12px;
  color: rgba(219,219,232,.4);
}


.wrapper img {
    width: 60%;
}
.form{
    display: flex;
    width: 100%;
    margin-top: 16px;
    height: 100%;
}
.form .input-wrapper{
  width: 89%;
  position: relative;
}
.form form{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.form form input {
  border: 2px solid #364444;
  padding: 12px;
  border-radius: 11px;
  background: transparent;
  /* margin-block-end: 12px; */
  outline: none;
  color: white;
  box-shadow: 5px 10px 20px #141f28;
  width: -webkit-fill-available;
  font-weight: 700;
}
.form .floating-label{
  position: absolute;
  font-size: 10px;
  top: 16px;
  font-weight: 700;
  left: 15px;
  color: rgba(219,219,232,.4);
  pointer-events: none;
  transition: 0.2s ease all;
}
.form form input:valid {
  border: 2px solid #1b8fe4;
}
.form form input:valid~ .floating-label {
  color: #1b8fe4;
}
input:focus ~ .floating-label,input:not(:focus):valid ~ .floating-label{
  top: -11px;
  left: 20px;
  background: #192632;
  padding: 6px;
  font-size: 10px;
}
.form form input:focus {
  border: 2px solid #1b8fe4;
}
.form form input:focus ~ .floating-label {
  color: #1b8fe4;
}
.btn{
    background: linear-gradient(90deg,#1b8fe4,#2e88ef);
    width: 100%;
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
@media (min-width: 320px) and (max-width: 767px) {
  .wrapper{
    width: 90%;
  }
  .form .input-wrapper{
    width: 88%;
  }
}
</style>
