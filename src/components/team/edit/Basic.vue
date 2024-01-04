<template>
  <div class="basic" v-if="team_data">
       <div class="section_bottom_title_wrap">
            <div class="section_bottom_title_wrap_text">TEAM DETAILS</div>
        </div>
        <form novalidate>
            <div class="input-wrapper">
                <span class="floating-label">TEAM NAME</span>
                <input type="text" required v-model="team_name" />
                <div class='validator error' v-if="team_name_error" >{{team_name_error}}</div>
            </div>
            <div class="input-wrapper">
                <span class="floating-label"   >TEAM ALIAS   ( This field cannot be changed )</span>
                <input type="text" class="disabled" required v-model="team_alias" disabled />
            </div>
            <div class="input-wrapper">
                <span class="floating-label" >COUNTRY</span>
                <country-select v-model="country" :country="country" topCountry="IN" />
                <div class="validator error" v-if="country_error" >{{country_error}}</div>
            </div>
            <div class="input-wrapper">
                <span class="floating-label" >PHONE</span>
                <VuePhoneNumberInput class="phone"  :default-country-code="country" @update="updatePhoneNumber"  :required="true" :error="true"  :dark="true" :dark-color="'#111e2a'" v-model="phone" />
                <div class="validator error" v-if="phone_error" >{{phone_error}}</div>
            </div>
            <button class="btn" @click.prevent="Validate()">UPDATE</button>
        </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'Basic',
  data() {
      return {
        team_name: null,
        team_name_error: null,
        team_alias: null,
        team_alias_error: null,
        country: null,
        country_error: null,
        phone: null,
        phone_error: null,
        country_code: null,
        // regex: /\s/,
        regex: /^\s*$/,
      };
  },
  computed: {
    ...mapGetters({
        team_data: 'team/Team',
    }),
  },
  methods: {
    updatePhoneNumber(data) {
        if (!data.isValid) {
            this.phone_error = 'Invalid Phone Number.';
        } else {
            this.phone_error = null;
            this.country_code = data.countryCallingCode;
        }
    },
    Details() {
      if (this.team_data) {
        this.team_name = this.team_data.team_name;
        this.team_alias = this.team_data.team_alias;
        this.country = this.team_data.location;
        this.phone = this.team_data.phone;
      }
    },
    Validate() {
      if (this.team_name === '') {
        this.team_name_error = 'This Field Is Required.';
      } else if (this.regex.test(this.team_name)) {
        this.team_name_error = 'This Field Is Required.';
      } else {
        this.team_name_error = null;
      }
      if (this.country === '') {
        this.country_error = 'This Field Is Required.';
      } else {
        this.country_error = null;
      }

      if (!this.team_name_error && !this.country_error && !this.phone_error) {
         this.Update();
      }
    },
     Update() {
        axios.put('/team/edit_team', {
            team_name: this.team_name,
            location: this.country,
            phone: this.phone,
            country_code: this.countrycode,
            team_id: this.team_data.id,
        })
        .then((response) => {
            if (response.status === 201) {
                this.$notify({
                    title: 'Success.',
                    group: 'notifications',
                    text: 'Team Profile Updated Successfully.',
                });
            }
        })
        .catch(() => {
           this.$notify({
                type: 'warn',
                title: 'WARNING',
                group: 'notifications',
                text: 'TRY AGAIN.',
            });
        });
      },
  },
  mounted() {
    this.Details();
  },
};
</script>

<style scoped>
.error{
    color: red !important;
}
.validator{
  padding: 4px 10px;
  display: flex;
  font-size: 12px;
  color: rgba(219,219,232,.4);
}
.disabled{
  color: grey !important;
  cursor: not-allowed;
}
form{
  display: flex;
  flex-direction: column;
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
.input-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom:10px;
}
.floating-label{
  color: #85a4bf;
  font-size: 13px;
}
.input-wrapper .floating-label{
  padding: 5px;
}
.input-wrapper .phone{
  border: 2px solid #364444;
  outline: none;
  border-radius: 8px;
}
.phone input {
  border-radius: 8px !important;
}
.input-wrapper input {
  border: 2px solid #364444;
  outline: none;
  padding: 10px;
  color:white;
  background:rgb(17, 30, 42) ;
  border-radius: 8px;
}
.input-wrapper select{
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #364444;
  outline: none;
  background:rgb(17, 30, 42) ;
  color:white;
}
.input-wrapper select option{
  color: white;
}
.btn{
    background: linear-gradient(90deg,#1b8fe4,#2e88ef);
    width: 30%;
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
  .basic{
      padding: 15px;
  }
  .btn{
    width: 100%;
  }
}
</style>
