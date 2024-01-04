<template>
  <div class="members" v-if="team_data">
      <router-link  tag="div" class="eventparticipant-card" :to="{ name: 'Profile',params:{username:member.player.username} }" v-for="member in team_data.members" :key="member.id">
        <div class="eventparticipant-card_fig">
            <img src="../../assets/profile/logo.png">
        </div>
        <div class="eventparticipant-card_conent">
            <div class="eventparticipant-card_name">{{member.player.username}}</div>
            <div class="eventparticipant-card_info">
                <div class="participants_card_discription" v-if="member.game_id">
                    <span class="participants_card_discription_span">COD ID : {{member.game_id.cod_id}}</span>
                    <span class="participants_card_discription_span">COD IGN : {{member.game_id.cod_ign}}</span>
                </div>
            </div>
        </div>
      </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'members',
    data() {
        return {
        };
    },
    computed: {
        ...mapGetters({
            team_data: 'team/Team',
        }),
    },
    components: {
    },
    methods: {
    },
};
</script>
<style scoped>
.members{
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 10px;
    grid-auto-flow: dense;
    display: grid;
    width: 100%;
}
.eventparticipant-card_info > .participants_card_discription{
    /* max-width: 200px!important; */
    margin: 0px;
    display: flex;
    flex-direction: column;
}
.eventparticipant-card_info , .participants_card_discription {
    font-size: 14px;
    margin-bottom: .4em;
    line-height: 1.2;
    font-weight: 700;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    /* max-width: 130px; */
    color: #fff;
}
.participants_card_discription_span{
    margin-right: 20px;
    margin-top: 10px;
}
.participants_card_discription_span img{
    width: 15px;
    margin-right: 5px;
    margin-bottom: -3px;
}
.participants_card_discription{
    font-size: 12px;
    color: #ffffff3b;
    /* max-width: 150px; */
}
.eventparticipant-card{
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
    background: #1b2731;
    cursor: pointer;
    flex-direction: row;
    -ms-flex-align: stretch;
    align-items: stretch;
    position: relative;
    display: flex;
    border-radius: 4px;
    padding: 7px;
}
.eventparticipant-card:hover{
    box-shadow: 0px 1px 20px 0px #81888f2b;
    transform: translateY(-5px);
    transition: all .15s;
    box-shadow: 0px 0px 10px 0px #00c7ff;
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
.eventparticipant-card_info_flag{
  width: 20px;
}
.eventparticipant-card_info_flag img{
  display: block;
}
.eventparticipant-card_info_cnt{
    padding-left: 10px;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.eventparticipant-card-onlinedot{
  position: absolute;
  right: 10px;
  top: 10px;
  width: 5px;
  height: 5px;
  background-color: #38ff00;
  border-radius: 50%;
  box-shadow: 0 0 9px #38ff00c7;
}
</style>
