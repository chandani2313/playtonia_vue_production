<template>
  <div class="teams" v-if="profile_data">
      <div class="create_team" @click="CreateTeam()">
           <div> + </div>  <span>Create Team
           </span>
      </div>
      <TeamCard  v-for="team in profile_data.teams" :data=team.team :key="team.id" />
      <CreateTeam v-if="create_team" @team="CreateTeam()" />
  </div>
</template>
<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import CreateTeam from './CreateTeam.vue';
import TeamCard from './TeamCard.vue';

export default {
  name: 'Teams',
  data() {
    return {
        create_team: false,
        teams: null,
    };
  },
  components: {
    CreateTeam,
    TeamCard,
  },
  computed: {
    ...mapGetters({
        profile_data: 'profile/Profile',
    }),
  },
  methods: {
      CreateTeam() {
          if (this.create_team === false) {
              this.create_team = true;
          } else {
              this.create_team = false;
          }
      },
  },
  mounted() {
      if (this.$route.query.t === 'team') {
            this.CreateTeam();
      }
  },
};
</script>

<style >
.teams{
    display: grid;
    grid-template-columns: repeat(2,minmax(100px,1fr));
    grid-gap: 12px;
    width: 100%;
}
.create_team{
    background: #1b2731;
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
    -webkit-box-shadow: 2px 3px 6px rgba(0,0,0,.5);
    color: #fff;
    border-radius: .5rem;
    padding: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    cursor: pointer;
    flex-direction: column;
}
.create_team span{
    font-size: 15px;
}
.input-tel__input{
    border: 1px solid #191919!important;
}
.country-selector__input{
    border: none!important;
}
@media (min-width: 320px) and (max-width: 767px) {
    .teams{
        grid-template-columns: repeat(1,minmax(100px,1fr));
    }
}
</style>
