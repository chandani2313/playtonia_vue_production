<template>
  <div class="overview">
    <div class="bottom-wrap-first">
      <Leaderboard/>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
// @ is an alias to /src
import Leaderboard from './LeaderBoard.vue';

export default {
  name: 'Overview',
  data() {
    return {
    };
  },
  components: {
    Leaderboard,
  },
  methods: {
  },
};
</script>

<style >
.overview{
  width: 100%;
}
*, *::before, *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
/* Profile image header */
.top_wraper{
  padding: 1.5rem;
}
.progress-pie-chart {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  background-color: #E5E5E5;
  position: relative;
  box-shadow: inset 0 20px 4px 20px rgba(113, 113, 113, 0.4), 0 15px 15px 0 rgba(0, 0, 0, 0.50);
  transition-duration: .4s;
}
.progress-pie-chart.gt-50 {
  background-color: #3ea6ff;
}

.ppc-progress {
  content: "";
  position: absolute;
  border-radius: 50%;
  left: calc(50% - 105px);
  top: calc(50% - 105px);
  width: 210px;
  height: 210px;
  clip: rect(0, 210px, 210px, 105px);
  transform: rotate(-120deg);
}
.ppc-progress .ppc-progress-fill {
  content: "";
  position: absolute;
  border-radius: 50%;
  left: calc(50% - 105px);
  top: calc(50% - 105px);
  width: 210px;
  height: 210px;
  clip: rect(0, 105px, 210px, 0);
  background: #3ea6ff;
  transform: rotate(60deg);
}
.gt-50 .ppc-progress {
  clip: rect(0, 105px, 210px, 0);
}
.gt-50 .ppc-progress .ppc-progress-fill {
  clip: rect(0, 210px, 210px, 105px);
  background: #E5E5E5;
}

.ppc-percents {
  content: "";
  position: absolute;
  border-radius: 50%;
  left: calc(50% - 200px/2);
  top: calc(50% - 200px/2);
  width: 200px;
  height: 200px;
  background: #fff;
  text-align: center;
  display: table;
  overflow: hidden;
}
.ppc-percents img {
    width: 200px;
    display: block;
}

.pcc-percents-wrapper {
  display: table-cell;
  vertical-align: middle;
}

#profile-upper {
  position: relative;
}

#profile-d {
  position: absolute;
  left: 59px;
  bottom: 0px;
  right: 0px;
  height: 180px;
  z-index: 1;
  display: flex;
}

#profile-banner-image {
  background-image: url(https://imagizer.imageshack.com/img921/9628/VIaL8H.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  overflow: hidden;
  z-index: 1;
  border-radius: 10px 10px 0 0;
}

#profile-banner-image img {
  width: 100%;
  margin-top: -20%;
  display: block;
}

#profile-pic {
  width: 210px;
  height: auto;
  position: relative;
  /*border-radius: 3px;
  margin-top: 20px;
  box-shadow: 0 0 0 5px #fff;
  border: 5px solid #ffffff00;
  border-image: linear-gradient(to left, #3df2ff, #4facfe)!important;
  border-image-slice: 1!important;
  border-width: 5px!important;*/
}

#profile-pic:hover .progress-pie-chart{
  /*box-shadow: 0px 1px 20px 0px #3CA3F0;*/
  box-shadow: inset 0 20px 4px 20px rgba(113, 113, 113, 0.4), 0 15px 15px 0 rgba(0, 0, 0, 0.70);
  transition-duration: .4s;
  border-radius: 50%;
}
#profile-pic img {
  width: 100%;
  display: block;
}

#u-name {
  /*position: absolute;*/
  bottom: 20px;
  left: 208px;
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  display: flex;
  align-items: center;
  width: 100%;
}


.profile_name_conent{
  flex: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0px 15px;
    white-space: nowrap;
}
.profile_name__game{
  text-align: left;
  font-size: 26px;
    font-weight: bold;
}
.profile_name__user{
  margin-bottom: 15px;
    color: #ffffff99;
  font-size: 16px;
    font-weight: bold;
}

