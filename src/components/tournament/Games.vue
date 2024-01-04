<template>
  <div class="games__tournament">
     <div class="wrapper"  id="3">
        <div class="games__card" @click="Switch('all_games')" v-bind:class="{ active: this.$route.params.game === 'all_games' }">
            <div class="overlay" ></div>
            <div class="inner_img">
                <img  src="../../assets/tournament/background/all_games.jpg">
            </div>
            <div class="game__name">ALL GAMES</div>
        </div>
        <div class="games__card" @click="Switch('CSGO')" v-bind:class="{ active: this.$route.params.game === 'CSGO' }">
            <div class="overlay" ></div>
            <div class="inner_img">
                <img  src="../../assets/tournament/background/csgo.png">
            </div>
            <div class="game__name">COUNTER STRIKE</div>
        </div>
        <div class="games__card" @click="Switch('VALORANT')" v-bind:class="{ active: this.$route.params.game === 'VALORANT' }">
            <div class="overlay" ></div>
            <div class="inner_img">
                <img  src="../../assets/tournament/background/valorant.jpg">
            </div>
            <div class="game__name">VALORANT</div>
        </div>
        <div class="games__card" @click="Switch('HEARTHSTONE')" v-bind:class="{ active: this.$route.params.game === 'HEARTHSTONE' }">
            <div class="overlay" ></div>
            <div class="inner_img">
                <img  src="../../assets/tournament/background/hs.jpg">
            </div>
            <div class="game__name">HEARTH STONE</div>
        </div>
        <div class="games__card" @click="Switch('DOTA2')" v-bind:class="{ active: this.$route.params.game === 'DOTA2' }">
            <div class="overlay" ></div>
            <div class="inner_img">
                <img  src="../../assets/tournament/background/dota2.png">
            </div>
            <div class="game__name">DOTA 2</div>
        </div>
        <div class="games__card" @click="Switch('CODM')" v-bind:class="{ active: this.$route.params.game === 'CODM' }">
            <div class="overlay" ></div>
            <div class="inner_img">
                <img  src="../../assets/tournament/background/cod.jpg">
            </div>
            <div class="game__name">CALL OF DUTY MOBILE</div>
        </div>
        <div class="games__card" @click="Switch('R6')" v-bind:class="{ active: this.$route.params.game === 'R6' }">
            <div class="overlay" ></div>
            <div class="inner_img">
                <img  src="../../assets/tournament/background/r6.jpg">
            </div>
            <div class="game__name">RAINBOW SIX SEIGE</div>
        </div>
        <div class="games__card" @click="Switch('PUBGM')" v-bind:class="{ active: this.$route.params.game === 'PUBGM' }">
            <div class="overlay" ></div>
            <div class="inner_img">
                <img  src="../../assets/tournament/background/pubg.jpg">
            </div>
            <div class="game__name">PUBG MOBILE</div>
        </div>
        <div class="games__card" @click="Switch('MLBB')" v-bind:class="{ active: this.$route.params.game === 'MLBB' }">
            <div class="overlay" ></div>
            <div class="inner_img">
                <img  src="../../assets/tournament/background/mlbb.png">
            </div>
            <div class="game__name">MOBILE LEGENDS BANG BANG</div>
        </div>
     </div>
     <div class="side_overlay" ></div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Info',
  data() {
    return {
    };
  },
  methods: {
      Switch(data) {
            this.$router.push({ name: this.$route.name, params: { game: data } });
      },
  },
  mounted() {
        const obj = document.getElementById('3');
        setTimeout(() => { obj.scrollLeft = 200; }, 3000);
        setTimeout(() => { obj.scrollLeft = 300; }, 4000);
        setTimeout(() => { obj.scrollLeft = 0; }, 5000);
  },
};
</script>

<style scoped>
img{
    max-width: unset;
}
.games__tournament{
    position: relative;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
::-webkit-scrollbar-thumb {
    background: transparent;
}
.side_overlay{
    position: absolute;
    /* background: #000000b8; */
    top: 0;
    right:0;
    width: 30px;
    height: 100%;
}
.wrapper{
    overflow: auto;
    display: flex;
    align-items: center;
    padding: 10px;
}
.games__card{
    position: relative;
    margin-right: 20px;
    cursor: pointer;
    border-radius: 9px;
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
}
.games__card:hover{
    transform: translateY(-5px);
    transition: all .15s;
    box-shadow: 0px 0px 10px 0px #00c7ff;
}
.active{
    box-shadow: 0px 0px 10px 0px #00c7ff;
}
.games__card .overlay{
    position: absolute;
    height: 100%;
    /* background: #00000042; */
    width: 100%;
    border-radius: 9px;
}
.games__card .game__name{
    position: absolute;
    width: 100%;
    bottom: 0;
    color: white;
    font-size: 12px;
    background: #1b2731;
    text-align: center;
    padding: 3px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
}
.inner_img{
    width: 200px;
}
.inner_img img{
    width: 100%;
    display: block;
    border-radius: 10px;
}
</style>
