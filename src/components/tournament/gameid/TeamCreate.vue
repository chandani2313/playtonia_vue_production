<template>
  <div class="create_team">
       <form novalidate>
            <div class="input-wrapper">
                <input type="text" required v-model="team_name" />
                <span class="floating-label"  >TEAM NAME</span>
                <div class="error" v-if="team_name_error">{{team_name_error}}</div>
            </div>
            <div class="input-wrapper">
                <input type="text" required  v-model="team_alias"/>
                <span class="floating-label"  >TEAM ALIAS</span>
                <div class="error" v-if="team_alias_error">{{team_alias_error}}</div>
            </div>
            <!-- <div class="input-wrapper">
                <div class="phone__wrap select_dropdown">
                    <select v-model="game" >
                        <option  disabled value>Select Game</option>
                        <option value="CODM" >CODM</option>
                        <option value="PUBGM" >PUBGM</option>
                        <option value="R6" >RAINBOW SIX SEIGE</option>
                        <option value="MLBB" >MOBILE LEGENDS BANG BANG</option>
                    </select>
                </div>
                <div class="error" v-if="game_error">{{game_error}}</div>
            </div> -->
            <div class="input-wrapper">
                <country-select v-model="country" :country="country" topCountry="IN" />
                <div class="error" v-if="country_error">{{country_error}}</div>
            </div>
            <div class="input-wrapper">
                <VuePhoneNumberInput  :default-country-code="country" @update="updatePhoneNumber" :required="true" :error="true"  :dark="true" :dark-color="'#111e2a'" style="font-size:20px; margin-top:20px;" v-model="phone" />
                <div class="error" v-if="phone_error">{{phone_error}}</div>
            </div>
            <button class="btn" @click.prevent="CreateTeam()" >CREATE</button>
        </form>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
  name: 'create_team',
  data() {
    return {
        team_name: null,
        team_alias: null,
        country: null,
        phone: null,
        game: '',
        phone_regx: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,/* eslint-disable-line */
        team_name_error: null,
        team_alias_error: null,
        game_error: null,
        country_error: null,
        phone_error: null,
        default_code: null,
        countrycode: null,
    };
  },
  components: {
  },
  props: ['game_name'],
  methods: {
    toggle() {
        this.$emit('team');
    },
    updatePhoneNumber(data) {
        if (!data.isValid) {
            this.phone_error = 'Invalid Phone Number.';
        } else {
            this.phone_error = null;
            this.countrycode = data.countryCallingCode;
        }
    },
    CreateTeam() {
        if (this.team_name === null) {
            this.team_name_error = 'This Field Is Required.';
        } else {
            this.team_name_error = null;
        }
        if (this.team_alias === null) {
            this.team_alias_error = 'This Field Is Required.';
        } else {
            this.team_alias_error = null;
        }
        if (this.game === null || this.game === '') {
            this.game_error = 'This Field Is Required.';
        } else {
            this.game_error = null;
        }
        if (this.country === null) {
            this.country_error = 'This Field Is Required.';
        } else {
            this.country_error = null;
        }
        if (this.phone === null) {
            this.phone_error = 'This Field Is Required.';
        }
        if (this.team_name_error === null && this.team_alias_error === null  && this.country_error === null && this.phone_error === null) {
            axios
            .post('/team/create_team', {
            team_name: this.team_name,
            team_alias: this.team_alias,
            location: this.country,
            phone: this.phone,
            game: this.game_name,
            country_code: this.countrycode,
            })
            .then((response) => {
                if (response.status === 201) {
                    this.$emit('team');
                    this.$notify({
                        title: 'Success.',
                        group: 'notifications',
                        text: 'Team Created Successfully.',
                    });
                    this.$emit('join');
                    this.$emit('close');
                }
            })
            .catch((e) => {
                if (e.response.data.response) {
                    const [ResponseData] = e.response.data.response;
                    if (ResponseData === 'team_alias_exists') {
                        this.team_alias_error = 'Team Alias Already Taken.'
                    }
                    if (ResponseData === 'team_for_player_exists') {
                        this.$emit('team');
                        this.$notify({
                            type: 'warn',
                            title: 'Warning.',
                            group: 'notifications',
                            text: 'Team Already Exists.',
                        });
                    }
                }
                
                if (e.response.data.team_name) {
                    const [NameData] = e.response.data.team_name;
                    this.team_name_error = NameData;
                }
                if (e.response.data.team_alias) {
                    const [AliasData] = e.response.data.team_alias;
                    this.team_alias_error = AliasData;
                }
                
            });
        }
    },
  },
};
</script>


