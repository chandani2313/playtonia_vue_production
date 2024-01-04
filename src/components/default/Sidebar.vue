<template>
  <div id="sidebar">
    <div class="sidebar">
        <div class="sidebar_inner">
            <div class="icons">
                <div class="play-btn i">
                    <i class="fas fa-play"></i>
                </div>
                <router-link  tag="a" :to="{ name: 'Dashboard'}"  active-class="active" exact>
                    <div class="wrapper">
                        <i class="fas fa-gamepad"></i>
                        <div class="wrapper-text">Dashboard</div>
                    </div>
                </router-link>
                <router-link  tag="a" :to="{ name: 'AllTournament',params: {game: 'all_games'}}"  active-class="active" exact>
                    <div class="wrapper">
                        <i class="fas fa-trophy"></i>
                        <div class="wrapper-text">Tournaments</div>
                    </div>
                </router-link>
                <router-link  tag="a" :to="{ name: 'AllLobby'}"  active-class="active" exact>
                    <div class="wrapper">
                        <i class="fas fa-door-open"></i>
                        <div class="wrapper-text">Lobby</div>
                    </div>
                </router-link>
                <router-link  tag="a" :to="{ name: 'AllTeams'}"  active-class="active" exact>
                    <div class="wrapper">
                        <i class="fas fa-users"></i>
                        <div class="wrapper-text">Teams</div>
                    </div>
                </router-link>
                <!-- <a href="#">
                    <div class="wrapper">
                        <i class="fas fa-cart-arrow-down"></i>
                        <div class="wrapper-text">Market</div>
                    </div>
                </a>
                <a href="#">
                    <div class="wrapper">
                        <i class="fas fa-handshake"></i>
                        <div class="wrapper-text">Friends</div>
                    </div>
                </a> -->
            </div>
            <div class="logout_icons icons">
                <a  href="#" @click.prevent="Logout()">
                    <div class="wrapper">
                        <i class="fas fa-sign-out-alt"></i>
                        <div class="wrapper-text">Logout</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
  },
  methods: {
    Logout() {
      if (localStorage.getItem('token')) {
        localStorage.removeItem('token');
        this.$router.push('/');
      }
    },
  },
};
</script>

<style scoped>
.sidebar{
    position: fixed;
    left: 0;
    top: 60px;
    height: calc(100% - 60px);
    width: 70px;
    background: #1b2731;
    box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.25);
    display: block;
    z-index: 2;
}
.sidebar_inner{
    height: 100%;
    display: flex;
    flex-flow: column;
}
.sidebar .icons{
    width: 100%;
}
.sidebar a {
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 13px;
    transition: all 0.3s ease;
    color: white;
    position: relative;
}
.sidebar > a :hover .wrapper-name {
    display : block;
    transition: all 5.9s ease;
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
}
.play-btn{
    padding: 13px;
    display: block;
    text-align: center;
    margin-top: 10px;
}
.play-btn img{
    width: 43px;
}
.play-btn{
  color: white;
  font-size: 32px;
}
.i {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 5px;
  letter-spacing: 2px;
  transition: 1s box-shadow;
}

.i {
  box-shadow: 0 5px 35px 0px rgba(0,0,0,.1);
}

.i:before, .i:after {
  display: block;
  content: '';
  position: absolute;
  width: 50%;
  height: 75%;
  background-image: linear-gradient(to right, rgb(0, 242, 254) 0%, rgb(79, 172, 254) 100%);
  border-radius: 5px;
  z-index: -1;
  animation: 1s clockwise infinite;
  --webkit-clip-path: polygon(100% 50%, 0 0, 0 100%);
  clip-path: polygon(100% 50%, 0 0, 0 100%);
  margin-top: 9px;
}

.i:after {
  background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
  animation: 1.5s counterclockwise infinite;
  margin-right: 18px;
}
.i:before {
  margin-left: 16px;
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
.logout_icons a .wrapper:hover{
    background-image: linear-gradient(to right, #e91916 0%, #fc3636 100%)!important;
    color: white;
}
.wrapper-text{
    visibility: hidden;
    position: absolute;
    width: max-content;
    color: #fff;
    text-align: center;
    padding: 7px;
    font-size: 20px;
    border-radius: 6px;
    opacity: 0;
    transition: opacity 0.6s;
    top: 1px;
    left: 125%;
    background-image: linear-gradient(to right, #00f2fe 0%, #4facfe 100%);
}
.wrapper-text::after{
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -6px;
    border-width: 6px;
    border-style: solid;
    border-color: transparent #00f2fe transparent transparent;
}
.icons a .wrapper:hover .wrapper-text{
    visibility: visible;
    opacity: 1;
}
.icons > .active::before{
    content: "";
    position: absolute;
    width: 5px;
    background-color: #3CA3F0;
    -webkit-box-shadow: 1px 0 0 #303e53;
    box-shadow: 1px 0 0 #303e53;
    height: 40px;
    left: 0;
    -webkit-clip-path: polygon(0% 0%, 40% 0, 100% 50%, 40% 100%, 0% 100%);
    clip-path: polygon(0% 0%, 40% 0, 100% 50%, 40% 100%, 0% 100%);
}
.icons .active .wrapper{
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    border-radius: 8px;
    padding: 7px;
    font-size: 22px;
    box-shadow: 3px 2px 20px 3px rgba(0,0,0,.16);
}
.icons a .wrapper{
    padding: 7px;
    font-size: 22px;
    position: relative;
}
.icons a .wrapper:hover{
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    border-radius: 8px;
    padding: 7px;
    box-shadow: 3px 2px 20px 3px rgba(0,0,0,.16);
}
.logout_icons{
  margin-top: auto;
  position: relative;
}
.logout_icons:before {
    content: "";
    position: absolute;
    left:10px;
    height: 1px;
    background-color: #2a2d30;
    -webkit-box-shadow: 0 1px 0 #000000;
    box-shadow: 0 -1px 0 #000000;
    width: calc(100% - 20px);
    top: 5px;
}
.logout_icons a{
  color: red!important;
}
.logout_icons a .wrapper:hover{
    background-image: linear-gradient(to right, #e91916 0%, #fc3636 100%)!important;
    color: white;
}
.logout_icons a > .wrapper > .wrapper-text{
  background-image: linear-gradient(to right, #fc3636 0%, #e91916 100%)!important;
}
.logout_icons a > .wrapper > .wrapper-text::after{
  border-color: transparent #fc3636 transparent transparent;
}

</style>
