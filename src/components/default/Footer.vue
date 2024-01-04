<template>
    <div class="navbar">
        <div class="footer_wrapper">
            <div class="footer_wrapper_inner_img">
                <div class="footer_wrapper_inner_img_wrap">
                    <div class="footer_wrapper_img">
                    <img src="../../assets/layout/Playtonia White.png">
                </div>
                </div>
            </div>
            <div class="footer_wrapper_inner">
                <div class="footer_teampolicy_wrap">
                    <router-link  tag="a" :to="{ name: 'Terms'}"  active-class="active" exact><div class="terms">TERMS</div></router-link>
                    <router-link  tag="a" :to="{ name: 'Privacy'}"  active-class="active" exact><div class="terms">PRIVACY & POLICY</div></router-link>
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
                <div class="footer_api_details">
                    <span>API Version : </span> 0.0.1
                    <span style=" margin-left: 6px; margin-right: 6px;"> - </span>
                    <span>UI Version : </span> 0.0.1
                </div>
            </div>

            <div class="footer_wrapper_copytext">
                <span>© 2020 Proudly by, Playtonia</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer_wrapper{
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
    background: #1b2731;
    margin-top: 350px;
}
.footer_wrapper_inner_img{
  /*background-color: #0d16209e;
  border-bottom: 1px solid #3e4652;*/
}
.footer_wrapper_inner_img_wrap{
    max-width: 1460px;
    margin: auto;
    padding: 20px 0 0 ;
}
.footer_wrapper_img{
    max-width: 150px;
    padding-left: 10px;
}
.footer_wrapper_inner{
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    max-width: 1460px;
    margin: auto;
}
.footer_teampolicy_wrap{
    display: flex;
    align-items: center;
    flex-wrap: wrap
}
.footer_teampolicy_wrap a{
    font-weight: 800;
    font-size: .8rem;
    color: #8a9199;
    line-height: 1.2;
    padding: 0 10px;
}
.footer_teampolicy_wrap a:hover{
  color: #becde3;
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
    color: #8a9199;
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
.footer_api_details{
    font-size: .8rem;
    color: #becde3;
    font-weight: 800;
    line-height: 1.2;
}
.footer_api_details span{
    margin-right: 6px;
    font-size: .8rem;
    color: #8a9199;
    line-height: 1.2;
}
.footer_wrapper_copytext{
  background-color: #0d16209e;
  font-size: .8rem;
  color: #c4c4d1;
  text-align: center;
  padding: 12px 0;
  border-top: 1px solid #3e4652;

}
.footer_wrapper_copytext span{
  margin-left: 146px;
}
@media (min-width: 320px) and (max-width: 767px) {
    .footer_wrapper_inner{
        flex-direction: column;
        align-items: center;
    }
    .footer_teampolicy_wrap , .footer_socialicon_wrap , .footer_api_details{
        padding: .5rem 0 ;
    }
    .footer_wrapper_copytext span{
    margin-left: 0px;
    }
    .footer_wrapper_img {
        padding-left: 0px;
        margin: auto;
    }
}
</style>
