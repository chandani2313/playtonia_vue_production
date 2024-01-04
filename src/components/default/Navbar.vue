<template>
  <div class="navbar">
    <nav class="top-nav">
        <div class="hamburger-menu" @click="open()">
            <div class="wrapper-menu">
                <div class="line-menu half start"></div>
                <div class="line-menu"></div>
            <div class="line-menu half end"></div>
            </div>
        </div>

        <div class="play-wrapper">
            <a href="/">
                <div class="playtonia-logo">
                    <img  src="../../assets/layout/logo1.png">
                </div>
            </a>
            <!-- <a @click.prevent="toggle()" >
                <div class="game-select" v-if="game">
                    <i class="fas fa-dice"></i><span>{{game}}</span>
                </div>
                <div class="game-select" v-if="!game">
                    <i class="fas fa-dice"></i><span>SELECT GAME</span>
                </div>
            </a> -->
        </div>

        <div class="pro-noti">
            <div class="notification">
                <!-- <div class="notification-cart"><i class="fas fa-shopping-cart"></i></div> -->
                <div class="notification-noti" @click="noti()">
                    <i class="fas fa-bell"></i>
                    <div class="notification_num" v-if="total_notifications > 0">{{total_notifications}}</div>
                </div>
                <!-- <div class="notification-chat"><i class="fas fa-envelope chat-open"></i></div> -->
            </div>
                <div class="profile_card" @click="Menu()">
                    <div class="profile_card_fig">
                        <img v-if="!profile_image" class="profile_card_fig_img" src="../../assets/profile/logo.png">
                        <img v-if="profile_image" class="profile_card_fig_img" :src="profile_image">
                    </div>
                    <div class="profile_card_conent">
                        <div class="participants_card_title" >{{username}}</div>
                        <div class="participants_card_discription">
                            <span class="participants_card_discription_span"><img src="../../assets/layout/leaf_stat.png"> {{leafs}}</span>
                            <!-- <span class="participants_card_discription_span"><img src="../../assets/layout/coin_stat.png"> 20000</span> -->
                        </div>
                    </div>
                </div>
        </div>
        <div class="drop-down" v-if="menu">
            <router-link tag="a" class="menu-item" :to="{ name: 'Profile', params: { username: username } }"  exact>
                <i class="fas fa-user"></i>My Profile
            </router-link>
            <router-link tag="a" class="menu-item" :to="{ name: 'Basic', params: { username: username } }"  exact>
                <i class="fas fa-cog"></i>Profile Settings
            </router-link>
            <router-link tag="a" class="menu-item" :to="{ name: 'Game', params: { username: username } }"  exact>
                <i class="fas fa-gamepad"></i>Game Settings
            </router-link>
            <a class="menu-item" @click="CreateLobby()" v-if="staff">
                <i class="fas fa-edit"></i>CREATE 5V5 LOBBY
            </a>
        </div>
    </nav>
    <Notification v-if="notification" @notification="noti()"  />
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import Notification from './Notification.vue';

export default {
  name: 'Navbar',
  data() {
    return {
        username: null,
        leafs: null,
        profile_image: null,
        notification: false,
        menu: false,
        total_notifications: 0,
        staff: false,
    };
  },
  props: {
  },
  components: {
      Notification,
  },
  methods: {
      CreateLobby() {
          this.$store.dispatch('csgo/create');
          this.Menu();
      },
      open() {
        this.$emit('sidebar');
      },
      noti() {
        if (this.notification === true) {
            this.notification = false;
            this.CurrentUser();
        } else {
            this.notification = true;
        }
        this.total_notifications = 0;
      },
      Menu() {
        if (this.menu === true) {
            this.menu = false;
        } else {
            this.menu = true;
        }
      },
      toggle() {
        this.$emit('game');
      },
      Sock() {
          const vm = this;
            this.connection = new WebSocket('wss://api.playtonia.com/ws/notification/'.concat(this.username).concat('/'));
            this.connection.onmessage = function (event) {
                const data = JSON.parse(event.data);
                if (data.message === 'NOTIFICATION') {
                    vm.CurrentUser();
                }
            };
      },
      CurrentUser() {
        axios
        .get('/player/current_user')
        .then((response) => {
          if (response.status === 201) {
              this.username = response.data.username;
              this.Sock();
              this.leafs = response.data.leafs;
              this.total_notifications = response.data.total_notifications;
              this.staff = response.data.is_staff;
              this.$store.dispatch('profile/Username', response.data.username);
              this.$store.dispatch('lobby/staff', response.data.is_staff);
          }
          if (response.data.profile_image) {
              this.profile_image = response.data.profile_image;
          }
        })
        .catch((e) => {
          if (e.response.status === 401) {
              localStorage.removeItem('token');
              this.$router.push('/');
          }
        });
      },
  },
  mounted() {
      if (localStorage.getItem('token')) {
        this.CurrentUser();
      }
  },
  computed: {
    ...mapGetters({
        game: 'dashboard/Game',
    }),
  },
    watch: {
        $route() {
            this.menu = false;
        },
    },
};
</script>

