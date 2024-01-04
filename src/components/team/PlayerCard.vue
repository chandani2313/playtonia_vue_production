<template>
  <div class="player_card">
    <div class="eventparticipant-card"  >
        <div class="eventparticipant-card_fig">
            <img src="../../assets/profile/logo.png" style="">
        </div>
        <div class="eventparticipant-card_conent">
            <div class="eventparticipant-card_name">{{player.player__username}}</div>
            <div class="eventparticipant-card_info">
            </div>
        </div>
        <div class="eventparticipant-card-onlinedot" ></div>
        <div class="notification_card_request">
            <span>
                <a class=""  @click="Invite(player.player__id)">invite</a>
                <!-- <a href="#" class=" ">remove</a> -->
            </span>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
  name: 'player_card',
  data() {
    return {
        team_id: this.$route.params.alias,
    };
  },
  props: ['player'],
  components: {
  },
  methods: {
    noti() {
        this.$emit('removecard');
    },
    Invite(PlayerId) {
        axios
        .post('/team/invite_member', {
            team_alias: this.team_id,
            player_id: PlayerId,
        })
        .then((response) => {
            if (response.status === 200) {
                this.players = response.data;
                this.$notify({
                    group: 'notifications',
                    title: 'Success.',
                    text: 'Successfully Invited Player.',
                });
                this.$emit('removecard');
            }
        })
        .catch((e) => {
            console.log(e.response.data);
            if (e.response.data.response[0] === "invite_exists" ){
                this.$notify({
                    type: 'warn',
                    title: 'Warning.',
                    group: 'notifications',
                    text: 'Player Invited Already.',
                });
                this.$emit('removecard');
            }
        });
    },
  },
};
</script>


<style scoped>
 .notification_card_request{
  text-align: center;
  display: flex;
  align-self: center;
 }
.notification_card_request span a {
    cursor: pointer;
    padding: 4px 6px;
    font-size: 11px;
    line-height: 2.5em;
    border-radius: 4px;
    transition: all .2s ease-in-out;
    color: #1b2731d1;
    text-transform: uppercase;
    margin-right: 10px;
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    font-weight: 600;
} 
.notification_card_request span a:hover { 
    color: #fff;
    box-shadow: 0px 0px 5px 0px #3CA3F0;      
}
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
    margin-top: 10px;
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
</style>
