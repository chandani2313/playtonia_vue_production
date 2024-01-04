<template>
  <div class="tour">
    <!-- <div class="section_bottom_title_wrap">
        <div class="section_bottom_title_wrap_text">FEATURED TOURNAMENTS</div>
        <div class="section_bottom_title_wrap_morebtn">View All</div>
    </div> -->

        <router-link class="event_card animated fadeIn"  v-for="tournament in tournaments" :key="tournament.id" tag="div" :to="{ name: 'Tournament' ,params: {id: tournament.id}}"  >
            <div class="event_card_top">
                <div class="event_card_inner_img">
                    <div class="inner_overlay"></div>
                    <div class="inner_bg">
                        <img v-if="tournament.game === 'CODM'" src="../../assets/tournament/background/cod.jpg">
                        <img v-if="tournament.game === 'R6'" src="../../assets/tournament/background/r6.jpg">
                        <img v-if="tournament.game === 'PUBGM'" src="../../assets/tournament/background/pubg.jpg">
                        <img v-if="tournament.game === 'MLBB'" src="../../assets/tournament/background/mlbb.png">
                        <img v-if="tournament.game === 'CSGO'" src="../../assets/tournament/background/csgo.png">
                        <img v-if="tournament.game === 'DOTA2'" src="../../assets/tournament/background/dota2.png">
                        <img v-if="tournament.game === 'VALORANT'" src="../../assets/tournament/background/valorant.jpg">
                        <img v-if="tournament.game === 'HEARTHSTONE'" src="../../assets/tournament/background/hs.jpg">
                    </div>
                    <div class="event_inner_logo">
                        <img :src="tournament.tournament_logo_url"/>
                    </div>
                </div>
                <div class="event_card_inner_content">
                    <div v-if="!tournament.tournament_status.registration_start && tournament.tournament_status.show" class="event_card_timing animated pulse"><span> {{tournament.tournament_status.message}}  {{tournament.registration_start  | moment("from", "now")  }} </span></div>
                    <div v-if="tournament.tournament_status.registration_start && tournament.tournament_status.show" class="event_card_timing animated pulse infinite"><span> {{tournament.tournament_status.message}}  {{tournament.registration_end  | moment("from", "now")  }} </span></div>
                    <div v-if="!tournament.tournament_status.registration_start && !tournament.tournament_status.show && !tournament.tournament_status.tournament_end" class="event_card_timing"><span> {{tournament.tournament_status.message}}  {{tournament.tournament_end  | moment("from", "now")  }} </span></div>
                    <div v-if="!tournament.tournament_status.registration_start && !tournament.tournament_status.show && tournament.tournament_status.tournament_end" class="event_card_timing"><span> {{tournament.tournament_status.message}}  {{tournament.tournament_end  | moment("from", "now")  }} </span></div>
                    <div class="event_card_eventname_wrap">
                        <!-- <div class="event_card_eventicon" v-if="tournament.game === 'CODM'"><img src="../../assets/tournament/codm.jpg" /></div>
                        <div class="event_card_eventicon" v-if="tournament.game === 'R6'"><img src="../../assets/tournament/r6.png" /></div>
                        <div class="event_card_eventicon" v-if="tournament.game === 'PUBGM'"><img src="../../assets/tournament/pubgm.png" /></div> -->
                        <span class="event_card_eventname">{{tournament.tournament_name}}</span>
                    </div>
                    <div class="event_card_details_wrap">
                        <div class="details_prize_wrap">
                            <div class="details_prize_txt"><span>Prize Pool</span></div>
                            <div class="details_prize_icon_wrap">
                                <div class="details_prize_icon"><i class="fas fa-trophy"></i></div>
                                <div class="details_prize_num">{{tournament.prize_pool}}</div>
                            </div>
                        </div>
                        <div class="details_game_wrap">
                            <div class="details_game_txt"><span>Game Mode</span></div>
                            <div class="details_game_icon_wrap">
                                <div class="details_game_icon"><i class="fas fa-dice"></i></div>
                                <div class="details_game_num" >{{tournament.tournament_type_format}}</div>
                            </div>
                        </div>
                        <!-- <div class="details_credits_wrap">
                            <div class="details_credits_txt"><span>Credits</span></div>
                            <div class="details_credit_icon_wrap">
                                <div class="details_credit_icon"><i class="fab fa-xbox"></i></div>
                                <div class="details_credit_num">5</div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="event_card_footer">
                <div class="event_card_footer_image_wrap">
                    <div class="event_card_footer_image" v-for="participant in tournament.participants_data" :key="participant.id">
                        <img v-if="participant.player && participant.player.profile.profile_image" :src="participant.player.profile.profile_image">
                        <img v-if="participant.player && !participant.player.profile.profile_image" src="../../assets/profile/logo.png">
                        <img v-if="participant.team" src="../../assets/profile/logo.png">
                    </div>
                    <div class="event_card_footer_image" v-if="tournament.total_joined > 4" ><span>+{{tournament.total_joined - 4 }}</span></div>
                    <div class="event_card_footer_image remove_background" v-if="tournament.total_joined < 1"><span></span></div>
                </div>
                <div v-if="tournament.tournament_status.registration_start && tournament.tournament_status.show" class="event_card_footer_sigtxt" ><span>REGISTRATION OPEN</span></div>
                <div v-if="!tournament.tournament_status.registration_start && !tournament.tournament_status.show && !tournament.tournament_status.tournament_end" class="event_card_footer_sigtxt closed" ><span>ON GOING</span></div>
                <div v-if="!tournament.tournament_status.registration_start && !tournament.tournament_status.show && tournament.tournament_status.tournament_end" class="event_card_footer_sigtxt completed" ><span>COMPLETED</span></div>
            </div>
        </router-link>


  </div>