.profile_name__leafcoin {
  font-size: 15px;
  display: flex;
}
.profile_name_leaf{
  margin-right: 15px;
}
.profile_name_leaf , .profile_name_coin{
  display: flex;
    align-items: flex-end;
}
.profile_name__leafcoin img {
    width: 25px;
    margin-right: 5px;
    margin-bottom: -3px;
}
.profile_name_coin img{
  width: 23px;
}

#m-btns {
  /*position: absolute;
  right: 50px;*/
  bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: 5%;
  margin-top: 70px;
}

#m-btns .td {
  padding: 0 8px;
  margin-bottom: 10px;
}

.m-btn {
  padding: 6px 10px;
  cursor: pointer;
  color: #1b2731;
  font-size: 14px;
  white-space: pre;
  border-radius: 4px;
  background-color: #3ea6ff;
  font-weight: 600;
}
.m-btn:hover{
    color: #fff;
    box-shadow: 0px 0px 5px 0px #3CA3F0;
}

.m-btn i {
  font-size: 16px;
  margin-right: 5px;
}


.ppc-percents_count{
    position: absolute;
    left: -11px;
    bottom: -33px;
    height: 60px;
    width: 60px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background-color: #3ea6ff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}
#add-coverpic {
  position: absolute;
  right: 20px;
  top: 20px;
  line-height: 1;
  cursor: pointer;
  padding: 3px;
  border: 3px solid #fff;
  /*box-shadow: 0 0 0 3px #fff;*/
  background: #ffffffed;
  border-radius: 4px;
  z-index: 1;
}
#add-profilepic{
    position: absolute;
    right: 6px;
    bottom: -6px;
    line-height: 1;
    cursor: pointer;
    padding: 3px;
    border: 3px solid #fff;
    color: #1b2731;
    /*box-shadow: 0 0 0 3px #fff;*/
    background: #ffffffed;
    border-radius: 50%;
}

#add-coverpic i {
  display: block;
  
}
#add-coverpic:hover , #add-profilepic:hover{
  color: white;
  box-shadow: 0px 1px 20px 0px #3CA3F0;
  text-shadow: 1px 1px #000000;
  background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
}

#black-grd {
  position: absolute;
  left: 0px;
  bottom: 0px;
  right: 0px;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0) 71%, rgba(0, 0, 0, 0.78));
  
}

