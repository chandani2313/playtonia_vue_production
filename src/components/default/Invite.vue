<template>
  <div class="join_team">
     <div class="message__wrapper">
         <div class="message">
         {{noti.notification_obj.notification_data.sender_name}} {{noti.notification_obj.notification_message}}
     </div>
        <div class="btn__wrapper" v-if="noti.notification_obj.notification_data.notification_status === 'waiting'">
            <button class="btn" ref="join"  @click="AcceptJoin(noti.notification_obj.notification_data.team_id,'accept',noti.notification_obj.id)">ACCEPT</button>
            <button class="btn red" @click="AcceptJoin(noti.notification_obj.notification_data.team_id,'decline',noti.notification_obj.id)" >DECLINE</button>
        </div>
        <div class="btn__wrapper" v-if="noti.notification_obj.notification_data.notification_status === 'declined'">
            <button class="btn red" >DECLINED</button>
        </div>
         <div class="btn__wrapper" v-if="noti.notification_obj.notification_data.notification_status === 'accepted'">
            <button class="btn" >APPROVED</button>
        </div>
     </div>
     <div class="time">{{noti.notification_obj.created_at | moment("from", "now")}}</div>
     <Csgo v-if="game_id" @close="Close()" :error="error"  />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import Csgo from '../team/Csgo.vue';


export default {
  name: 'JoinTeam',
  data() {
    return {
        game_id: false,
        error: '',
    };
  },
  props: ['noti'],
  components: {
      Csgo,
  },
   computed: {
    ...mapGetters({
        username: 'profile/Username',
    }),
  },
  methods: {
    Close() {
      this.game_id = false;
    },
    SockInvite() {
          const vm = this;
            this.connection = new WebSocket('wss://api.playtonia.com/ws/general/'.concat(this.username).concat('/'));
            this.connection.onmessage = function (event) {
                const data = JSON.parse(event.data);
                if (data.message === 'REFRESH') {
                    vm.Close();
                    vm.$refs.join.click();
                }
                if (data.message === 'DUPLICATE') {
                    vm.error = 'The steam account is already linked with different player.';
                }
            };
    },
    AcceptJoin(TeamId, Status, NotiId) {
        if (Status === 'accept') {
            this.SockInvite();
        }
        axios
        .post('/team/accept_invite', {
        team_id: TeamId,
        status: Status,
        notification_id: NotiId,
        })
        .then((response) => {
            if (response.status === 200) {
                this.$emit('reload');
            }
        })
        .catch((e) => {
            const [AccountStatus] = e.response.data.response;
            if (AccountStatus === 'game_id') {
                this.game_id = true;
            }
        });
      },
  },
};
</script>

<style scoped>
.message__wrapper{
    display: flex;
}
.btn__wrapper{
    display: flex;
    align-items: center;
    padding: 2px;
}
.red{
    background: linear-gradient(90deg,#e4281b,#ef2e2e) !important;
}
.btn{
    background: linear-gradient(90deg,#1b8fe4,#2e88ef);
    padding: 5px;
    outline: none;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    box-shadow: 5px 10px 20px #141f28;
    color: white;
    font-weight: 500;
    font-size: 10px;
    margin-right: 10px;
}
.btn:hover{
    box-shadow: 0px 0px 10px 0px #2e88ef;
}
.join_team{
    padding: 10px 15px;
    border-bottom: 1px solid hsla(0,0%,100%,.1);
}
.message{
    margin-bottom: 10px;
    color: hsla(0,0%,100%,.56);
    margin-right: 10px;
    width: 80%;
}
.time{
    font-size: 10px;
    text-align: right;
    margin-right: 10px;
    color: hsla(0,0%,100%,.56);
}
</style>
