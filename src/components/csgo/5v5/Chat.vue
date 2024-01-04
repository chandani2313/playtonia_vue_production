<template>
  <div class="controls" v-if="lobby">
       <div class="chat__wrapper">
           <div class="message__wrapper" id="message__wrapper" >
                <div class="chat__message"  v-for="message in messages" :key="message.id" v-bind:class="message.message_obj.message_type">
                    <div class="team__name">{{message.message_obj.message_data.sender_name}}</div>
                    <div class="message">{{message.message_obj.message}}</div>
                    <div class="msg__time">{{message.created_at  | moment("from", "now")}}</div>
                </div>
           </div>
       </div>
       <div class="btn__inp">
           <textarea placeholder="Type your message here.."  v-model="chat_message"/>
           <button  class="btn"  @click="SendMessge()"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
       </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
  name: 'Controls',
  data() {
    return {
        chat_message: null,
        messages: null,
    };
  },
  methods: {
    SendMessge() {
        this.$Progress.start();
        axios
        .post('/csgo/5v5/lobby_chat', {
            lobby_id: this.$route.params.lobby_id,
            message: this.chat_message,
        })
        .then((response) => {
            if (response.status === 201) {
                this.chat_message = null;
                this.$Progress.finish();
            }
        })
        .catch((e) => {
            if (e.response.status === 400) {
                this.$Progress.finish();
                this.$notify({
                    type: 'warn',
                    title: 'Warning.',
                    text: 'unable to kick player',
                    group: 'notifications',
                });
            }
        });
    },
    GetMessge() {
        axios
        .get('/csgo/5v5/lobby_chat_messages/'.concat(this.$route.params.lobby_id))
        .then((response) => {
            if (response.status === 200) {
                this.messages = response.data;
                this.$nextTick(() => {
                    const messageb = document.getElementById('message__wrapper');
                    messageb.scrollTop = messageb.scrollHeight;
                });
            }
        })
        .catch((e) => {
            if (e.response.status === 400) {
                this.$notify({
                    type: 'warn',
                    title: 'Warning.',
                    text: 'unable to kick player',
                    group: 'notifications',
                });
            }
        });
    },
  },
  computed: {
    ...mapGetters({
        lobby: 'csgo/lobby',
    }),
  },
  created() {
      const vm = this;
      this.connection = new WebSocket('wss://api.playtonia.com/ws/lobby/'.concat(this.$route.params.lobby_id).concat('/'));
      this.connection.onmessage = function (event) {
          const data = JSON.parse(event.data);
          if (data.message === 'JOINED') {
              vm.GetMessge();
          }
        };
    },
    mounted() {
        this.GetMessge();
    },
};
</script>

<style scoped>
.btn__inp {
    width: 100%;
    height: 42px;
    display: flex;
}
.btn__inp textarea{
    width: 100%;
    padding: 10px;
    background: #00000047;
    color: white;
    outline: unset;
    border: unset;
    border-bottom-left-radius: 10px;
    resize: none;
}
.btn{
    background: linear-gradient(90deg,#1b8fe4,#2e88ef);
    width: 15%;
    height: 100%;
    outline: none;
    border-radius: 5px;
    border-style: none;
    margin: unset;
    cursor: pointer;
    box-shadow: unset;
    color: white;
    font-weight: 600;
}
.btn:hover{
    box-shadow:unset;
    transform: unset;
    transition-duration: .5s;
}
.team_1 {
    background-image: linear-gradient(to right, rgb(79, 91, 254) 0%, rgb(0, 152, 254) 100%);
}
.team_2 {
    background-image: linear-gradient(to left, rgb(79, 91, 254) 0%, rgb(0, 152, 254) 100%);
    float: right;
    margin-left: auto;
}
.admin {
    background-image: linear-gradient(to left, rgb(254, 79, 79) 0%, rgb(254, 38, 0) 100%);
    margin: auto;
}
.controls{
    width: 100%;
}
.chat__wrapper{
    width: 100%;
    height: 300px;
    background: #0000007a;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    color: white;
    padding: 15px;
}
.message__wrapper{
    overflow: auto;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
}
.chat__message{
    max-width: 56%;
    display: inline-block;
    word-break: break-all;
    color: #ffffff;
    padding: 3px 10px;
    border-radius: 10px;
    font-size: 14px;
    margin-bottom: 15px;
}
.chat__message .team__name{
    text-transform: uppercase;
    font-weight: bold;
    font-size: 9px;
}
.chat__message .message{
    padding: 10px;
}
.chat__message .msg__time {
    font-size: 10px;
    text-align: right;
    width: 100%;
}
</style>
