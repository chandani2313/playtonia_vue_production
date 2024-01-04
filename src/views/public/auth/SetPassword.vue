<template>
  <div class="wrapper">
          <img src="../../../assets/home/Playtonia White.png">
          <div class="form" v-if="!success">
            <div class="title">Enter new password.</div>
            <form novalidate>
                <div class="input-wrapper">
                    <input type="password" v-model="password" required v-bind:class="{ err: password_error }" />
                    <label class="floating-label" v-bind:class="{ error: password_error }">PASSWORD</label>
                    <div class="validator" v-if="!password_error">Min. length: 8 Characters.</div>
                    <div class='validator error' v-if="password_error">{{password_error}}</div>
                </div>
                 <div class="input-wrapper">
                    <input type="password" v-model="confirm_password" required v-bind:class="{ err: confirm_password_error }" />
                    <label class="floating-label" v-bind:class="{ error: confirm_password_error }">CONFIRM PASSWORD</label>
                    <div class='validator error' v-if="confirm_password_error">{{confirm_password_error}}</div>
                </div>
                <button class="btn" @click.prevent="Validate()">RESET</button>
            </form>
      </div>
        <div class="form" v-if="success">
            <div class="title">Password change success login to proceed.</div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'setpassword',
  data() {
    return {
      password: '',
      confirm_password: '',
      confirm_password_error: '',
      password_error: '',
      email: this.$route.query.p,
      otp: this.$route.query.o,
      success: false,
    };
  },
  components: {
  },
  methods: {
    Validate() {
      if (this.password === '') {
        this.password_error = 'This field is required.';
      } else {
        this.password_error = '';
      }

      if (this.confirm_password === '') {
        this.confirm_password_error = 'This field is required.';
      } else {
        this.confirm_password_error = '';
      }

      if (!this.password.length < 1 && !this.confirm_password.length < 1) {
          if (this.password !== this.confirm_password) {
              this.confirm_password_error = 'Password did not match.';
          } else {
              this.confirm_password_error = '';
          }
      }

      if (this.password !== '') {
        this.Reset();
      }
    },
    Reset() {
      axios
        .post('/auth/change_password', {
          email: this.email.toLowerCase().trim(),
          otp: this.otp,
          password: this.confirm_password,
        })
        .then((response) => {
          if (response.status === 200) {
              this.success = true;
              this.$router.push({ query: { s: 'set_password', e: '' } });
          }
        })
        .catch(() => {
          this.$notify({
                type: 'warn',
                title: 'Warning.',
                group: 'notifications',
                text: 'Something went wrong try again.',
            });
        });
    },
  },
};
</script>

<style scoped>
.title{
    padding: 22px;
    color: white;
    text-align: center;
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

.wrapper{
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #192632;
    box-shadow: 5px 7px 6px rgba(0,0,0,.16);
    border-radius: 11px;
    margin-top: 93px;
}

.wrapper img {
    width: 60%;
}
.form{
    display: flex;
    width: 100%;
    margin-top: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 33%;
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
