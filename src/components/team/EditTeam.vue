<template>
  <div class="edit">
      <div class="edit_wrapper">
          <div class="form_wrapper">
                <div class="side_menu">
                        <router-link  v-if="team_data" class="menu-item"  active-class="active" tag="a" :to="{ name: 'TeamDetails' ,params: {alias: team_data.team_alias } }"  exact>
                            <i class="fas fa-cog"></i>Team Details
                        </router-link>
                        <router-link  v-if="team_data" class="menu-item"  active-class="active" tag="a" :to="{ name: 'Rooster' ,params: {alias: team_data.team_alias } }"  exact>
                            <i class="fas fa-users"></i>Rooster Settings
                        </router-link>
                </div>
                <div class="inner_nav">
                    <div class="inner_nav-links">
                        <router-link active-class="active"  v-if="team_data"   tag="a" :to="{ name: 'TeamDetails' ,params: {alias: team_data.team_alias } }"  exact>
                            <span>Team Details</span>
                        </router-link>
                        <router-link active-class="active"  v-if="team_data"   tag="a" :to="{ name: 'Rooster' ,params: {alias: team_data.team_alias } }"  exact>
                            <span>Rooster Settings</span>
                        </router-link>
                    </div>
                </div>
              <div class="form">
                  <router-view ></router-view>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
  name: 'Edit',
  data() {
      return {
          country: null,
      };
  },
  computed: {
    ...mapGetters({
        team_data: 'team/Team',
    }),
  },
  mounted() {
      if (this.team_data) {
          if (!this.team_data.captain) {
              this.$router.push('/');
          }
      }
  },
};
</script>

<style scoped>
.inner_nav{
    display: none;
}
.side_menu{
    display: block;
}

.inner_nav > .inner_nav-links {
    display: flex;
    font-size: 13px;
    left: 10px;
    position: relative;
}
.inner_nav > .inner_nav-links > .active {
    color: #fff;
    background: #111c25;
    box-shadow: inset 0px -10px 15px 1px #000000d4;
}

.inner_nav > .inner_nav-links > a {
    padding: 12px 15px;
    text-decoration: none;
    color: #ffffff82;
    display: flex;
    justify-content: space-evenly;
    /* width: 20%; */
    text-transform: uppercase;
    position: relative;
    /* border-width: 0px; */
    transition: 0.5s ease;
    transform: skew(-21deg);
}
.inner_nav > .inner_nav-links > a > span {
      display: inline-block;
    -webkit-transform: skew(21deg);
    transform: skew(21deg);
}
.inner_nav > .inner_nav-links > a:before {
    content: "";
    position: absolute;
    top: 5px;
    width: 1px;
    background-color: #2a2d30;
    /* background-color: #1f3043; */
    -webkit-box-shadow: 1px 0 0 #000000;
    box-shadow: 1px 0 0 #000000;
    height: calc(100% - 10px);
    right: 3px;
}
.inner_nav > .inner_nav-links > a::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: transparent;
    transition: 0.5s ease;
    width: 0;
    margin-bottom: -2px;
}
.inner_nav > .inner_nav-links > a:hover {
    color: #fff;
}
.inner_nav > .inner_nav-links > a:hover::after {
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    width: 100%;
    box-shadow: 0 0 9px #009fd1c7;
}
.inner_nav > .inner_nav-links > .active:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    /* background-color: #4facfe; */
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    width: 100%;
    margin-bottom: -2px;
    box-shadow: 0 0 9px #009fd1c7;
}
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
    .inner_nav{
        width: 100%;
        position: relative;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        border-bottom: 2px solid #ffffff0f;
    }
    .side_menu{
        display: none;
    }
    .form_wrapper{
        flex-direction: column;
    }
    .form{
        margin-left: 0;
        padding: 0;
    }
}
</style>
