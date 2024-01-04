<template>
  <div class="basic">
       <div class="section_bottom_title_wrap">
            <div class="section_bottom_title_wrap_text">GAME DETAILS</div>
        </div>
        <form novalidate >
            <div class="input-wrapper">
                <input type="number" required v-model="cod_id"  />
                <span class="floating-label"  >COD ID</span>
                <div class='validator error' ></div>
            </div>
            <div class="input-wrapper">
                <input type="text" required v-model="cod_ign"  />
                <span class="floating-label"  >COD INGAME NAME</span>
                <div class='validator error' ></div>
            </div>
            <div class="input-wrapper">
                <input type="text" required v-model="riot_id"  />
                <span class="floating-label"  >RIOT ID</span>
                <div class='validator error' ></div>
            </div>
            <div class="input-wrapper">
                <input type="text" required v-model="battle_id"  />
                <span class="floating-label"  >BATTLE.NET ID ( EX: NAME#1234 )</span>
                <div class='validator error' ></div>
            </div>
            <div class="input-wrapper">
                <input type="number" required v-model="pubgm_id"  />
                <span class="floating-label"  >PUBG MOBILE ID</span>
                <div class='validator error' ></div>
            </div>
            <div class="input-wrapper">
                <input type="text" required v-model="pubgm_ign"  />
                <span class="floating-label"  >PUBG MOBILE INGAME NAME</span>
                <div class='validator error' ></div>
            </div>
             <div class="input-wrapper">
                <input type="text" required v-model="r6_id"  />
                <span class="floating-label"  >RAINBOW SIX SIEGE UPLAY ID</span>
                <div class='validator error' ></div>
            </div>
             <div class="input-wrapper">
                <input type="text" required v-model="mlbb_ign"  />
                <span class="floating-label"  >MOBILE LEGENDS INGAME NAME</span>
                <div class='validator error' ></div>
            </div>
             <div class="input-wrapper">
                <input type="text" required v-model="mlbb_id"  />
                <span class="floating-label"  >MOBILE LEGENDS ID</span>
                <div class='validator error' ></div>
            </div>
            <div class="input-wrapper">
                <input type="text" required v-model="discord_name"  />
                <span class="floating-label"  >DISCORD NAME (Format Ex: Name#0000)</span>
                <div class='validator error' ></div>
            </div>
            <button class="btn" @click.prevent="Update()">UPDATE</button>
        </form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Basic',
  data() {
      return {
          cod_id: null,
          cod_ign: null,
          pubgm_ign: null,
          pubgm_id: null,
          r6_id: null,
          mlbb_ign: null,
          mlbb_id: null,
          discord_name: null,
          riot_id: null,
          battle_id: null,
      };
  },
  methods: {
    Default() {
      axios.get('/player/edit_game_data')
        .then((response) => {
            if (response.status === 201) {
              if (response.data.cod_id) {
                this.cod_id = response.data.cod_id;
              }
              if (response.data.cod_ign) {
                this.cod_ign = response.data.cod_ign;
              }
              if (response.data.pubgm_ign) {
                this.pubgm_ign = response.data.pubgm_ign;
              }
              if (response.data.pubgm_id) {
                this.pubgm_id = response.data.pubgm_id;
              }
              if (response.data.r6_id) {
                this.r6_id = response.data.r6_id;
              }
              if (response.data.mlbb_id) {
                this.mlbb_id = response.data.mlbb_id;
              }
              if (response.data.mlbb_ign) {
                this.mlbb_ign = response.data.mlbb_ign;
              }
              if (response.data.riot_id) {
                this.riot_id = response.data.riot_id;
              }
               if (response.data.discord) {
                this.discord_name = response.data.discord;
              }
              if (response.data.battle_id) {
                this.battle_id = response.data.battle_id;
              }
            }
        })
        .catch((e) => {
            if (e.response.status === 401) {
                localStorage.removeItem('token');
                this.$router.push('/');
            }
        });
    },
    Update() {
         axios.post('/player/edit_game', {
            cod_id: this.cod_id,
            cod_ign: this.cod_ign,
            pubgm_ign: this.pubgm_ign,
            pubgm_id: this.pubgm_id,
            r6_id: this.r6_id,
            mlbb_id: this.mlbb_id,
            mlbb_ign: this.mlbb_ign,
            discord_name: this.discord_name,
            riot_id: this.riot_id,
            battle_id: this.battle_id,
        })
        .then((response) => {
            if (response.status === 201) {
                this.$notify({
                    title: 'Success.',
                    group: 'notifications',
                    text: 'Profile Updated Successfully.',
                });
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
            }
        });
    },
  },
  mounted() {
    this.Default();
  },
};
</script>

<style scoped>
select{
    padding: 12px;
    width: -webkit-fill-available;
    background: #111e2a;
    outline: none;
    border: none;
    color: white;
    border-radius: 10px;
    -webkit-appearance: none;
    margin-bottom: 10px;
}
.edit_wrapper{
    display: flex;
    justify-content: center;
}
.menu-item{
    padding: 0 13px;
    cursor: pointer;
    text-align: left;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .42px;
    line-height: 12px;
    color: #85a4bf;
    border-bottom: 1px solid #2c3f4f;
}
.menu-item i {
    width: 30px;
    height: 40px;
    font-size: 18px;
    color: #85a4bf;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
}
.menu-item:hover {
    color: white;
}
.menu-item:hover i {
    color: white;
}
.edit{
    width: 100%;
}
.form_wrapper{
  z-index: 1;
  display: flex;
  width: 100%;
}
.side_menu{
    width: 260px;
    background: #1b2731;
    box-shadow: 0 0 20px 0 rgba(0,0,0,.5);
    border-radius: 6px;
}
.form{
    width: 100%;
    background: #1b2731;
    box-shadow: 0 0 20px 0 rgba(0,0,0,.5);
    border-radius: 6px;
    margin-left: 24px;
    padding: 22px;
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
}

.wrapper img {
    width: 60%;
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
  padding: 9px 0;
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
    width: 20%;
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
.section_bottom_title_wrap {
    display: flex;
    border-bottom: 2px solid #ffffff0f;
    padding-bottom: 14px;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
}
.section_bottom_title_wrap_text {
    cursor: pointer;
    position: relative;
    font-size: 16px;
    text-transform: uppercase;
    color: white;
    display: inline-block;
    /*padding: 0 20px;*/
    font-weight: 600;
}
.section_bottom_title_wrap_text:before {
    content: "";
    position: absolute;
    bottom: -16px;
    height: 2px;
    width: 100%;
    left: 0;
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    box-shadow: 0 0 9px #009fd1c7;
}
@media (min-width: 320px) and (max-width: 767px) {
  .wrapper{
    width: 90%;
  }
  .form .input-wrapper{
    width: 88%;
  }
  .basic{
    padding: 10px;
  }
}
</style>
