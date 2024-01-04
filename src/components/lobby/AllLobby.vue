<template>
  <div class="lobbies">
    <router-link  tag="div" class="lobby_wrapper_card" :to="{ name: 'Lobby',params:{lobby_id:data.lobby_id} }" >
        <div class="lobby_wrapper_card_inner">
            <header class="lobby_wrapper_card_header">
                <h3 class="lobby_wrapper_card_header_text"> {{data.team_size}} vs {{data.team_size}}</h3>
                <time class="lobby_wrapper_card_header_date" datetime="2018-04-26">{{data.lobby_match_start_time}}</time>
            </header>
                <header class="lobby_wrapper_card_header2">
                <h3 class="lobby_wrapper_card_header2_text">{{data.tournament_name}}</h3>
                <div class="lobby_wrapper_card_header2_subtext"></div>
            </header>
            <div class="lobby_wrapper_card_contant">
                <div class="lobby_wrapper_card_contant_team1">
                    <div class="lobby_wrapper_card_contant_team1_fig">
                        <img src="../../assets/profile/logo.png">
                    </div>
                    <div class="lobby_wrapper_card_contant_team1_name">
                        <div class="lobby_wrapper_card_contant_team1_nametext">{{data.team_1}}</div>
                        <div class="lobby_wrapper_card_contant_team1_namesubtext"></div>
                    </div>
                </div>
                <div class="lobby_wrapper_card_contant_vs" style="color:white;">
                    VS
                </div>
                <div class="lobby_wrapper_card_contant_team2">
                    <div class="lobby_wrapper_card_contant_team1_fig">
                        <img src="../../assets/profile/logo.png">
                    </div>
                    <div class="lobby_wrapper_card_contant_team1_name">
                        <div class="lobby_wrapper_card_contant_team1_nametext">{{data.team_2}}</div>
                        <div class="lobby_wrapper_card_contant_team1_namesubtext"></div>
                    </div>
                </div>
            </div>
            <div class="lobby_wrapper_card_button">
                <span>view lobby</span>
            </div>
        </div>
    </router-link>
  </div>
</template>
<script>
/* eslint-disable */
// @ is an alias to /src

export default {
  name: 'AllLobby',
  data() {
    return {
    };
  },
  props: ['data'],
  components: {
  },
  methods: {
  },
  mounted() {
  },
};
</script>

