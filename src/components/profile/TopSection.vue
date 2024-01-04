<template>
  <div class="profile">
    <div class="top_wraper">
        <div id="profile-upper">
            <div id="profile-banner-image" v-if="data.cover_image" :style="{ backgroundImage: `url(${data.cover_image})` }">
            </div>
             <div id="profile-banner-image" v-if="!data.cover_image">
            </div>
            <div id="profile-d">
                <div id="profile-pic">
                    <div class="progress-pie-chart" data-percent="45">
                        <div class="ppc-percents">
                            <div class="pcc-percents-wrapper">
                                <img v-if="data.profile_image" :src="data.profile_image">
                                <img v-if="!data.profile_image" src="../../assets/profile/logo.png">
                            </div>
                        </div>
                    </div>
                    <div id="add-profilepic" v-if="current_user" @click="Crop()"><i class="fas fa-camera"></i></div>
                </div>
                <div id="u-name" >
                    <div >
                        <div class="profile_name_conent">
                            <div class="profile_name__game">{{username}}</div>
                            <div class="profile_name__user"></div>
                            <div class="profile_name__leafcoin">
                                <span class="profile_name_leaf"><img src="../../assets/profile/leaf_stat.png"> {{data.leafs}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="tb" id="m-btns">
                        <div class="td" v-if="current_user">
                          <router-link class="m-btn"  tag="div" :to="{ name: 'EditProfile' ,params: {username: username}}"  active-class="active" exact><i class="fas fa-user-plus"></i><span>Edit Profile</span></router-link>
                        </div>
                        <!-- <div class="td">
                            <div class="m-btn"><i class="fas fa-envelope-open"></i><span>Message</span></div>
                        </div> -->
                    </div>
                </div>
            </div>

            <div id="black-grd"></div>
            <div class="profile-gradient"></div>
            <div id="add-coverpic" v-if="current_user" @click="Cover()"><i class="fas fa-camera"></i></div>
        </div>
        <div class="challenge_wrap">
            <div class="challenge_wrap_inner">
                <!-- <div class="tournament_win_card">
                    <div class="tournament_win_card_fig trophy_padding">
                        <img src="img/trophy.png" style="">
                    </div>
                    <div class="tournament_win_card_conent">
                        <div class="tournament_win_card_conent_count">14</div>
                        <div class="tournament_win_card_conent_name">Tournament Win</div>
                    </div>
                </div>
                <div class="tournament_win_card">
                    <div class="tournament_win_card_fig">
                        <img src="img/lens.png" style="">
                    </div>
                    <div class="tournament_win_card_conent">
                        <div class="tournament_win_card_conent_count">140</div>
                        <div class="tournament_win_card_conent_name">profile views</div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
    <Crop v-if="crop && current_user"  @crop="Crop()" />
    <Cover v-if="cover && current_user" @cover="Cover()" />
  </div>
</template>
<script>
import Crop from './Crop.vue';
import Cover from './Cover.vue';
// @ is an alias to /src

export default {
  name: 'Profile',
  data() {
    return {
      crop: false,
      cover: false,
    };
  },
  props: ['data', 'username', 'current_user'],
  components: {
    Crop,
    Cover,
  },
  methods: {
     Crop() {
          if (this.crop === false) {
              this.crop = true;
          } else {
              this.crop = false;
          }
      },
      Cover() {
          if (this.cover === false) {
              this.cover = true;
          } else {
              this.cover = false;
          }
      },
  },
};
</script>

<style scoped>
.top_wraper{
  padding: 1.5rem;
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
#profile-pic {
  width: 210px;
  height: auto;
  position: relative;
}
#profile-pic:hover .progress-pie-chart{
  box-shadow: inset 0 20px 4px 20px rgba(113, 113, 113, 0.4), 0 15px 15px 0 rgba(0, 0, 0, 0.70);
  transition-duration: .4s;
  border-radius: 50%;
}
#profile-pic img {
  width: 100%;
  display: block;
}
.progress-pie-chart {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  background-color: #1b2731;
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
  background: #1b2731;
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
#add-profilepic{
    position: absolute;
    right: 6px;
    bottom: -6px;
    line-height: 1;
    cursor: pointer;
    padding: 3px;
    border: 3px solid #fff;
    color: #1b2731;
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
#u-name {
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
#m-btns {
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
#black-grd {
  position: absolute;
  left: 0px;
  bottom: 0px;
  right: 0px;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0) 71%, rgba(0, 0, 0, 0.78));
}
.profile-gradient {
    background-image: url('../../assets/profile/evt-overlay.png');
    opacity: 1;
    background-size: 2px 2px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
#add-coverpic {
  position: absolute;
  right: 20px;
  top: 20px;
  line-height: 1;
  cursor: pointer;
  padding: 3px;
  border: 3px solid #fff;
  background: #ffffffed;
  border-radius: 4px;
  z-index: 1;
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
.challenge_wrap{
  padding: 10px;
  background-color: #1b2731;
  box-shadow: 7px 7px 10px rgba(0,0,0,.3);
  border-radius: 0 0 10px 10px;
  padding: 23px;
}
.challenge_wrap_inner{
    position: relative;
    display: inline-flex;
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

#profile-banner-image {
  background-image: url('../../assets/profile/cover.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  overflow: hidden;
  z-index: 1;
  border-radius: 10px 10px 0 0;
}
#profile-banner-image img {
  width: 100%;
  /* margin-top: -20%; */
  display: block;
}
.profile_name__leafcoin {
  font-size: 15px;
  display: flex;
}
.profile_name__leafcoin img {
    width: 25px;
    margin-right: 5px;
    margin-bottom: -3px;
}
.profile_name_leaf{
  margin-right: 15px;
}
.profile_name_leaf , .profile_name_coin{
  display: flex;
    align-items: flex-end;
}
@media (min-width: 320px) and (max-width: 767px) {
    .top_wraper{
        padding: 0;
    }
    #profile-d{
        display: flex;
        text-align: -webkit-center;
        justify-content: flex-end;
        flex-direction: column;
        height: 100%;
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
    .progress-pie-chart {
        width: 140px;
        height: 140px;
    }
    .ppc-progress {
        left: calc(50% - 70px);
        top: calc(50% - 70px);
        width: 140px;
        height: 140px;
        clip: rect(0, 140px, 140px, 70px);
    }
    .ppc-percents {
        border-radius: 50%;
        left: calc(50% - 130px/2);
        top: calc(50% - 130px/2);
        width: 130px;
        height: 130px
    }
    #add-profilepic {
        right: 0px;
        bottom: 9px;
    }
    .ppc-percents_count{
        left: -2px;
        bottom: 10px;
        height: 30px;
        width: 30px;
        font-size: 10px;
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
    .profile_name__game{
        text-align: center;
    }
    .profile_name__user{
        margin-bottom: 0;
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
    .challenge_wrap{
        border-radius: 0;
    }
    .challenge_wrap_inner{
        left: 0;
        flex-wrap: wrap;
        justify-content: center;
        display: flex;
    }
    #profile-banner-image{
        border-radius: 0;
        height: 350px;
    }
    .profile_name__leafcoin{
        justify-content: center;
    }
}
</style>
