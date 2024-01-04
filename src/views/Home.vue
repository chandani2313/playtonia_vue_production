<template>
  <div class="home">
    <div class="top_part">
      <div class="top_partbg">
        <div class="top_innerpartbg">
          <div class="innerleftpartbg">
            <div class="innerleftpartbg_inner">
              <div class="game_platform_wrapper">
                <div class="game_platform_imgwrapper">
                  <img src="../assets/home/Playtonia Logo.png">
                </div>
                <div class="game_platform_txtwrapper">
                  <div class="game_platform">Amazing eSports Platform</div>
                  <div class="tournament">The real gaming begins here...</div>
                </div>
              </div>
              <div class="image_wrapper">
                <img src="../assets/home/SS.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_part">
      <div class="section_bottom_wrap">
        <Tournament/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Tournament from '../components/Home/Tournaments.vue';

export default {
  name: 'Home',
  components: {
    Tournament,
  },
};
</script>

<style scoped>
.top_part{
  position: relative;
  overflow: hidden;
  width: 100%;
}
.top_partbg{
  background-image: url(../assets/home/BG.jpg);
  background-size: cover;
  will-change: transform;
  background-position: 50%;
  height: 100%;
}
.top_innerpartbg{
  background-image: url(../assets/home/ChbarcterOnly.png);
  background-size: cover;
  background-position: 30% bottom;
  height: 100%;
}
.innerleftpartbg{
  position: relative;
  background-image: linear-gradient(90deg, rgba(58, 52, 100, 0.9), rgba(26, 48, 74, 0.9));
  height: 100%;
  width: 60%;
  margin-left: auto;
}
.innerleftpartbg_inner{
  padding: 30px;
  height: -webkit-fill-available;
  display: flex;
  padding-left: 10%;
  flex-direction: column;
  justify-content: center;
}
.game_platform_wrapper{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;
}
.game_platform_imgwrapper{
  width: 62px;
  margin-bottom: 10px;
}
.game_platform_txtwrapper{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 20px;
}
.game_platform{
  font-size: 30px;
  font-weight: 800;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  font-style: italic;
}
.tournament , .rewards{
  font-weight: 800;
  font-size: 1rem;
  color: #c4c4d1;
  font-style: italic;
  line-height: 1;
}
.image_wrapper{
  max-width: 600px;
  box-shadow: 0px 0px 25px rgba(0,0,0,0.5), 0px 0px 25px 0px rgba(0, 0, 0, 0.5);
}
.image_wrapper img{
  width: 100%;
  display: block;
}
.bottom_part{
  background-image: linear-gradient(90deg, rgba(30, 18, 57, 0.47)rgba(26,48,74,0.9019607843137255));
}
.section_bottom_wrap{
  max-width: 1280px;
  margin: auto;
  padding: 30px 1rem;
}
@media (min-width: 320px) and (max-width: 767px) {
  .innerleftpartbg{
    width: 100%;
  }
  .innerleftpartbg_inner{
    padding-top: 30px;
    align-items: center;
    padding-left: 30px;
  }
  .game_platform_wrapper{
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .game_platform{
    font-size: 1.3rem;
  }
}
</style>
