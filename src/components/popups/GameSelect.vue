<template>
  <div class="gameselect">
    <div  class="pop_overlay">
        <div class="popup">
            <div class="gameselect_wrapper_container">
                <a  @click.prevent="toggle()" class="close" href="#"><i class="fas fa-times"></i></a>
                <div class="gameselect_wrapper">
                    <div class="gameselect_wrapper_inner">
                        <a @click.prevent="SelectGame('PUBGM')">
                            <div class="gameselect_card">
                                <div class="gameselect_card_right">
                                    <div class="gameselect_card_inner"></div>
                                </div>
                                <div class="gameselect_card_left">
                                    <div class="gameselect_card_inner"></div>
                                </div>
                                <img src="../../assets/select_game/pubg_banner.jpg">
                            </div>
                        </a>
                        <a>
                            <div class="gameselect_card">
                                <div class="gameselect_card_right">
                                    <div class="gameselect_card_inner"></div>
                                </div>
                                <div class="gameselect_card_left">
                                    <div class="gameselect_card_inner"></div>
                                </div>
                                <img src="../../assets/select_game/csgo_banner.jpg">
                                <div class="dota_overlay gameselect_card_img_overlay">
                                    <div class="gameselect_card_img_overlay_txt">Launching Soon</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GameSelect',
  props: {
  },
  methods: {
    toggle() {
        this.$emit('game');
    },
    SelectGame(data) {
        localStorage.setItem('GAME', data);
        this.$store.dispatch('dashboard/SelectGame');
        this.$emit('game');
    },
  },
};
</script>

<style scoped>
.pop_overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  transition: opacity 500ms;
  overflow: auto;
}
.pop_overlay:target {
  visibility: visible;
  opacity: 1;
  z-index: 3;
}
.popup {
  margin: 10% auto;
  border-radius: 5px;
  max-width: 75%;
  position: relative;
}
.popup .close {
  position: absolute;
  top: -20px;
  right: -26px;
  transition: all 200ms;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: white;
}
.popup .close:hover {
    color: #3cecff;
}
.gameselect_wrapper {
    padding: 1rem;
    overflow: hidden;
}
.gameselect_wrapper_inner{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.gameselect_card{
    position: relative;
    width: 200px;
    margin: 0 7.5px 16px 7.5px;
    overflow: hidden;
    transform: skew(-9deg);
}
.gameselect_card img{
   overflow: hidden;
   transition: all 0.3s ease 0s;
   display: block;
}
.gameselect_card img:hover{
  overflow: hidden;
  transform: scale(1.1);
}
.gameselect_card_left, .gameselect_card_right{
    width: 10px;
    height: 100%;
    position: absolute;
    top: 0px;
    overflow: hidden;
}
.gameselect_card_right{
      right: -8px;
}
.gameselect_card_inner{
    height: 100%;
    width: 10px;
    background-image: linear-gradient(to top, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    transform: translateX(-8px);
    border-radius: 100%;
}
.dota_overlay{
  background-color: #6b3b1591;
}
.fifa_overlay{
  background-color: #228b9991;
}
.pubg_overlay{
  background-color: #f1bb0187;
}
.cod_overlay{
  background-color:#32cd323d;
}
.r6_overlay{
  background-color:#ea002730;
}
.gameselect_card_img_overlay:hover{
  opacity: 1;
}
.gameselect_card_img_overlay:hover .gameselect_card img{
  transform: scale(1.1);
}
.gameselect_card_img_overlay{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #23323491;
    text-align: center;
}
.gameselect_card_img_overlay_txt{
    color: white;
    font-size: 2rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.8rem;
}
@media (min-width: 320px) and (max-width: 767px) {
    .popup{
        max-width: 90%;
        margin: 70px auto;
    }
    .popup .close {
        right: 3%;
        top:-39px;
    }
    .gameselect_wrapper{
        padding: 0;
    }
    .gameselect_card{
        width: 140px;
        transform: unset;
    }
}
</style>