.profile-gradient {
    background-image: url();
    opacity: 1;
    background-size: 2px 2px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
/* Profile image header finished */
.challenge_wrap{
  padding: 10px;
  background-color: #3ea6ffd6;
  box-shadow: 7px 7px 10px rgba(0,0,0,.3);
  border-radius: 0 0 10px 10px;
}
.challenge_wrap_inner{
    position: relative;
    display: inline-flex;
    /*left: 270px;*/
    left: 29%;
}
.tournament_win_card{
    overflow: hidden;
   
    flex-direction: row;
    -ms-flex-align: stretch;
    align-items: stretch;
    position: relative;
    display: flex;
    border-radius: 4px;
    padding: 7px 10px;
}
.tournament_win_card_fig{
    width: 25px;
    height: 25px;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 0 3px #ffffff4a;
}
.trophy_padding{
  padding: 3.5px;
}

.tournament_win_card_conent{
    flex: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    padding:0 10px;
}
.tournament_win_card_conent_count , .tournament_win_card_conent_name{
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

.challenge_wrap_btn{
  display: flex;
    justify-content:flex-end;
    /*transform: skew(-20deg, 0deg);*/
}
.challenge-btn {
  padding: 14px 50px;
    font-size: 16px;
    line-height: 1.5em;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    font-weight: 700;
}
.challenge-btn-text{
  /*-ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);*/
}






.bottom-container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    
}

.bottom-wrap {
    padding: 20px 16px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
}

 /*-------------header.............*/

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
  width: 20%;
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
/*-------------header-end---------------*/
/*-----------mobile-header------------*/
.mob_wrapper_outer {
  display: none;
}
/*-----------mobile-header-end------------*/



.bottom-wrap-first {
    /* width: 63.5%; */
}
.bottom-wrap-second {
    width: 35.5%;
}


.bottom_innerwrap{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* padding: 30px 10px 0; */
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
}
.bottom_innerwrap_left, .bottom_innerwrap_right {
    width: 49.2%;
}


/*...............mostplayed..............*/
.mostplayed--bottom-decor {
  border-top: 1px solid #3e4652;
  padding-bottom: 30px;
  background-image: linear-gradient(to right, rgba(60, 200, 200, 0.2) 8px, transparent 8px), linear-gradient(to right, rgba(60, 200, 200, 0.3) 8px, transparent 8px), linear-gradient(to right, rgba(60, 200, 200, 0.4) 8px, transparent 8px), linear-gradient(to right, rgba(60, 200, 200, 0.5) 8px, transparent 8px), linear-gradient(to right, rgba(60, 200, 200, 0.6) 8px, transparent 8px), linear-gradient(to right, rgba(60, 200, 200, 0.7) 8px, transparent 8px), linear-gradient(to right, rgba(60, 200, 200, 0.8) 8px, transparent 8px), linear-gradient(to right, rgba(60, 200, 200, 0.9) 8px, transparent 8px);
  background-repeat: repeat-x;
  background-size: 72px 24px, 72px 30px, 72px 34px, 72px 40px, 72px 37px, 72px 29px, 144px 30px, 216px 37px;
  background-position: 0 100%, 12px 100%, 24px 100%, 36px 100%, 48px 100%, 60px 100%, 12px 100%, 48px 100%;
}
.mostplayed-inner {
    padding: 24px 24px;
}
.mostplayed--center {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.mostplayed-item--number-side {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: left;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.mostplayed-value-primary {
    margin-right: 8px;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2em;
    color: #4facfe;
}

.mostplayed__stat-inner {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.mostplayed-item__stat--label {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: -0.02em;
    text-transform: none;
    line-height: 1.2em;
    color: #fff;
    margin-bottom: .1em;
}
.mostplayed-item__stat--desc {
    font-size: 9px;
    line-height: 1.2em;
    color: #ffffff40;
}
.mostplayed-player__details{
       display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    
}
.mostplayed-player__details > .mostplayed-player__details__item:after{
      content: "";
    position: absolute;
    top: 5px;
    width: 1px;
    background-color: #2a2d30;
    /* background-color: #101820; */
    -webkit-box-shadow: 1px 0 0 #000000;
    box-shadow: 1px 0 0 #000000;
    height: calc(100% - 10px);
    right: 0px;
}
.mostplayed-player__details > .mostplayed-player__details__item:last-child:after{
    display: none;
}
.mostplayed-player__details__item{
  -webkit-box-flex: 0;
    -ms-flex: 0 1 50%;
    flex: 0 1 50%;
    max-width: 50%;
    padding:12px;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
}
.mostplayed-player__details__item:hover{
  background-color: #ffffff1a;
}
.mostplayed-player-wrapper{
    display: flex;
    justify-content: space-between;
    align-self: center;
    width: 100%;
}

.mostplayed-player__details-holder{
  align-self: center;
}

.mostplayed-player__details-label{
  font-size: 12px;
  display: block;
  color: #fff;
  line-height: 1.2em;
  font-weight: 600;
  margin-bottom: 0.4em;
}

.mostplayed-player__details-desc{
  font-size: 9px;
  display: block;
  color: #ffffff40;
  text-transform: capitalize;
  font-weight: 600;
}
.mostplayed-player__details-value{
  align-self: center;
  font-size: 11px;
  color: #fff;
  font-weight: 600;
}
/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}
.mySlides img{
  width:100%;
  display: block;
}
/* Next & previous buttons */
.prev, .next {
  font-size: 15px;
    height: 30px;
    line-height: 25.5px;
    width: 30px;
    background: rgba(0, 0, 0, 0.28);
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    cursor: pointer;
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    text-align: center;
    
}
/* Position the "next button" to the right */
.next {
  right: 2%;
}
.prev {
  left: 2%; 
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
  box-shadow: 0px 1px 20px 0px #3ca3f0;
  color: #3ca3f0;
}
/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}
@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}




/*///////social icon ////////////*/
.widget-social--buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: space-between;
    margin-bottom: 8px;
}
.widget-social--buttons .btn-social-counter {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0;
    text-align: center;
    width: calc(32%);
    max-width: calc(32%);
    border: none;
    margin: 0 0px 8px 0px;
}
.btn-social-counter {
    display: block;
    width: 100%;
    color: #fff;
    text-transform: uppercase;
    /* border: 1px solid #4b3b60; */
    border-radius: 4px;
   
    padding: 20px 60px 18px 86px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
.widget-social--buttons .btn-social-counter__icon {
    position: relative;
    width: 100%;
    padding: 10px 0 0 0;
    font-size: 20px;
    background-color: transparent !important;
}
.btn-social-counter__count {
    display: block;
    font-size: 10px;
    line-height: 1.2em;
    color: #fff;
    font-weight: 700;
    padding: 4px 5px 10px 5px;
}


.btn-social-counter__add-icon {
  width: 18px;
  height: 18px;
  right: 8px;
  top: 8px;
  margin-top: 0;
  display: block;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #fff;
  
}

.btn-social-counter__add-icon::before, .btn-social-counter__add-icon::after {
  content: "";
  display: block;
  position: absolute;
  background-color: #fff;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transition: -webkit-transform 0.2s ease-in-out;
  transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
}

.btn-social-counter__add-icon::before {
  width: 8px;
  height: 2px;
}

.btn-social-counter__add-icon::after {
  width: 2px;
  height: 8px;
}

.btn-social-counter:hover .btn-social-counter__add-icon::before, .btn-social-counter:hover .btn-social-counter__add-icon::after {
  -webkit-transform: translate(-50%, -50%) rotate(-90deg);
          transform: translate(-50%, -50%) rotate(-90deg);
}

.btn-social-counter--fb {
    background-color: #3B5998;
}
.btn-social-counter--twitter {
    background-color: #1DA1F2;
}
.btn-social-counter--twitch {
    background-color: #6441A4;
}
.btn-social-counter--youtube {
    background-color: #cd201f;
}
.btn-social-counter--discord {
    background-color: #7289da;
}
.btn-social-counter--instagram {
    background-color: #E4405F;
}

 /*winratio&mostplayed wrapper-start*/
.team-stats-box {
    list-style: none;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: -1px;
}
.team-stats-box li{
 cursor: pointer;
}
.team-stats-box li:first-child{
  border-right: 1px solid #3e4652;
  border-bottom: 1px solid #3e4652;
}

.team-stats-box li:nth-child(2){
  border-bottom: 1px solid #3e4652;
}
.team-stats-box li:nth-child(3){
  border-right: 1px solid #3e4652;
}
.team-stats-box li:hover{
  background-color: #ffffff1a;

}
.team-stats-box li:hover .team-stats__icon--size-sm {
  box-shadow: 0px 1px 20px 3px #3CA3F0; 
}

.team-stats-box li:hover .team-stats__icon--size-sm img {
  color: white;
  transform: scale(1.1);
}
.team-stats-box li:hover .team-stats__icon--size-sm i{
  color: #4facfe;
  transform: scale(2.1);
}
.team-stats-box li:hover .team-stats__icon--circle-outline{
  border: 4px solid #fff;
}
.team-stats__icon--circle-outline {
    position: relative;
    border-radius: 50%;
    margin: 0 auto;
    border: 4px solid #4facfe;
}
.team-stats__icon--size-sm {
    width: 40px;
    height: 40px;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    color: #fff;
}
.team-stats__value {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #fff;
    line-height: 1.2em;
    margin-bottom: .2em;
}
.team-stats__label {
 
    text-transform: uppercase;    
    letter-spacing: -0.02em;  
    font-size: 13px;
    text-transform: none;
    color: #fff;
    font-weight: 700;
    margin-bottom: .35em;
}
.team-stats__sublabel {
    font-size: 12px;
    line-height: 1.2em;
    color: #ffffff40;
    text-transform: capitalize;
    font-weight: 600;
}
.team-stats__item {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 50%;
     flex: 0 1 50%; 
    max-width: calc(50% - 1px);
    text-align: center;
    padding: 24px 0 24px 0;
}
.team-stats__icon--size-sm img {
    width: 60%;
    align-self: center;
}
.team-stats__icon--size-sm i {
    align-self: center;
}


@media (max-width: 800px) and (min-width: 768px){
  .bottom_innerwrap_left, .bottom_innerwrap_right {
      width: 100%;
  }
}

@media (min-width: 320px) and (max-width: 767px) {


            /*profile page*/
/*----------------------------------*/
.top_wraper{
  padding: 0;
}
.progress-pie-chart {
    width: 140px;
    height: 140px
  
}
.ppc-progress {
  
    left: calc(50% - 70px);
    top: calc(50% - 70px);
    width: 140px;
    height: 140px;
    clip: rect(0, 140px, 140px, 70px);
  
}
.ppc-progress .ppc-progress-fill {
  
    left: calc(50% - 70px);
    top: calc(50% - 70px);
    width: 140px;
    height: 140px;
    clip: rect(0, 70px, 140px, 0);

}
.gt-50 .ppc-progress {
  clip: rect(0, 70px, 140px, 0);
}
.gt-50 .ppc-progress .ppc-progress-fill {
  clip: rect(0, 140px, 140px, 70px);
  background: #E5E5E5;
}

.ppc-percents {
    border-radius: 50%;
    left: calc(50% - 130px/2);
    top: calc(50% - 130px/2);
    width: 130px;
    height: 130px
  
}

.ppc-percents_count{
    left: -2px;
    bottom: 10px;
    height: 30px;
    width: 30px;
    font-size: 10px;
}
  
  #profile-banner-image{
    border-radius: 0;
    height: 350px;
  }
  #profile-d{
    display: flex; 
    text-align: -webkit-center;
    justify-content: flex-end;
    flex-direction: column;
    height: 100%; 
    /*bottom: -75px; */ 
    left: 0;                
  }
