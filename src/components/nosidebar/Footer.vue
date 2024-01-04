<template>
  <div class="footer-class">
    <div class="footer_wrap">
        <div class="footer">
            <div class="footer_line"></div>
            <div class="footer_wrapper">
                <div class="footer_teampolicy_wrap">
                    <router-link  tag="a" :to="{ name: 'Terms'}"  active-class="active" exact><div class="terms">TERMS</div></router-link>
                    <router-link  tag="a" :to="{ name: 'Privacy'}"  active-class="active" exact><div class="terms">PRIVACY & POLICY</div></router-link>
                    <!-- <a href="#whatsplaytonia"><div class="whatwedo">WHAT WE DO</div></a> -->
                    <a href="http://playtonia.co/" target="_blank"><div class="corporate">CORPORATE</div></a>
                </div>
                <div class="footer_socialicon_wrap">
                    <a target="_blank" href="http://www.facebook.com/playtonia/" class="socialicon_button facebook">
                        <i class="fab fa-facebook-f"></i>
                        <span></span>
                    </a>
                    <a target="_blank" href="http://www.twitter.com/playtoniaEsport" class="socialicon_button twitter">
                        <i class="fab fa-twitter"></i>
                        <span></span>
                    </a>
                    <a target="_blank" href="https://www.twitch.tv/playtoniatv" class="socialicon_button twitch">
                        <i class="fab fa-twitch"></i>
                        <span></span>
                    </a>
                    <a target="_blank" href="http://www.instagram.com/playtonia.esports" class="socialicon_button instagram">
                        <i class="fab fa-instagram"></i>
                        <span></span>
                    </a>
                    <a target="_blank" href="http://steamcommunity.com/groups/playtonia" class="socialicon_button steam">
                        <i class="fab fa-steam-symbol"></i>
                        <span></span>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UClKvoHOVxcxnLH8PY0fsQNw" class="socialicon_button youtube">
                        <i class="fab fa-youtube"></i>
                        <span></span>
                    </a>
                </div>
            </div>
            <div class="copyright_txt"><span>© 2020 Proudly by, Playtonia</span> </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  },
};
</script>

<style scoped>
.active div{
    color: #3cecff!important;
}
.pop_overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
  overflow: auto;
}
.pop_overlay:target {
  visibility: visible;
  opacity: 1;
  z-index: 3;
}

.popup {
  margin: 70px auto;
  box-shadow: 2px 3px 6px rgba(0,0,0,.5);
  background: #1b2731;
  border-radius: 5px;
  max-width: 75%;
  position: relative;

}

.popup .close {
  position: absolute;
  top: -20px;
  right: -23px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: white;
}
.popup .close:hover {
    color: #3cecff;
}

.video__wrapper {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.iframe_container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
}
.video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.footer_wrap{
    position: relative;
    width: 100%;
    /*height: 10%;*/
}
.footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    background-image: linear-gradient(90deg, rgb(1, 1, 13), rgb(25, 31, 60));
}
.footer_line{
    position: absolute;
    top: 0;
    width: 100%;
    height: 4px;
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    box-shadow: 0 0 20px 1px #009fd1c7;
}
.footer_wrapper{
    display: flex;
    justify-content: space-between;
    padding: 20px 0 10px;
    max-width: 1460px;
    margin: auto;
    width: 100%;
}
.footer_teampolicy_wrap{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}
.terms , .whatwedo , .privacy , .corporate{
    font-weight: 800;
    font-size: 1rem;
    color: #c4c4d1;
    font-style: italic;
    line-height: 1.2;
    padding: 0 10px;
}
.terms:hover , .whatwedo:hover , .privacy:hover , .corporate:hover {
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-style: italic;
}
.footer_socialicon_wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.socialicon_button{
    border-radius: 2.6rem;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    height: 1.2rem;
    margin: 0 5px;
    position: relative;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 1.2rem;
}
.socialicon_button i{
    background: none;
    color: #c4c4d1;
    height: 1.2rem;
    left: 0;
    line-height: 1rem;
    position: absolute;
    top: 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    width: 1.2rem;
    z-index: 1;
}
.socialicon_button:hover .fa-facebook-f,
.socialicon_button:hover .fa-twitter,
.socialicon_button:hover .fa-twitch,
.socialicon_button:hover .fa-instagram,
.socialicon_button:hover .fa-steam-symbol,
.socialicon_button:hover .fa-youtube {
    color: white;
}

.socialicon_button span {
    border-radius: 0;
    display: block;
    height: 0;
    left: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    -webkit-transition: all 0.3s;
       -moz-transition: all 0.3s;
         -o-transition: all 0.3s;
            transition: all 0.3s;
    width: 0;
}
.socialicon_button:hover span {
    width: 1.8rem;
    height: 1.6rem;
    border-radius: 50%;
    margin: -4.2px;
    position: absolute;
    top: 0;
    left: 0;
}

.facebook span {
    background-color: #3B5998;
}
.twitter span {
    background-color: #4099ff;
}
.twitch span{
    background-color: #6441a5;
}
.instagram span {
    background-color: #E1306C;
}
.steam span{
    background-color: #9cbbc7;
}
.youtube span {
    background-color: #bb0000;
}

.copyright_txt{
    font-size: .8rem;
    color: #c4c4d1;
    text-align: center;
    padding-bottom: 5px;
}

@media (min-width: 320px) and (max-width: 767px) {
.footer_wrap{
    height: auto;
}
.footer_wrapper{
    flex-direction: column;
    padding: 10px 0 3px;
}
.footer_socialicon_wrap{
    justify-content: center;
    padding-top: .5rem;
}
.terms , .whatwedo , .privacy , .corporate{
    font-size: 14px;
}
.socialicon_button{
    font-size: 14px;
}

.popup{
  max-width: 80%;
  margin: 30% auto;
}

}
</style>
