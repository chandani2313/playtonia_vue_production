<template>
  <div class="header">
        <div class="card" v-if="lobby">
            <!-- Header -->
            <header class="card__header">
                <div class="card__header_text">
                  <h5 class="card__header_text-title">{{lobby.tournament.tournament_name}}</h5>
                  <span class="card__header_textsubtitle" v-if="lobby.is_active">MATCH ACTIVE</span>
                  <span class="card__header_textsubtitle" v-if="!lobby.is_active">MATCH COMPLETED</span>
                </div>
                <div class="lobby_nav_links_details_wraper">
                    <!-- <span class="lobby_nav_links_details" >Details   <i class="fas fa-chevron-down"></i></span> -->
                    <div class="lobby_nav_links_details_content">
                      <div class="lobby_nav_links_details_content_inner">

                        <div class="detail_contant_first">
                          <div class="detail_contant_first_img"><img src="../../../assets/lobby/csgo-icon-42843.png"></div>
                          <h5 class="detail_contant_firsth5">{{lobby.tournament.game}}  {{lobby.tournament.tournament_type}} V {{lobby.tournament.tournament_type}}</h5>
                        </div>
                        <div class="detail_contant_third">
                          <div class="detail_contant_third_bottom">
                            <span>created</span>
                            <span>{{lobby.created_at | moment("from", "now")}}</span>
                          </div>
                          <div class="detail_contant_third_bottom">
                            <span>status</span>
                            <span>{{Status}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </header>
            <!-- Header / End -->

            <div class="card__content">
              <div class="card__content_team1">
                <div class="card__content_team1_inner">
                  <div class="card__content_team1_inner_img">
                    <img v-if="!lobby.players.player_1.profile.profile_image" src="../../../assets/profile/logo.png" alt="">
                    <img v-if="lobby.players.player_1.profile.profile_image" :src="lobby.players.player_1.profile.profile_image" alt="">
                  </div>
                  <div class="card__content_team1_inner_team">
                    <h5 class="card__content_team1_inner_team_name">{{lobby.players.player_1.username}}</h5>
                    <span class="card__content_team1_inner_team_subtitle">Player A</span>
                  </div>
                </div>
              </div>
              <div class="card__content_score">
                <span class="win">0</span> - <span class="win">0</span>
              </div>
              <div class="card__content_team2">
                <div class="card__content_team2_inner">
                  <div class="card__content_team2_inner_img">
                    <img v-if="!lobby.players.player_2.profile.profile_image" src="../../../assets/profile/logo.png" alt="">
                    <img v-if="lobby.players.player_2.profile.profile_image" :src="lobby.players.player_1.profile.profile_image" alt="">
                  </div>
                  <div class="card__content_team2_inner_team">
                    <h5 class="card__content_team2_inner_team_name">{{lobby.players.player_2.username}}</h5>
                    <span class="card__content_team2_inner_team_subtitle">Player B</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="lobby_nav_wrapper">
              <div class="lobby_nav">
                <div class="lobby_nav_links">
                  <router-link data-animation="ripple"  tag="a" :to="{ name: 'CsOverview' ,params: {id: this.$route.params.lobby_id}}"  active-class="active" exact>overview</router-link>
                  <a class="" href="#">scoreboard</a>
                  <a class="" href="#">admin</a>
                </div>
              </div>
            </div>
          </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
// @ is an alias to /src

export default {
  name: 'Lobby',
  data() {
    return {
    };
  },
  components: {
  },
  computed: {
    ...mapGetters({
        lobby: 'csgo/lobby',
    }),
    Status() {
      let Stat = '';
      if (this.lobby.status === 'match_cancelled') {
        Stat = 'MATCH CANCELLED';
      }
      return Stat;
    },
  },
};
</script>

<style scoped>
.page-content{
    padding: 1rem;
    overflow: hidden;
}
.page-nav__events{
   color: white;
    padding: 30px;
    font-size: 13px;
    text-align: left;
}
.page-nav__events i{
  margin: 0 5px;
}
.container {
    max-width: 1460px;
    margin-right: auto;
    margin-left: auto;
}
.card {
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
    background: #1b2731;
    margin-bottom: 40px;
}
.card__header {
  padding: 17px 23px;
  border-radius: 4px 4px 0 0;
  position: relative;
  background-color: #0d16209e;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card__header::before {
  content: "";
  display: block;
  position: absolute;
  width: 6px;
  left: 0;
  top: 0;
  bottom: 0;
  background-image: linear-gradient(to top, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
  border-radius: 3px 0 0 0;
}
.card__header_text-title {
  font-size: 14px;
  font-style: normal;
  margin-bottom: .25em;
}
.card__header_textsubtitle {
  display: block;
  font-size: 10px;
  line-height: 1.2em;
  color: #ffffff90;
  text-align: left;
}
@keyframes clockwise {
  0% {
    top: -5px;
    left: 0;
  }
  12% {
    top: -2px;
    left: 2px;
  }
  25% {
    top: 0;
    left: 5px;
  }
  37% {
    top: 2px;
    left: 2px;
  }
  50% {
    top: 5px;
    left: 0;
  }
  62% {
    top: 2px;
    left: -2px;
  }
  75% {
    top: 0;
    left: -5px;
  }
  87% {
    top: -2px;
    left: -2px;
  }
  100% {
    top: -5px;
    left: 0;
  }
}

@keyframes counterclockwise {
  0% {
    top: -5px;
    right: 0;
  }
  12% {
    top: -2px;
    right: 2px;
  }
  25% {
    top: 0;
    right: 5px;
  }
  37% {
    top: 2px;
    right: 2px;
  }
  50% {
    top: 5px;
    right: 0;
  }
  62% {
    top: 2px;
    right: -2px;
  }
  75% {
    top: 0;
    right: -5px;
  }
  87% {
    top: -2px;
    right: -2px;
  }
  100% {
    top: -5px;
    right: 0;
  }
}
.card__content{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 146px;
}
.card__content_team1 , .card__content_team2{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 43%;
}

.card__content_score{
    width: 16%;
    text-align: center;
    -ms-flex-item-align: center;
    align-self: center;
    font-size: 42px;
    line-height: 1.2em;
    font-style: italic;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.02em;
}
.card__content_score .loss{
  color: #999;
}
.card__content_team1_inner , .card__content_team2_inner{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.card__content_team2_inner{
    background-image: url(/home/developer/Downloads/CT_RIGHT.png);
    background-position: bottom right;
    background-size: auto;
}
.card__content_team1_inner{
    background-image: url(/home/developer/Downloads/T_LEFT.png);
    background-position: bottom left;
    background-size: auto;
}
.card__content_team1_inner_img , .card__content_team2_inner_img{
    width: 65px;
    border-radius: 5px;
    overflow: hidden;
}
.card__content_team1_inner_img img , .card__content_team2_inner_img img {
  display: block;
  width: 100%;
}
.card__content_team1_inner_img{
    order: 2;
    margin-left: 34px;
}
.card__content_team2_inner_img{
  margin-right: 34px;
}
.card__content_team1_inner_team {
    text-align: right;
}
.card__content_team2_inner_team{
    text-align: left;
}
.card__content_team1_inner_team , .card__content_team2_inner_team{
  -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.card__content_team1_inner_team_name ,.card__content_team2_inner_team_name{
    font-size: 14px;
    line-height: 1.2em;
    margin-bottom: .1em;
    font-style: normal;
}
.card__content_team1_inner_team_subtitle , .card__content_team2_inner_team_subtitle{
    display: block;
    font-size: 10px;
    line-height: 1.2em;
    color: #ffffff90;
}
.lobby_nav_wrapper{
  padding: 0rem;
}
.lobby_nav{
  background-color: #1b2731;
    width: 100%;
    /*position: relative;*/
    /*overflow: hidden;*/
    border-radius: 4px;
    /*margin: 20px auto 20px auto;*/
    box-shadow: 3px 2px 20px 3px rgba(0,0,0,.16);
}
.lobby_nav > .lobby_nav_links {
    display: flex;
    font-size: 16px;
}
.lobby_nav > .lobby_nav_links > .active {
    color: #fff;
    background: #111c25;
}
.lobby_nav > .lobby_nav_links > a {
    padding: 20px 10px;
    text-decoration: none;
    color: #ffffff82;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    text-transform: uppercase;
    position: relative;
    /* border-width: 0px; */
    transition: 0.5s ease;
    white-space: nowrap;
    font-size: 0.9rem;
}
.lobby_nav > .lobby_nav_links > a:before {
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
.lobby_nav > .lobby_nav_links > .active:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    /* background-color: #4facfe; */
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    width: 100%;
}
.lobby_nav > .lobby_nav_links > a::after {
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
.lobby_nav > .lobby_nav_links > a:hover {
    color: #fff;
}
.lobby_nav > .lobby_nav_links > a:hover::after {
    /* background-color: #4facfe; */
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    width: 100%;
}
.lobby_nav_links_details_wraper{
  position: relative;
    font-size: 10px;
    font-weight: 700;
    line-height: 1.2em;
    text-transform: uppercase;
    cursor: pointer;
}
.lobby_nav_links_details_wraper{
  color:white;
}
.lobby_nav_links_details{
    display: flex;
    align-items: center;
    padding: 0 10px;
    color: #ffffff82;
    height: 100%;
}
.lobby_nav_links_details i{
    margin-left: .3rem;
    margin-top: .2rem;
    font-size: .8rem;
}
.lobby_nav_links_details:hover{
  color: white;
}
.lobby_nav_links_details_wraper > .lobby_nav_links_details_content {
  opacity: 0;
  visibility: hidden;
  transition: all 200ms;
}
.lobby_nav_links_details_wraper:hover .lobby_nav_links_details_content {
  opacity: 1;
  visibility: visible;
  z-index: 1;
}
.lobby_nav_links_details_content{
    position: absolute;
    top: 30px;
    right: 0;
    background-color: #1b2731;
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
    border-radius: 4px;
    list-style-type: none;
    width: 300px;
    cursor: default;
}
.lobby_nav_links_details_content:before {
    content: '';
    position: absolute;
    left: 0;
    height: 12px;
    width: 100%;
    background-color: transparent;
}
.lobby_nav_links_details_content:after {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    border: 10px solid transparent;
    border-bottom: 10px solid #1b2731;
    top: -20px;
    right: 37px;
}
.lobby_nav_links_details_content_inner{
  position: relative;
}
.detail_contant_first{
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
}
.detail_contant_first:after , .detail_contant_second:after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: #2a2d30;
    /* background-color: #101820; */
    -webkit-box-shadow: inset 0 1px 0 #0e1617;
    box-shadow: inset 0 1px 0 #0e1617;
    /*width:  calc(100% - 10px);*/
    bottom:  0px;
    left: 0;
}
.detail_contant_first_img{
  width: 30px;
  height: auto;
  margin-right: 10px;
}
.detail_contant_firsth5{
    font-size: 1rem;
    font-style: normal;
    margin-bottom: .25em;
    text-align: left;
}
.detail_contant_second,.detail_contant_third{
    padding: .8rem 1rem;
    text-align: left;
    line-height: 1.5rem;
    position: relative;
}
.detail_contant_second_top , .detail_contant_second_bottom , .detail_contant_third_top,
 .detail_contant_third_bottom{
    text-align: left;
    font-size: .8rem;
    display: flex;
}
.detail_contant_second_top > span:first-child , .detail_contant_second_bottom > span:first-child ,
 .detail_contant_third_top > span:first-child , .detail_contant_third_bottom >span:first-child {
  width: 30%;
}
.detail_contant_second_top > span:last-child , .detail_contant_second_bottom > span:last-child ,
 .detail_contant_third_top > span:last-child , .detail_contant_third_bottom > span:last-child {
  width: 70%;
}
.detail_contant_third_top_map{
    align-items: center;
    display: flex;
    width: 40px;
}
.detail_contant_third_top_map img{
  margin-right: 10px;
  width: 100%;
}
@media (min-width: 320px) and (max-width: 767px) {
.card__content_score{
    font-size: 24px;
}
.card__content_team1_inner, .card__content_team2_inner{
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    flex-direction: column;
    align-self: center;
}
.card__content_team2_inner , .card__content_team1_inner{
  background-image: none;
}
.card__content_team1_inner_img , .card__content_team2_inner_img{
  margin: 0 0 15px 0;
  order: 0;
}
.card__content_team1_inner_team , .card__content_team2_inner_team{
  text-align: center;
}
.card__content_team1_inner_team_name , .card__content_team1_inner_team_name{
  font-size: 12px;
}
.lobby_player_wrapper_inner{
  grid-gap: .3rem;
 }
.lobby_player_card{
  padding: 10px 5px;
}
.card__header{
  padding: 17px 13px;
}
}
</style>