#profile-pic{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
    width: 140px;
    margin-top: 0;
}
#u-name{
  position: relative;
  left: 0;
  bottom: 0;
  flex-direction: column;
}
.profile_name_conent{
  margin: 15px 0px;
}
.profile_name__user{
  margin-bottom: 0;
}
.profile_name__game{
  text-align: center;
}
.profile_name__leafcoin{
  justify-content: center;
}
#m-btns {
    display: flex;
    justify-content: center;
    width: 100%;
    position: static;
    margin-bottom: 10px;
    margin-top: 0;
}
.m-btn {
  padding: 5px;
  font-size: 12px;
}
.m-btn i {
  font-size: 14px;
}
#add-profilepic {
    right: 0px;
    bottom: 9px;
}
.challenge_wrap{
  border-radius: 0;
}
.challenge_wrap_inner{
  left: 0;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
}


          /*profile page end */
/*----------------------------------*/


  .nav{
      display: none;
    }  
/*-----------mobile-header------------*/
    
   .mob_wrapper_outer{
        margin-bottom: 20px;
        display: flex;
        border-radius: 4px;
        border: 2px solid #181f25;
        width: 100%;
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
.bottom_innerwrap_left, .bottom_innerwrap_right {
  width: 100%;
}
.bottom-wrap-first,.bottom-wrap-second{
  width: 100%;
}
}
</style>
