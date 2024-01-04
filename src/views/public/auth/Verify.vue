<template>
  <div class="wrapper">
          <img src="../../../assets/home/Playtonia White.png">
          <div class="form">
            <div class="title">Enter code sent to your email <span>{{email}}</span> to activate.</div>
            <form novalidate>
                <div class="input-wrapper">
                    <input type="text" v-model="otp" v-bind:class="{ err: otp_error }"  required/>
                    <span class="floating-label" v-bind:class="{ error: otp_error }">ENTER CODE</span>
                    <div class="validator" v-if="!otp_error">Use code received in your email to activate your account.</div>
                    <div class='validator error' v-if="otp_error">{{otp_error}}</div>
                    <div class='validator resend' v-if="!sent" @click="Resend()">Resend Activation Code ?</div>
                    <div class='validator success' v-if="sent">Activation Code Sent</div>
                </div>
                <button class="btn" @click.prevent="Verify()">ACTIVATE</button>
            </form>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'verify',
  data() {
    return {
      email: this.$route.query.e,
      otp: null,
      otp_error: null,
      sent: false,
    };
  },
  components: {
  },
  methods: {
    Verify() {
        axios
        .post('/auth/verify_user', {
            email: this.email.toLowerCase().trim(),
            otp: this.otp,
        })
        .then((response) => {
            if (response.status === 200) {
              this.$notify({
                  title: 'Success.',
                  group: 'notifications',
                  text: 'Email Verified Successfully.',
              });
              this.$router.push({ query: { s: 'login', redirect: this.$route.query.redirect || '/' } });
            }
        })
        .catch((e) => {
            if (e.response.status === 400) {
                if (e.response.data.otp) {
                    const [OtpData] = e.response.data.otp;
                    this.otp_error = OtpData;
                }
            }
        });
    },
    Resend() {
        axios
        .post('/auth/resend_activation', {
            email: this.email.toLowerCase().trim(),
        })
        .then((response) => {
            if (response.status === 200) {
              this.sent = true;
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
.resend{
  color: white !important;
  cursor: pointer;
}
.success{
  color: #66a139 !important;
}
.error{
    color: red !important;
}
.err{
    border: 2px solid red!important;
}
.title{
    padding: 22px;
    color: white;
    text-align: center;
}
.title span {
    color: #2e88ef;
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
