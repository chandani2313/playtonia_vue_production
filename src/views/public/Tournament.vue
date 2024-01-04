<template>
  <div class="tournament">
      <TopSection v-if="tournament" :tournament=tournament />
      <div class="bottom-container">
          <div class="bottom-wrap">
            <div class="nav">
                <div class="nav-links">
                    <router-link data-animation="ripple"  tag="a" :to="{ name: 'PTOverview' ,params: {id: this.$route.params.id}}"  active-class="active" exact>overview</router-link>
                    <router-link data-animation="ripple"  tag="a" :to="{ name: 'PPrize' ,params: {id: this.$route.params.id}}"  active-class="active" exact>prize</router-link>
                    <!-- <router-link data-animation="ripple"  tag="a" :to="{ name: 'Participants' ,params: {id: this.$route.params.id}}"  active-class="active" exact>participants</router-link> -->
                    <router-link data-animation="ripple"  tag="a" :to="{ name: 'PBrackets' ,params: {id: this.$route.params.id}}"  active-class="active" exact>brackets</router-link>
                    <router-link data-animation="ripple"  tag="a" :to="{ name: 'PSchedule' ,params: {id: this.$route.params.id}}"  active-class="active" exact>schedule</router-link>
                    <!-- <a data-animation="ripple" class="" href="#">participants</a> -->
                    <!-- <a data-animation="ripple" class="" href="#">schedule</a> -->
                    <!-- <a data-animation="ripple" class="" href="#">brackets</a> -->
                    <router-link data-animation="ripple"  tag="a" :to="{ name: 'PInfo' ,params: {id: this.$route.params.id}}"  active-class="active" exact>info</router-link>
                </div>
            </div>
            <router-view></router-view>
          </div>
      </div>
      <AuthMobile v-if="auth"  />
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */
import axios from 'axios';
import TopSection from '../../components/tournament/TopSection.vue';
import AuthMobile from './AuthMobile.vue';
// @ is an alias to /src

export default {
  name: 'Tournament',
  data() {
    return {
        tournament: null,
        auth: false,
    };
  },
  components: {
      TopSection,
      AuthMobile,
  },
  methods: {
    Tournament() {
    axios
    .get('/tournament/'.concat(this.$route.params.id))
    .then((response) => {
        if (response.status === 201) {
            this.tournament = response.data;
        }
    })
    .catch((e) => {
        if (e.response.status === 400) {
            this.$router.push('/');
        }
    });
    },
  },
  mounted() {
      this.Tournament();
      if (localStorage.getItem('token')) {
          this.$router.push({ name: 'Tournament', params: { id: this.$route.params.id } });
      }
      if (this.auth === false) {
          this.$router.replace({ s: 'close' });
      }
  },
  watch: {
    '$route.query.s': function (data) {
        this.auth = true;
        if (data === 'close') {
             this.auth = false;
        }
         if (!data) {
             this.auth = false;
        }
        if (data === 'close' && this.auth === false) {
             this.auth = false;
        }
    },
    immediate: true,
  },
};
</script>

<style scoped>
.tournament{
    margin-bottom: 200px;
}
.bottom-container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}
.bottom-wrap {
    padding: 20px 16px;
}
.nav {
    background-color: #1b2731;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: 20px;
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
}


.nav > .nav-links {
  display: flex;
  font-size: 16px;
}

.nav > .nav-links > a {
  padding: 20px 10px;
  text-decoration: none;
  color: #ffffff82;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  text-transform: uppercase;
  position: relative;
  /*border-width: 0px;*/
  transition: 0.5s ease;
}
.nav > .nav-links > a::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background-color: transparent;
    transition: 0.5s ease;
    width: 0;
}
.nav > .nav-links > a:hover::after {
    /*background-color: #4facfe;*/
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    width: 100%;
}


.nav > .nav-links > .active {
 color:#fff;
 background: #111c25;
 box-shadow: inset 0px -10px 15px 1px #000000d4;
}
.nav > .nav-links > .active:after{
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    /*background-color: #4facfe;*/
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    width: 100%;
}
.nav > .nav-links > a:hover {
    color:#fff;
}
.nav > .nav-links > a:before{
    content: "";
    position: absolute;
    top: 5px;
    width: 1px;
    background-color: #2a2d30;
    /* background-color: #101820; */
    -webkit-box-shadow: 1px 0 0 #000000;
    box-shadow: 1px 0 0 #000000;
    height: calc(100% - 10px);
    right:0px;
}