<style scoped>
.drop-down{
    border-radius: 4px;
    position: absolute;
    -webkit-box-shadow: 0 0 20px 0 rgba(0,0,0,.5);
    box-shadow: 0 0 20px 0 rgba(0,0,0,.5);
    background-color: #1b2731;
    width: 261px;
    top: 71px;
    right: 14px;
    z-index: 1000;
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
.top-nav{
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: radial-gradient(#18242c ,#0f131b );
    box-shadow: 7px 7px 10px rgba(0,0,0,.3);
    z-index: 3;
}
.hamburger-menu {
    background: #1b2731;
    display: none;
}
.wrapper-menu {
    width: 20px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 330ms ease-out;
    float: left;
}
.wrapper-menu.open {
    transform: rotate(-45deg);
}
.line-menu {
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    border-radius: 5px;
    width: 100%;
    height: 3px;
}
.line-menu.half {
    width: 50%;
}
.line-menu.start {
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
}
.open .line-menu.start {
    transform: rotate(-90deg) translateX(3px);
}
.line-menu.end {
    align-self: flex-end;
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
}
.open .line-menu.end {
    transform: rotate(-90deg) translateX(-3px);
}
.play-wrapper{
    margin-left: 10px;
    display: flex;
    float: left;
}
.playtonia-logo{
    position: relative;
    width: 50px;
    height: 60px;
    display: flex;
}
.playtonia-logo img{
    width: 100%;
    margin: auto 0;
}
.game-select{
    width: auto;
    margin-left: 10px;
    min-width: 110px;
    padding:21px 8px;
    text-transform: uppercase;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    font-size: 16px;
    color: #6c829d;
    background-color: transparent;
    border: none;
    letter-spacing: .3px;
    outline: none;
    text-align: center;
    cursor:pointer;
    font-weight: 700;
}
.game-select i{
    font-size: 14px;
    margin: 0 10px 0 0;
}
.game-select:hover{
    background-color: #6c829d0d;
    color: #becde3;
}
.game-select:hover i{
    color: #3CA3F0;
}
.pro-noti{
    float: right;
    display: flex;
    flex-direction: row;
    height: 100%;
}
.notification{
  margin-right: 20px;
  display: flex;
}
.notification > .notification-noti , .notification-chat , .notification-cart{
  margin: auto 10px;
  font-size: 20px;
  color: #6c829d;
  transition: all .2s ease-in-out;
  cursor: pointer;
}
.notification-noti:hover , .notification-chat:hover , .notification-cart:hover{
  color: white;
  transform: scale(1.1);
}
.notification-noti{
  position: relative;
}
.notification_num{
    position: absolute;
    top: -6px;
    right: -10px;
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    border-radius: 50%;
    width: 17px;
    height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    color: #1d3333;
    font-weight: 800;
}
.profile_card{
    flex-direction: row;
    -ms-flex-align: stretch;
    align-items: stretch;
    position: relative;
    z-index: 1;
    display: flex;
    border-radius: 4px;
    float: right;
    height: 100%;
    width: 280px;
    cursor: pointer;
}
.profile_card:hover {
    background-color: #6c829d0d;
}
.profile_card:before {
    content: "";
    position: absolute;
    top: 10px;
    width: 1px;
    background-color: #2a2d30;
    -webkit-box-shadow: 1px 0 0 #000000;
    box-shadow: 1px 0 0 #000000;
    height: calc(100% - 20px);
    left: -10px;
}
.profile_card_fig{
    flex-basis: 40px;
    -ms-flex-item-align: center;
    align-self: center;
    position: relative;
}
.profile_card_fig img{
    display: block;
    border-radius: 5px;
}
.profile_card_fig_img{
    object-fit: cover;
    object-position: center center;
    height: 40px;
}
.profile_card_conent {
    flex: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0px 15px;
    color: white;
}
.profile_card > .profile_card_conent > .participants_card_title{
    max-width: 200px!important;
    font-size: 15px;
    margin-bottom: .2em;
}
.profile_card > .profile_card_conent > .participants_card_discription{
    max-width: 200px!important;
    margin: 0px;
}
.participants_card_fig_teamlogo {
    position: absolute;
    right: -6px;
    bottom: -6px;
    width: 20px;
}
.participants_card_fig_teamlogo img{
  border-radius: 50%;
}
.participants_card_discription_span{
  margin-right: 20px;
}
.participants_card_discription_span img{
  width: 15px;
  margin-right: 5px;
  margin-bottom: -3px;
}
@media (min-width: 320px) and (max-width: 767px) {
    .hamburger-menu {
        background: #1b2731;
        display: flex;
        width: 70px;
        justify-content: center;
        align-items: center;
    }
    .play-wrapper{
        margin-left: 0px;
    }
    .playtonia-logo{
        width: 40px;
    }
    .game-select{
        display: none;
    }
   .profile_card{
        width: 40px;
        margin-right: 10px;
    }
    .profile_card_conent{
        display: none;
    }
    /* .notification {
        display: none;
    } */
}
</style>
