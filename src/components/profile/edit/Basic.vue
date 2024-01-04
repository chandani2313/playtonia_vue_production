<template>
  <div class="basic">
       <div class="section_bottom_title_wrap">
            <div class="section_bottom_title_wrap_text">BASIC DETAILS</div>
        </div>
        <form novalidate>
            <div class="input-wrapper">
                <input type="text" required v-model="first_name" />
                <span class="floating-label"   >First Name</span>
                <div class='validator error' v-if="first_name_error" >{{first_name_error}}</div>
            </div>
            <div class="input-wrapper">
                <input type="text" required v-model="last_name" />
                <span class="floating-label"   >Last Name</span>
                <div class='validator error' v-if="last_name_error" >{{last_name_error}}</div>
            </div>
            <div class="input-wrapper">
                <country-select v-model="country" :country="country" topCountry="IN" />
                <div class="error" v-if="country_error" >{{country_error}}</div>
            </div>
            <div class="input-wrapper">
                <input type="text" required v-model="city"  />
                <span class="floating-label"  >City</span>
                <div class='validator error' v-if="city_error" >{{city_error}}</div>
            </div>
            <div class="input-wrapper">
                <VuePhoneNumberInput  :default-country-code="country" @update="updatePhoneNumber" :required="true" :error="true"  :dark="true" :dark-color="'#111e2a'" style="font-size:20px; margin-top:20px;" v-model="phone" />
                <div class="error" v-if="phone_error" >{{phone_error}}</div>
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
          first_name: null,
          last_name: null,
          country: null,
          city: null,
          phone: null,
          first_name_error: null,
          last_name_error: null,
          country_error: null,
          city_error: null,
          phone_error: null,
          countrycode: null,
      };
  },
  components: {
  },
  methods: {
      updatePhoneNumber(data) {
            if (!data.isValid) {
                this.phone_error = 'Invalid Phone Number.';
            } else {
                this.phone_error = null;
                this.countrycode = data.countryCallingCode;
            }
        },
      ProfileData() {
        axios.get('/player/edit_profile_data')
        .then((response) => {
            if (response.status === 201) {
                this.first_name = response.data.first_name;
                this.last_name = response.data.last_name;
                this.country = response.data.location;
                this.city = response.data.city;
                this.phone = response.data.phone;
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
        axios.put('/player/edit_profile', {
            first_name: this.first_name,
            last_name: this.last_name,
            location: this.country,
            city: this.city,
            phone: this.phone,
            country_code: this.countrycode,
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
                if (e.response.data.first_name) {
                    const [FirstName] = e.response.data.first_name;
                    this.first_name_error = FirstName;
                } else {
                    this.first_name_error = null;
                }
                if (e.response.data.last_name) {
                    const [LastName] = e.response.data.last_name;
                    this.last_name_error = LastName;
                } else {
                    this.last_name_error = null;
                }
                if (e.response.data.location) {
                    const [Country] = e.response.data.location;
                    this.country_error = Country;
                } else {
                    this.country_error = null;
                }
                if (e.response.data.city) {
                    const [City] = e.response.data.city;
                    this.city_error = City;
                } else {
                    this.city_error = null;
                }
                if (e.response.data.phone) {
                    const [Phone] = e.response.data.phone;
                    this.phone_error = Phone;
                } else {
                    this.phone_error = null;
                }
            }
        });
      },
  },
  mounted() {
      this.ProfileData();
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
  margin-bottom: 14px;
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