/* @media (min-width: 320px) and (max-width: 767px) {
    .nav{
        display: none;
    }
} */
*, *::before, *::after {
-webkit-box-sizing: border-box;
box-sizing: border-box;
}
img {
max-width: 100%;
height: auto;
}
figure {
margin: 0!important;
}
a{
text-decoration: none;
}
.evnt-top-wrap{
padding: 1.5rem;
}
.evt-header{
position: relative;
background: #171a20;
width: 100%;
/*min-height: 480px;
max-height: 480px;*/
background-size: cover;
background-position: 50%;
border-radius: 10px;
overflow: hidden;
}
.evt-gradient{
opacity: 1;
background-size: 2px 2px;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
}
.evt-overlay{
/*background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(0, 0, 0)100%);*/
background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(15, 15, 15)100%);
position: absolute;
height: 100%;
width: 100%;
}
.evt-inner{
width: 100%;
min-height: 420px;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-flow: column;
flex-flow: column;
position: relative;
max-width: 1400px;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
padding-left: 40px;
padding-right: 40px;
/*max-width: 1360px;*/
box-sizing: border-box;
margin: auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
}
.evt-inner-section{
display: -webkit-box;
display: -ms-flexbox;
display: flex;
width: 100%;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
position: relative;
}
/*.evt-inner-section{
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-flow: column;
flex-flow: column;
}
*/
.evt-logo{
/*width: 450px;
height: 450px;*/
width: 200px;
min-width: 200px;
background: transparent;
background-size: contain;
background-repeat: no-repeat;
background-position: 50%;
}
.evt-info{
display: -webkit-box;
display: -ms-flexbox;
display: flex;
width: 100%;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
}
/*.evt-info{
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-flow: column;
flex-flow: column;
margin-top: 20px;
margin-left: 0;
margin-right: 0;
}*/
.evt-info-name{
margin-left: 1.5em;
align-self: baseline;
}
.evt-info-name-title {
color: #fff;
font-size: 30px;
line-height: 1em;
margin-bottom: 10px;
letter-spacing: .8px;
font-weight: 600;
/*max-width: 400px;*/
}
.evt-info-name-organized{
color: #999;
}
.evt-info-name-organized span{
font-weight: 800;
background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 80%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-transform: uppercase;
/*font-style: italic;*/
}
.evt-info-join{
/*width: 362px;*/
color: #fff;
margin: auto;
text-align: center;
white-space: nowrap;
}
.evt-info-join-date{
line-height: 1.2rem;
display: inline-block;
padding: 5px;
}
.evt-info-join-joinbtn {
margin: auto auto 12px;
width: max-content;
padding: 8px 40px;
font-size: 16px;
line-height: 1.5em;
border-radius: 4px;
color: #1b2731d1;
background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
/*display: inline-block;
margin-bottom: 12px;*/
cursor: pointer;
font-weight: 600;
text-transform: uppercase;
}
.evt-info-join-joinbtn:hover{
box-shadow: 0px 0px 10px 0px #3CA3F0;
color: #ffffff;
}
.nav {
background-color: #1b2731;
width: 100%;
position: relative;
overflow: hidden;
border-radius: 4px;
margin-bottom: 20px;
box-shadow: 2px 3px 6px rgba(0,0,0,.5);
}
.nav > .nav-links {
display: flex;
font-size: 16px;
}
.nav > .nav-links > a {
padding: 20px 10px;
text-decoration: none;
color: #ffffff82;
display: flex;
justify-content: space-evenly;
width: 100%;
text-transform: uppercase;
position: relative;
/*border-width: 0px;*/
transition: 0.5s ease;
}
.nav > .nav-links > a::after {
content: "";
display: block;
position: absolute;
left: 0;
bottom: 0;
height: 3px;
width: 100%;
background-color: transparent;
transition: 0.5s ease;
width: 0;
}
.nav > .nav-links > a:hover::after {
/*background-color: #4facfe;*/
background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
width: 100%;
}
.nav > .nav-links > .active {
color:#fff;
background: #111c25;
box-shadow: inset 0px -10px 15px 1px #000000d4;
}
.nav > .nav-links > .active:after{
content: "";
display: block;
position: absolute;
left: 0;
bottom: 0;
height: 3px;
/*background-color: #4facfe;*/
background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
width: 100%;
}
.nav > .nav-links > a:hover {
color:#fff;
}
.nav > .nav-links > a:before{
content: "";
position: absolute;
top: 5px;
width: 1px;
background-color: #2a2d30;
/* background-color: #101820; */
-webkit-box-shadow: 1px 0 0 #000000;
box-shadow: 1px 0 0 #000000;
height: calc(100% - 10px);
right:0px;
}
.nav > .nav-links > a:last-child:before{
display: none;
}
.mob_wrapper_outer {
display: none;
}
.bottom-container {
max-width: 1200px;
margin-left: auto;
margin-right: auto;
}
.bottom-wrap {
padding: 20px 16px;
}
.eventoverview-eventdetails_wrap, .eventoverview-eventparticipant_wrap, .eventoverview-eventprize_wrap{
margin-bottom: 1.5rem;
}
.eventdetails_wrap{
display: grid;
/*grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));*/
grid-template-columns:300px auto;
grid-gap: 10px;
grid-auto-flow: dense;
}
.eventdetails_wrap-details{
position: relative;
border-radius: 4px;
overflow: hidden;
box-shadow: 2px 3px 6px rgba(0,0,0,.5);
background: #1b2731;
padding: 10px;
}
.eventdetails_wrap-details-heading{
font-size: 14px;
text-transform: uppercase;
color: white;
padding: 10px 0;
font-weight: 600;
}
.eventdetails_wrap-details-info{
padding: 5px;
}
.eventdetails_wrap-details-info-eventtype,.eventdetails_wrap-details-info-eventmode{
margin-bottom: 10px;
}
.eventdetails_wrap-details-info-eventtype-head{
font-size: 13px;
text-transform: uppercase;
color: white;
font-weight: 600;
line-height: 1.2rem;
margin-bottom: 5px;
}
.eventdetails_wrap-details-info-eventtype-details{
white-space: nowrap;
display: flex;
flex-direction: row;
background: #111a23;
color: #fff;
border-radius: 4px;
}
.eventdetails_wrap-details-info-eventtype-details-icon{
padding: 8px;
transform: rotateZ(90deg);
}
.eventdetails_wrap-details-info-eventtype-details-text{
display: flex;
text-transform: uppercase;
font-size: 12px;
padding-left: 10px;
width: 100%;
height: auto;
align-items: center;
}
.eventdetails_wrap-details-info-second-details{
display: grid;
grid-template-columns:auto auto;

grid-column-gap: 10px;
}
.eventdetails_wrap-details-info-second-details > div{
background: #111a23;
white-space: nowrap;
display: flex;
flex-direction: row;
background: #111a23;
color: #fff;
border-radius: 4px;
overflow: hidden;
justify-content: center;
align-items: center;
}
.eventdetails_wrap-details-info-second-details-second{
font-size: 12px;
text-transform: uppercase;
}
.eventdetails_wrap-details-info-platform-admin{
display: flex;
justify-content: space-between;
margin-bottom: 10px;
}
.eventdetails_wrap-details-info-platform-icon{
width: 32px;
margin:auto;
white-space: nowrap;
}
.eventdetails_wrap-details-info-admin-icon{
display: flex;
justify-content: center;
align-items: center;
}
.eventdetails_wrap-details-info-platform-icon-admin {
font-size: 22px;
color: #fff;
cursor:pointer;
}
.eventdetails_wrap-details-info-platform-icon-admin i:hover ,.eventdetails_wrap-details-info-platform-icon-discord i:hover {
color: #3fd2ff;
transform: scale(1.1);
transition: all .15s;
box-shadow: 0 10px 14px -4px #3fd2ff;

}
.eventdetails_wrap-details-info-platform-icon-admin i ,.eventdetails_wrap-details-info-platform-icon-discord {
display: block;
}
.eventdetails_wrap-details-info-platform-icon-discord{
font-size: 22px;
margin-left: 10px;
color: #7289da;
cursor:pointer;
}
.eventdetails_wrap-details-info-country{
white-space: nowrap;
display: flex;
flex-direction: row;
background: #111a23;
color: #fff;
border-radius: 4px;
overflow: hidden;
justify-content: center;
align-items: center;
width: 50%;
padding: 5px;
}
.eventdetails_wrap-details-info-country-flag{
width: 25px;
}
.eventdetails_wrap-details-info-country-flag img{
display: block;
}
.eventdetails_wrap-details-info-country-name{
font-size: 12px;
text-transform: uppercase;
padding: 5px;
padding-left: 15px;
}
.eventdetails_wrap-description{
display: flex;
flex-direction: column;
justify-content: center;
}
.eventdetails_wrap-description-content{
padding: 10px;
color: white;
font-size: 14px;
line-height: 1.2rem;
}
.eventparticipant_wrap-prize{
display: flex;
border-bottom: 2px solid #ffffff0f;
padding-bottom: 14px;
margin-bottom: 30px;
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
position: relative;
font-size: 16px;
text-transform: uppercase;
color: white;
display: inline-block;
padding: 0 10px;
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
.section_bottom_title_wrap_morebtn{
/*padding: 0px 15px;*/
color: #fff;
display: inline-block;
cursor: pointer;
position: relative;
width: 95px;
text-align: center;
font-size: 12px;
line-height: 1;
font-weight: 700;
}
.section_bottom_title_wrap_morebtn:hover {
color: #3fd2ff;
}
.section_bottom_title_wrap_morebtn::after {
content: "\2192";
opacity: 0;
position: absolute;
right: 16px;
top: 25%;
-webkit-transform: translate(0, -50%);
transform: translate(0, -50%);
transition: all 0.3s;
}
.section_bottom_title_wrap_morebtn:hover::after {
-webkit-transform: translate(5px, -50%);
transform: translate(5px, -50%);
opacity: 1;
}
.eventparticipant-wrap{
/*grid-template-columns: repeat(auto-fill, minmax(193px, 1fr));*/
grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
grid-gap: 10px;
grid-auto-flow: dense;
display: grid;
}
/*.eventparticipant-wrap-card{
position: relative;
border-radius: 4px;
overflow: hidden;
box-shadow: 2px 3px 6px rgba(0,0,0,.5);
background: #1b2731;
}
.eventparticipant-wrap-card:hover{
transform: scale(1.04);
box-shadow: 0px 1px 20px 0px #81888f2b;
transform: translateY(-5px);
transition: all .15s;
box-shadow: 0px 0px 10px 0px #00c7ff;
}*/
.eventparticipant-card{
position: relative;
border-radius: 4px;
overflow: hidden;
box-shadow: 2px 3px 6px rgba(0,0,0,.5);
background: #1b2731;
flex-direction: row;
-ms-flex-align: stretch;
align-items: stretch;
position: relative;
display: flex;
border-radius: 4px;
padding: 7px;
}
.eventparticipant-card:hover{
transform: translateY(-5px);
transition: all .15s;
box-shadow: 0px 0px 3px 0px #00c7ff;
}
.eventparticipant-card_fig{
flex-basis: 40px;
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 4px;
overflow: hidden;
min-width: 40px;
}
.eventparticipant-card_conent{
flex: 1;
display: -ms-flexbox;
display: flex;
-ms-flex-direction: column;
flex-direction: column;
-ms-flex-pack: center;
justify-content: center;
padding: 0px 15px;
}
.eventparticipant-card_name{
color: #fff;
font-size: 12px;
margin-bottom: .4em;
text-transform: uppercase;
line-height: 1.2;
letter-spacing: -.02em;
font-weight: 700;
text-align: left;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
max-width: 130px;
}
.eventparticipant-card_info{
display: flex;
color: #ffffff82;
}
.eventparticipant-card_info_flag{
width: 20px;
}
.eventparticipant-card_info_flag img{
display: block;
}
.eventparticipant-card_info_cnt{
padding-left: 10px;
font-size: 10px;
display: flex;
flex-direction: column;
justify-content: center;
}
.eventparticipant-card-onlinedot{
position: absolute;
right: 10px;
top: 10px;
width: 5px;
height: 5px;
background-color: #38ff00;
border-radius: 50%;
box-shadow: 0 0 9px #38ff00c7;
}
.prize-wrap{
grid-template-columns: repeat(auto-fill, minmax(193px, 1fr));
grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
grid-gap: 10px;
grid-auto-flow: dense;
display: grid;
}
.prize-wrap-card{
position: relative;
border-radius: 4px;
overflow: hidden;
box-shadow: 2px 3px 6px rgba(0,0,0,.5);
background: #1b2731;
}
.prize-wrap-card:hover{
/*transform: scale(1.04);*/
transform: translateY(-5px);
transition: all .15s;
box-shadow: 0px 0px 3px 0px #00c7ff;
}
.prize-wrap-card:hover {
background: #111a23;
}

.prize-wrap-card:hover .prize-wrap-card-inner{
background: #1b2731;
}
.prize-wrap-card:hover .prize-wrap-card-medal img{
filter: drop-shadow(0px 4px 4px);
color: #b28a00;
}
.prize-wrap-card:hover .prize-wrap-card-inner-pic img{
color: rgb(171, 223, 81);
filter: drop-shadow( 0px 4px 4px);
transform: scale(1.1);
}
.prize-wrap-card:hover .prize-wrap-card-inner-prize-money img{
color: rgb(171, 223, 81);
filter: drop-shadow( 0px 4px .5px);
}
.prize-wrap-card-medal{
position: absolute;
right:0;
top:0;
width: 60px;
}
.prize-wrap-card-medal img{
filter: drop-shadow(0px 10px 3px);
color: #000000;
}
.prize-wrap-card-inner{
margin-top: 60px;
padding:0 20px;
background: #111a23;
}
.prize-wrap-card-inner-pic{
width: 50%;
}

.prize-wrap-card-inner-pic img{
margin-top: -30px;
}
.prize-wrap-card-inner-prize{
padding: 10px 0;
color: white;
}
.prize-wrap-card-inner-prize-amount{
font-size: 21px;
}
.prize-wrap-card-inner-prize-country{
text-transform: uppercase;
font-size: 12px;
}
.prize-wrap-card-inner-prize-money{
width: 30px;
display: inline-block;
}
.prize-wrap-card-inner-text{
font-size: 10px;
color: #ffffff80;
text-transform: uppercase;
padding:10px 0;
}
.prize-wrap-card-footer{
padding: 10px;
color: #ffffff80;
font-size: 11px;
text-align: justify;
}
@media (min-width: 320px) and (max-width: 767px) {
.evnt-top-wrap{
padding: 0;
}
.evt-header{
border-radius: 0px;
}

.mob_wrapper_outer{
margin-bottom: 20px;
display: flex;
border-radius: 4px;
border: 2px solid #181f25;
}
.mob_wrapper {
display: block;
width: 100%;
height: 60px;
background-color: #1b2731;
box-shadow: inset 0px 0px 15px 0px #000000d4;
/*box-shadow: inset 0 16px 14px -21px transparent, 0 0px 13px 0 rgba(0,0,0,0.3), inset 0 0 7px 2px rgba(0,0,0,0.4);*/
overflow: hidden;
position: relative;
color:#fff;

}
.mob_arrow {
display: block;
width: 88px;
height: 60px;
line-height: 60px;
text-align: center;
background-color: #111c25;
font-weight: bold;
cursor: pointer;
box-shadow: inset 0 20px 4px -21px rgba(113, 113, 113, 0.4), 0 19px 13px 0 rgba(0, 0, 0, 0.50);
}
.mob_arrow:first-of-type {
border-radius: 4px 0 0 4px;
}
.mob_arrow:nth-of-type(2) {
border-radius: 0 4px 4px 0;
}
.mob_arrow:hover{
box-shadow: 1px 5px 14px -21px transparent, 20px 0px 20px 0 rgba(0,0,0,0.3), 4px 0px 20px 2px rgba(0,0,0,0.4);
text-shadow: 1px 0px #423838;
}
.mob_nav {
width: auto;
height: 60px;
overflow: hidden;
list-style-type: none;
white-space: nowrap;
transition: 2.0s;
margin: 0;
padding: 0;
}
.mob_nav li {
display: inline-block;
height: 60px;
line-height: 60px;
text-transform: uppercase;
width: 100%;
text-align: center;
font-size: 16px;
font-weight: 700;
}
/*-----------mobile-header------------*/
.evt-inner{
padding-left: 20px;
padding-right: 20px;
}
.evt-inner-section{
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-flow: column;
flex-flow: column;
}
.evt-logo{
width: 150px;
height: auto;
min-width: 150px;
}
.evt-info{
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-flow: column;
flex-flow: column;
margin-top: 12px;
margin-left: 0;
margin-right: 0;
}
.evt-info-name{
margin: auto auto 12px;
}
.evt-info-name-title {
text-align: center;
font-size: 1rem;
}
.evt-info-name-organized{
font-size: 14px;
text-align: center;
}
.evt-info-join-date{
font-size: 14px;
}
/*------eventoverview-eventdetails_wrap---*/
.eventdetails_wrap{
grid-template-columns: auto ;
}
}
</style>
