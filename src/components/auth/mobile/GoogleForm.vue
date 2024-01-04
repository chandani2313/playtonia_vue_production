<template>
  <div class='wrapper'>
    <img src='../../../assets/home/Playtonia White.png' />
    <div class='form'>
      <form novalidate>
        <div class='input-wrapper'>
          <input type='text' v-model="username" required v-bind:class="{ err: username_error }"  />
          <span class='floating-label'  v-bind:class="{ error: username_error }" >USERNAME</span>
          <div class='validator' v-if="!username_error">Min. length: 5 Characters. No spaces or special characters. </div>
          <div class='validator error' v-if="username_error">{{username_error}}</div>
        </div>
        <button class='btn' @click.prevent="Validate()">SAVE</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'register',
  data() {
    return {
      username: '',
      username_error: '',
    };
  },
  components: {},
  methods: {
    Validate() {
      if (this.username === '') {
        this.username_error = 'This field is required.';
      } else {
        this.username_error = '';
      }
      if (this.username !== '') {
        this.Login();
      }
    },
    Login() {
      axios
        .post('/auth/save_data', {
          username: this.username,
          token: this.$route.query.token,
          s_id: this.$route.query.id,
        })
        .then((response) => {
          if (response.status === 200) {
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                this.$router.push(this.$route.query.redirect || '/dashboard');
            }
          }
        })
        .catch((e) => {
          if (e.response.data.email) {
            const [EmailData] = e.response.data.email;
            this.email_error = EmailData;
          } else {
            this.email_error = '';
          }

          if (e.response.data.username) {
            const [UsernamelData] = e.response.data.username;
            this.username_error = UsernamelData;
          } else {
            this.username_error = '';
          }
        });
    },
  },
};
</script>

<style scoped>
.options {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  color: rgba(219, 219, 232, 0.4);
  cursor: pointer;
}
.error{
    color: red !important;
}
.err{
    border: 2px solid red!important;
}
.fas {
  font-size: 20px;
}

.validator {
  padding: 4px 10px;
  display: flex;
  margin-bottom: 10px;
  font-size: 12px;
  color: rgba(219, 219, 232, 0.4);
}

.wrapper {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #192632;
  box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.16);
  border-radius: 11px;
}

.wrapper img {
  width: 60%;
}
.form {
  display: flex;
  width: 100%;
  margin-top: 16px;
  height: 100%;
}
.form .input-wrapper {
  width: 89%;
  position: relative;
}
.form form {
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
.form .floating-label {
  position: absolute;
  font-size: 10px;
  top: 16px;
  font-weight: 700;
  left: 15px;
  color: rgba(219, 219, 232, 0.4);
  pointer-events: none;
  transition: 0.2s ease all;
}
.form form input:valid {
  border: 2px solid #1b8fe4;
}
.form form input:valid ~ .floating-label {
  color: #1b8fe4;
}
input:focus ~ .floating-label,
input:not(:focus):valid ~ .floating-label {
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
.btn {
  background: linear-gradient(90deg, #1b8fe4, #2e88ef);
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
.btn:hover {
  box-shadow: 0px 0px 10px 0px #2e88ef;
  transform: translateY(-2px);
  transition-duration: 0.5s;
}
@media (min-width: 320px) and (max-width: 767px) {
  .wrapper {
    width: 90%;
  }
  .form .input-wrapper {
    width: 88%;
  }
}
</style>