</template>

<script>
export default {
  name: 'Tournament',
  components: {
  },
  props: ['tournaments'],
};
</script>

<style scoped>
.remove_background{
    background: transparent !important;
}
.event_inner_logo{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
}
.event_inner_logo img {
    width: 50%;
    display: block;
}

.inner_bg img{
    width: 100%;
    display: block;
    border-radius: 10px;
}
.inner_overlay{
    background: #0000009e;
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 9px;
}
.tour{
    grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
    grid-auto-flow: dense;
    display: grid;
    grid-gap: 1rem;
    margin-bottom: 1rem;
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
.section_bottom_wrap_inner{
    /*grid-template-columns: repeat(auto-fill, minmax(394px, 1fr));*/
    grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
    grid-auto-flow: dense;
    display: grid;
    grid-gap: 1rem;
    margin-bottom: 1rem;
}
.event_card{
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
    background: #1b2731;
    cursor: pointer;
}
.event_card:hover{
  transform: translateY(-5px);
  transition: all .15s;
  /* background-image: linear-gradient(90deg, rgba(58, 52, 100, 0.9), rgba(26, 48, 74, 0.9)); */
  /* box-shadow: 2px 3px 6px #3a3464; */
}
.event_card_top{
  padding: 10px;
}
/* .event_card_inner_img img{
  width: 100%;
  max-height: 236px;
  display: block;
} */
.event_card_inner_img{
    position: relative;
}
.event_card_inner_content{
  padding: 1rem;
  min-height: 168px;
}
.event_card_timing{
    font-size: 10px;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
}
.event_card_eventname_wrap{
  display: flex;
  align-items: center;
  min-height: 50px;
  margin-bottom: 16px
}
.event_card_eventicon{
    font-size: 20px;
    padding: 4px 8px;
    border-radius: 5px;
    margin-right: 10px;
}
.event_card_eventicon img{
    width: 40px;
}
.event_card_eventname{
  color: white;
  font-size: 14px;
  font-weight: 900;
}
.event_card_details_wrap{
  display: flex;
  justify-content: space-between;
}
.details_credits_txt,.details_game_txt,.details_prize_txt{
    font-size: 12px;
    color: #566270;
    font-weight: 600;
    margin-bottom: 5px;
}
.details_prize_icon_wrap,.details_game_icon_wrap,.details_credit_icon_wrap{
    display: flex;
    align-items: center;

    /*margin-bottom: 10px;*/
}
.details_prize_icon,.details_game_icon,.details_credit_icon{
    font-size: 14px;
    margin-right: 7px;
    color: #f96b41;
}
.details_game_icon{
  color: #4d94ff;
}
.details_credit_icon{
  color: #80d329;
}
.details_prize_num,.details_game_num,.details_credit_num{
    color: white;
    font-weight: 900;
    font-size: 12px;
    text-transform: uppercase;
    max-width: 100px;
}
.event_card_footer{
    align-items: center;
    padding: 15px 12px;
    background-color: #222b35cc;
    display: flex;
    justify-content: space-between;
}
.event_card_footer_image_wrap{
  display: flex;
}
.event_card_footer_image{
    flex-basis: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 50px;
    overflow: hidden;
    min-width: 30px;
    width: 30px;
    height: 30px;
    background-color: #1b2731;
}
.event_card_footer_image:last-child {
  font-weight: 900;
  color: white;
  font-size: 13px;
  text-align: center;
  border-radius: 10px;
}
.event_card_footer_image:first-child {
  /* border-radius: 10px; */
}
.event_card_footer_image:not(:first-child) {
    margin-left: -.5rem;
}
.event_card_footer_sigtxt{
    font-size: 12px;
    color: #0b9ce6;
    text-shadow: 0 0 6px rgba(0,159,209,.2);
    font-weight: 600;
    text-align: right;
}
.closed{
    color: #e6c50b;
    text-shadow: 0 0 6px rgba(209, 206, 0, 0.2);
}
.completed{
    color: #77e800;
    text-shadow: 0 0 6px rgba(72, 255, 0, 0.2);
}
</style>
