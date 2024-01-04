<template>
    <div class="lobby_player_card " v-bind:class="{ is_captain: data.is_captain, not_joined:!data.active}" v-if="data.active">
        <!-- <div class="lobby_player_card_overlay">
            <div class="lobby_player_card_overlay_txt">
                <span>kick</span>
                <span>swape</span>
            </div>
        </div> -->
        <div class="lobby_player_card_inner" v-if="data.active">
            <div class="lobby_player_card_inner_img_wrapper">
                <div class="lobby_player_card_inner_img">
                    <figure class="lobby_player_card_inner_img_fig">
                        <img src="../../assets/profile/logo.png">
                    <div class="is_captain_sign" v-if="data.is_captain">
                        <i class="fas fa-crown"></i>
                    </div>
                    <!-- <div class="lobby_player_card_inner_img_figlogo">
                        <img src="icons/shield3.png">
                    </div> -->
                    </figure>
                </div>
                <div class="lobby_player_card_inner_name">
                    <h6 class="lobby_player_card_inner_name_text">{{data.username}}</h6>
                </div>
            </div>
            <!-- <div class="lobby_player_card_inner_point_wrapper">
                <span class="lobby_player_card_inner_point_wrapper_kill text-success">9</span>
                <span class="lobby_player_card_inner_point_wrapper_assest text-danger">4</span>
                <span class="lobby_player_card_inner_point_wrapper_death text-warning">8</span>
            </div> -->
        </div>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'PlayerCard',
  data() {
    return {
    };
  },
  props: ['data'],
  components: {
  },
};
</script>

<style scoped>
.lobby_player_card{
  margin-bottom: 16px;
  padding: 10px 16px;
  background: #111c25;
  display: flex;
  box-shadow: 2px 3px 6px rgba(0,0,0,.5);
  position: relative;
}
.not_joined{
   padding: 35px;
   box-shadow: inset -1px 0px 20px 6px rgba(0,0,0,.5)!important;
   background:#101c24!important;
   padding: 31px!important;
}
.lobby_player_card:hover .lobby_player_card_overlay{
  opacity: 1;
  z-index: 1;
}
.lobby_player_card_overlay{
  position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(0,0,0,0.5);
    justify-content: center;
    text-align: center;
    align-items: center;
    display: flex;
}
.lobby_player_card_overlay_txt{
    text-align: center;
    display: flex;
    align-self: center;
}
.lobby_player_card_overlay_txt span{
    cursor: pointer;
    padding: 4px 6px;
    font-size: 10px;
    border-radius: 4px;
    transition: all .2s ease-in-out;
    color: #1a2a3e;
    text-transform: uppercase;
    margin: 0 5px;
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
}
.lobby_player_card_overlay_txt span:hover{
    box-shadow: 0px 0px 10px 0px #3CA3F0;
    color: black;
}
.lobby_player_card_inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}
.lobby_player_card_inner_img_wrapper{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.lobby_player_card_inner_img{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.lobby_player_card_inner_img_fig{
    position: relative;
    width: 50px;
}
.lobby_player_card_inner_img_figlogo{
    position: absolute;
    right: -6px;
    bottom: -6px;
    width: 20px
}
.lobby_player_card_inner_img_fig img{
  width: 100%;
  display: block;
  border-radius: 5px;
}
.is_captain_sign{
  position: absolute;
  left:  -6px;
  bottom: -6px;
  /*width: 20px;*/
  color: #3ca3f0;
}
.lobby_player_card_inner_img_figlogo{
    position: absolute;
    right: -6px;
    bottom: -6px;
    width: 20px
}
.lobby_player_card_inner_name{
  -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0 10px;
}
.lobby_player_card_inner_name_text{
    font-size: 12px;
    line-height: 1.2em;
    margin-bottom: .085em;
}
.lobby_player_card_inner_point_wrapper{
    color: white;
    font-size: 12px;
    line-height: 1.2em;
    margin-bottom: .085em;
    font-weight: 600;
}
.lobby_player_card_inner_point_wrapper span{
  position: relative;
}
.lobby_player_card_inner_point_wrapper span:not(:first-child):before{
      content: "/";
    display: inline-block;
    color: #ffffff90;
    padding-right: .2em;
}
@media (min-width: 320px) and (max-width: 767px) {
    .lobby_player_card{
        padding: 10px 5px;
    }
    .lobby_player_card{
        width: max-content;
    }
    .lobby_player_card_overlay_txt{
        flex-direction: column;
    }
    .lobby_player_card_overlay_txt span{
        margin: 0 0 5px 0;
    }
    .lobby_player_card_inner_name{
        display: none;
    }
    .lobby_player_card_inner_point_wrapper{
        display: none;
    }
}
</style>
