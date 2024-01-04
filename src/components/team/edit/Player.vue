<template>
  <div class="player_card">
    <div class="eventparticipant-card"  >
        <div class="eventparticipant-card_fig">
            <img src="../../../assets/profile/logo.png" style="">
        </div>
        <div class="eventparticipant-card_conent">
            <div class="eventparticipant-card_name">{{player.player.username}}</div>
            <div class="eventparticipant-card_info">
            </div>
        </div>
        <div class="eventparticipant-card-onlinedot" ></div>
        <div class="notification_card_request">
            <span>
                <a class=""  @click="Remove(player.player.id,player.player.username)">REMOVE</a>
                <!-- <a href="#" class=" ">remove</a> -->
            </span>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'player_card',
  data() {
    return {
        team_id: null,
    };
  },
  props: ['player'],
  computed: {
    ...mapGetters({
        team_data: 'team/Team',
    }),
  },
  methods: {
    Remove(PlayerId,Username) {
        this.$dialog
        .confirm('Are you sure you want to remove '.concat(Username).concat(' from the team ?'))
        .then(() => {   
            axios.post('/team/remove_member', {
                team_id: this.team_id,
                player_id: PlayerId,
            })
            .then((response) => {
                if (response.status === 201) {
                    this.$notify({
                        title: 'Success.',
                        group: 'notifications',
                        text: 'Removed Member From Team Successfully.',
                    });
                    this.Team();
                }
            })
            .catch(() => {
                this.$notify({
                    type: 'warn',
                    title: 'WARNING',
                    group: 'notifications',
                    text: 'TRY AGAIN.',
                });
            });
        })
        .catch(() => {
            this.$notify({
                type: 'warn',
                title: 'Warning.',
                group: 'notifications',
                text: 'cancelled',
            });
        });
    },
    Team() {
        this.$Progress.start();
        axios
        .get('/team/'.concat(this.$route.params.alias))
        .then((response) => {
            if (response.status === 200) {
                this.$Progress.finish();
                this.$store.dispatch('team/Team', response.data);
            }
        })
        .catch((e) => {
            if (e.response.status === 400) {
                this.$notify({
                    type: 'warn',
                    title: 'Warning.',
                    group: 'notifications',
                    text: 'Something went wrong',
                });
            }
        });
    },
  },
  mounted() {
      if (this.team_data) {
          this.team_id = this.team_data.id;
      }
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
    color: white;
    text-transform: uppercase;
    margin-right: 10px;
    background-image: linear-gradient(to right, #fc3636 0%, #e91916 100%)!important;
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