<style scoped>
.create_team{
    background: transparent !important;
    box-shadow: unset;
    width: 100% !important;
    padding: unset !important;
}
form{
    width: 100%;
}
.close{
    margin-right: 22px;
    font-size: 20px;
    color: white;
    font-weight: 400;
    cursor: pointer;
}
.phone__wrap input:valid{
    border: 2px solid #1b8fe4 !important;
}
label{
    font-size: 12px;
    color: #848484;
    padding: 10px;
    font-weight: 700;
}
select{
    padding: 14px;
    width: -webkit-fill-available;
    background: #111e2a;
    outline: none;
    border: none;
    color: white;
    border-radius: 10px;
    -webkit-appearance: none;
}
.formphonenumber_code{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 40%;
    margin-right: 20px;
}
.formphonenumber_code::before, .formphonenumber_code::after {
    content: "";
    position: absolute;
    pointer-events: none;
}
.formphonenumber_code::before {
    width: 25px;
    height: 43px;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0 3px 3px 0;
}
.formphonenumber_code::before {
    background-color: rgba(0,0,0,.15);
}
.formphonenumber_code::after {
    color: #6c829d;
    content: "\25BC";
    height: 1em;
    font-size: .625em;
    line-height: 1;
    right: 7.5px;
    top: 16px;
}
.select_dropdown{
    position: relative;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.select_dropdown::before, .select_dropdown::after {
    content: "";
    position: absolute;
    pointer-events: none;
}
.select_dropdown::before {
    width: 25px;
    height: 43px;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0 12px 12px 0;
}
.select_dropdown::before {
    background-color: rgba(0,0,0,.15);
}
.select_dropdown::after {
    color: #6c829d;
    content: "\25BC";
    height: 1em;
    font-size: .325em;
    line-height: 1;
    right: 7.5px;
    top: 16px;
}
.phone__wrap{
    width: -webkit-fill-available;
    display: flex;
    flex-direction: row;
    margin-top: 18px;
}
.phone__wrap select{
    width: 100%;
}
.modal__wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000073;
    z-index: 3;
}
.modal__wrapper .table__wrapper{
    width: 480px;
    background: #1b2731;
    border-radius: 10px;
    box-shadow: -6px 7px 20px 3px rgba(0,0,0,.16);
    margin: 90px auto;
}
.table__wrapper .table__header{
    width: 100%;
    height: 65px;
    border-top-right-radius: 10px;
    display: flex;
    align-items: center;
    border-top-left-radius: 10px;
    /* background-image: url('../../assets/img/table__img.png'); */
    background-repeat: no-repeat;
    background-position: right;
    position: relative;
}
.table__header .heading{
    width: fit-content;
    color: white;
    font-weight: 700;
    margin-left: 18px;
    font-size: 13px;
    display: flex;
    align-items: center;
    height: 100%;
}
.table__wrapper .table__body{
    display: flex;
    padding: 13px;
    flex-direction: column;
}
.table__header .backdrop{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    z-index: 2;
    background: #111c25e0;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 100%;
    justify-content: space-between;
}
.table__body .input-wrapper{
  width: 100%;
  position: relative;
  /* margin-top: 10px; */
}
.table__body form input {
  border: 2px solid #364444;
  padding: 12px;
  border-radius: 11px;
  background: transparent;
  outline: none;
  color: white;
  box-shadow: 5px 10px 20px #141f28;
  width: -webkit-fill-available;
  font-weight: 700;
}
#border_reset{
    border: 2px solid #364444 ;
}
.table__body .floating-label{
  position: absolute;
  font-size: 10px;
  top: 29px;
  font-weight: 700;
  left: 15px;
  color: #848484;
  pointer-events: none;
  transition: 0.2s ease all;
}
.table__body form input:valid {
  border: 2px solid #1b8fe4;
}
.err{
  border: 2px solid red!important;
}
.err_text{
  color: red !important;
}
.error {
    font-size: 11px;
    padding: 8px;
    color: red !important;
}
.table__body form input:valid~ .floating-label {
  color: #1b8fe4;
}
input:focus ~ .floating-label,input:not(:focus):valid ~ .floating-label{
  top: 5px;
  left: 20px;
  background: #192632;
  padding: 6px;
  font-size: 10px;
}
.table__body form input:focus {
  border: 2px solid #1b8fe4 !important;
}
.table__body form input:focus ~ .floating-label {
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
@media (min-width: 320px) and (max-width: 480px) {
    .modal__wrapper .table__wrapper{
        width: 90%;
        margin: 115px auto;
    }
    .mlbb_details{
        overflow: auto;
        height: 350px;
    }
}
</style>