<style scoped>
.main-layout__content{
	position: relative;
}
.page_nav_lobby{
	color: white;
    padding: 30px;
    font-size: 13px;
    font-weight: 900;
}
.page_nav_lobby i{
	margin-right: 5px;
}
.mobile_search{
	display: none;
}
.lobby_nav_wrapper{
	padding: 1rem;
}
.lobby_nav{
	background-color: #1b2731;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    margin: 20px auto 20px auto;
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
    width: 160px; 
    text-transform: uppercase;
    position: relative;
    /* border-width: 0px; */
    transition: 0.5s ease;
    white-space: nowrap;
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
.lobby_nav_links_search{
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 50px;
}
.lobby_nav_links_search_input{
	padding: 12px 20px;
    width: -webkit-fill-available;
    font-size: 13px;
    color: #fff;
    background-color: #0d16209e;
    border: 0px solid #4b3b60;
    border-radius: 5px;
}
.lobby_nav_links_search_input:focus{
	color: #fff;
    box-shadow: 0px 0px 4px 0px #3CA3F0;
    outline: none;
}

.lobby_container{
	max-width: 1460px;
    margin: auto;
}
.lobby_wrapper {
    grid-template-columns: repeat(auto-fill, minmax(267px, 1fr));
    grid-auto-flow: dense;
    display: grid;
    grid-gap: 2rem;
    padding: 16px;
}
.lobby_wrapper_card{
	box-shadow: 2px 3px 6px rgba(0,0,0,.5);
    background-color: #1b2731; 
    /*background-image: url(https://app.firstblood.io/assets/img/dota2/IMG_TeamCreateCard_Dota2.png);*/
    background-image: url(/home/developer/Downloads/2.png);
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: 4px;
    height: max-content;
    background-size: contain;
}
.lobby_wrapper_card:hover{
	transform: translateY(-5px);
    transition: all .15s;
    box-shadow: 0px 0px 10px 0px #00c7ff;
}
.lobby_wrapper_card_inner{
	background: linear-gradient(#00000000 71%, rgba(0, 0, 0, 0.78));
	padding: 1rem;
}

.lobby_wrapper_card_header{
	margin-bottom: 2rem;
	border-bottom: 1px solid #3e4652;
    padding: 10px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: -1rem;
    margin-right: -1rem;
}
.lobby_wrapper_card_header_text , .lobby_wrapper_card_header_date{
	letter-spacing: -0.02em;
    line-height: 1.2em;
    font-weight: 400;
    font-size: 13px;
    margin:0;
    color: #ffffff90;
}
.lobby_wrapper_card_header2{
	text-align: center;
    margin-bottom: 3rem;
}
.lobby_wrapper_card_header2_text{
	font-size: .9rem;
    line-height: 1.2em;
    margin-bottom: .25em;
    text-transform: uppercase;
    color:#becde3;
}
.lobby_wrapper_card_header2_subtext{
	font-size: .8rem;
    line-height: 1.2em;
    color: #ffffff90;
}
.lobby_wrapper_card_contant{
	margin-bottom: 3rem;
    display: grid;
    grid-template-columns: auto auto auto;
    /*width: 100%;*/
}
.lobby_wrapper_card_contant_team1_fig{
	max-width: 60px;
	height: auto;
	margin:auto;
}
.lobby_wrapper_card_contant_team1_fig img{
	width: 100%;
    display: block;
}
.lobby_wrapper_card_contant_team1_name{
	padding: 6px 0 0 0;
}
.lobby_wrapper_card_contant_team1_nametext{
	display: block;
    font-size: .9rem;
    line-height: 1.2em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 80px;
    margin: 0 auto 0.1em auto;
    color: #fff;
}
.lobby_wrapper_card_contant_team1_namesubtext{
	font-size: .8rem;
    line-height: 1.2em;
    font-family: "Open Sans", sans-serif;
    text-transform: none;
    font-weight: 400;
    color: #ffffff90;
    text-align: center;
}
.lobby_wrapper_card_contant_vs{
	display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.lobby_wrapper_card_contant_vs_icon{

    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: #1b2731;
    font-size: 14px;
    text-align: center;
    line-height: 24px;
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);

}
.lobby_wrapper_card_contant_vs_icon:hover{
	box-shadow: 0px 1px 20px 0px #00faff;
    text-shadow: 1px 1px #1a8074;
    background-image: linear-gradient(to right, rgb(77, 228, 255) 0%, rgb(41, 132, 132) 100%);
    color: #fff;
}
.lobby_wrapper_card_button{
	border: solid #00a3f7 1px;
    border-radius: 8px;
    color: #6c829d;
    padding: 9px;
    background: #0f1c27;
    width:max-content;
    white-space: nowrap;
    margin: auto;
    position: relative;
    cursor: pointer;
}
.lobby_wrapper_card_button:hover{
	color: white;
    box-shadow: 0px 0px 10px 0px #00c7ff;
}


@media (min-width: 320px) and (max-width: 767px) {
.lobby_nav > .lobby_nav_links > a{
	width: 50%;
}
.lobby_nav_links_search{
	display: none;
}
.mobile_search{
	display: block;
	position: absolute;
	right: 15px;
    top: 20px;
}
.mobile_search_input{
	background-color: #1b2731;
    border: none;
    padding: 12px 20px;
    width: -webkit-fill-available;
    font-size: 13px;
    color: #fff;
    background-color: #1b2731;
    border: none;
    border-radius: 5px;
}
.mobile_search_input:focus{
    color: #fff;
    box-shadow: 0px 0px 4px 0px #3CA3F0;
    outline: none;
}
.lobby_nav{
	margin: 0;
}

}
</style>
