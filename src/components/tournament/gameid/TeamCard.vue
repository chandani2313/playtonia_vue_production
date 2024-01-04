<template>
    <div  class="team-card" @click="Clone(data.id,gameN)">
    <div class="myteam_wrapper_card">
        <div class="myteam_wrapper_card_inner">
            <div class="myteam_wrapper_card_inner_header">
                <div class="myteam_wrapper_card_inner_header_overlay pubgm" v-if="data.game === 'PUBGM'">
                    <div class="overlay"></div>
                    <div class="myteam_wrapper_card_inner_header_overlay_txt"></div>
                </div>
                <div class="myteam_wrapper_card_inner_header_overlay codm" v-if="data.game === 'CODM'">
                    <div class="overlay"></div>
                    <div class="myteam_wrapper_card_inner_header_overlay_txt"></div>
                </div>
                <div class="myteam_wrapper_card_inner_header_overlay r6" v-if="data.game === 'R6'">
                    <div class="overlay"></div>
                    <div class="myteam_wrapper_card_inner_header_overlay_txt"></div>
                </div>
                <div class="namewrap">
                    <figure class="namewrap_avatar"><img src="../../../assets/profile/logo.png"></figure>
                    <div class="namewrap_name">
                        <span>{{data.team_name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios';
// @ is an alias to /src

export default {
  name: 'TeamCard',
  data() {
    return {
    };
  },
  props: ['data', 'gameN'],
  methods: {
      Clone(id, Gname) {
        this.$Progress.start();
        axios
        .post('tournament/clone_team', {
            team_id: id,
            game: Gname,
        })
        .then((response) => {
            if (response.status === 201) {
                this.$notify({
                    title: 'Success.',
                    group: 'notifications',
                    text: 'Team Created Successfully.',
                });
                this.$emit('join');
                this.$emit('close');
                this.$Progress.finish();
            }
        })
        .catch((e) => {
            if (e.response.status === 400) {
                this.$notify({
                    type: 'warn',
                    title: 'Warning.',
                    group: 'notifications',
                    text: 'Try Again or Create a team manually',
                });
            }
        });
      },
  },
};
</script>

<style scoped>
.overlay{
    background: #141f28c2;
    width: 100%;
    height: 100%;
}
.team-card{
    cursor: pointer;
}
figure {
margin: 0;
}

.participant_wrapper_outer{
width: 100%;
margin-bottom: 1rem;
}

@media screen and (min-width: 992px) {
.myteam_wrapper_card_inner_contant_inner {
display: grid;
grid-template-columns: 9.25rem 1fr;
}
.teammembers_wrap::after {
content: "";
}

}

.myteam_wrapper{
display: grid;
grid-template-columns: repeat(2,minmax(100px,1fr));
grid-gap: 1rem;
}
.myteam_wrapper_card{
position: relative;
overflow: hidden;
background: #1b2731;
box-shadow: 2px 3px 6px rgba(0,0,0,.5);
-webkit-box-shadow: 2px 3px 6px rgba(0,0,0,.5);
color: #fff;
border-radius: .5rem;
}


.myteam_wrapper_card_create{
color: #ffffff80;
font-size: 20px;
height: 100%;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
text-align: center;
}
.myteam_wrapper_card_add{
/*font-size: 30px;*/
}
.myteam_wrapper_card:hover .myteam_wrapper_card_create {
transform: scale(1.1);
color: white;
}

.myteam_wrapper_card_inner{
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
width: 100%;
height: auto;
}
.myteam_wrapper_card_inner_header {
padding: 1rem;
background-color: #0d16209e;
display: grid;
grid-auto-flow: dense;
grid-template-columns: repeat(auto-fill, minmax(214px, 1fr));
grid-row-gap: 15px;
box-shadow: 7px 7px 10px rgba(0,0,0,.3);
overflow: hidden;
position: relative;
/* background-image: url(img/ccc.png); */
background-position: right;
background-repeat: no-repeat;
background-size: cover;

}
.codm{
    background-image: url('../../../assets/team/codm_cover.png');
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
}
.pubgm{
    background-image: url('../../../assets/team/pubgm_cover.png');
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
}
.r6{
    background-image: url('../../../assets/team/r6_cover.png');
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
}
.myteam_wrapper_card_inner_header_overlay{
/* background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(0, 0, 0)100%); */
left: 0;
right: 0;
bottom: 0;
top: 0;
/* background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(15, 15, 15)100%); */
position: absolute;
height: 100%;
width: 100%;
}
.myteam_wrapper_card_inner_header_overlay_txt{
color: #ffffff1c;
font-size: 2.5rem;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
line-height: 1.8rem;
}
.myteam_wrapper_card_inner_header > .namewrap{
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
position: relative;
}
.namewrap_avatar {
--avatar-size: 3rem;
width: var(--avatar-size);
height: var(--avatar-size);
margin-right: 1rem;
margin-bottom: 0;
-webkit-transition-property: border-color,-webkit-box-shadow;
transition-property: border-color,-webkit-box-shadow;
transition-property: border-color,box-shadow;
transition-property: border-color,box-shadow,-webkit-box-shadow;
-webkit-transition-duration: .2s;
transition-duration: .2s;
-webkit-transition-timing-function: ease-in-out;
transition-timing-function: ease-in-out;
-webkit-box-flex: 0;
-ms-flex: 0 0 var(--avatar-size);
flex: 0 0 var(--avatar-size);
overflow: hidden;
border-radius: 5px;

box-shadow: 0 4px 4px rgba(59,187,233,.32);
position: relative;
vertical-align: middle;
border: 1px solid #3bbbe9;
}
.namewrap_avatar{
width: 100%;
display: block;
}

.namewrap_name span {
line-height: 1.45455;
font-size: 17px!important;
-webkit-transition-property: color;
transition-property: color;
-webkit-transition-duration: .2s;
transition-duration: .2s;
-webkit-transition-timing-function: ease-in-out;
transition-timing-function: ease-in-out;
display: inline-block;
font-weight: 500;
text-align: left;
}
.avatarwrap{
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: space-between;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
position: relative;
}
.avatarwrap_ul {
margin: 0;
padding: 0;
list-style: none;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
visibility: visible;
}
.avatarwrap_ul_li {
width: 2rem;
height: 2rem;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
background-color: #0b1622;
border: 1px solid #3e4652;
border-radius: 2px;
position: relative;
overflow: hidden;
-webkit-transition-delay: .2s;
transition-delay: .2s;
/*transform: skewX(-20deg);*/
border-radius: 50%;
}
/*.avatarwrap_ul_li:last-child {
border: 1px solid #3bbbe9;
box-shadow: 0 4px 4px rgba(59,187,233,.32);
}*/
.avatarwrap_ul_li:not(:first-child) {
margin-left: -.5rem;
}
.avatarwrap_ul_li_imgs {
display: flex;
justify-content: center;
align-self: center;
align-items: center;
/*transform: skewX(20deg);*/
}
.avatarwrap_button {
line-height: 1.71429;
font-size: 1rem;
-webkit-transition-property: color;
transition-property: color;
-webkit-transition-duration: .2s;
transition-duration: .2s;
-webkit-transition-timing-function: ease-in-out;
transition-timing-function: ease-in-out;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;

}
.avatarwrap_button span {
line-height: 1.28571;
font-size: .875rem;
color: white;
text-align: left;

}
.avatarwrap_button i{
width: .75rem;
height: .75rem;
line-height: 1.28571;
font-size: .875rem;
margin-left: .30rem;
}

.myteam_wrapper_card_inner_contant{
padding: 1rem;
-webkit-box-flex: 1;
-ms-flex: 1 0 auto;
flex: 1 0 auto;
display: none;
}
.myteam_wrapper_card_inner_contant_inner{
width: 100%;
height: 100%;
}
.myteam_wrapper_card_inner_contant_inner > .teammembers_wrap{
width: 100%;
overflow-x: auto;
overflow-y: hidden;
position: relative;
}
.teammembers_wrap_ul{
margin: 0;
padding: 0;
list-style: none;

}

.teammembers_wrap:after {
width: .125rem;
height: 100%;
display: block;
background-color: #24374a;
border-radius: 1px;
position: absolute;
right: 0;
top: 0;
bottom: 0;
box-shadow: inset 1px 0 0 #000000;
}

.teammembers_wrap_ul_li {
width: 100%;
min-width: 0;
}
.teammembers_wrap_ul_li:not(:last-child) {
margin-bottom: 1rem;
}
.is_captain {
color: #3bbbe9;
}
.is_captain > div > .teammembers_namewrap > .teammembers_namewrap_pic{
border: 1px solid #3bbbe9;
box-shadow: 0 4px 4px rgba(59,187,233,.32);
}
.is_captain_small{
border: 1px solid #3bbbe9;
box-shadow: 0 4px 4px rgba(59,187,233,.32);
}
.teammembers_namewrap{
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
position: relative;
}
.teammembers_wrap_single_details{
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
}
.teammembers_namewrap_pic{
background-color: #0b1622;
border: 1px solid #3e4652;
width: 2.4rem;
height:2.4rem;
margin-right: .7rem;
overflow: hidden;
border-radius: 5px;
position: relative;
vertical-align: middle;
flex: 0 0 2.4rem;
}
.details_name-gamename{
line-height: 1.28571;
font-size: .875rem;
}
.details_name-username{
line-height: 2.33333;
font-size: 1.17rem;
margin-left: 20px;
}
.detail_points{
display: flex;
margin-left: 20px;
}
.detail_points_leaf{
margin-right: 20px;
}

.teammembers_wrap_single_details-pic{
--width: 9rem;
width: var(--width);
height: auto;
margin-left: auto;
margin-right: auto;
padding: .5rem;
-ms-flex-item-align: start;
align-self: start;
position: relative;
}
/*.teammembers_wrap_single_details-pic:after {
width: 100%;
height: 4rem;
background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(1,14,40,0)),to(#010e28));
background-image: linear-gradient(180deg,rgba(1,14,40,0) 0,#010e28);
background-repeat: repeat-x;
content: "";
display: block;
position: absolute;
left: 0;
bottom: .5rem;
right: 0;
}*/
.detail_points_leaf span img{
width: 20px;
margin-right: 5px;
margin-bottom: -3px;
}
.detail_points_coin span img{
width: 20px;
margin-right: 5px;
margin-bottom: -3px;
}
.teammembers_namewrap_name{
text-align: center;
}
.teammembers_namewrap_name span{
display: inline-block;
font-weight: 500;
text-align: center;
/*display: block;*/
line-height: 1.33333;
font-size: .80rem;
}

@media (max-width: 991px) and (min-width: 320px){

.myteam_wrapper_card_create{
min-height: 110px;
}
.myteam_wrapper {
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.avatarwrap{
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
display: -webkit-box;
display: -ms-flexbox;
display: flex;

position: relative;
}
.namewrap_name span {
line-height: 1.33333;
font-size: 1.375rem;
}

.myteam_wrapper_card_inner_contant_inner > .teammembers_wrap::-webkit-scrollbar {
height: 4px;
background: #ffffff1a;
border-radius: 4px;
}

.myteam_wrapper_card_inner_contant_inner > .teammembers_wrap::-webkit-scrollbar-thumb {
background: #ffffff1a;
border-radius: 4px;
}

.teammembers_wrap_ul{
display: -webkit-box;
display: -ms-flexbox;
display: flex;
padding-bottom: 1rem;
}
.teammembers_wrap_ul_li {
padding-right: 1rem;
min-width: 6rem;
cursor: pointer;
position: relative;

}
.teammembers_wrap_ul_li:not(:last-child){
margin-bottom: 0;
}
.teammembers_namewrap{
display: block;
}

.teammembers_namewrap{
position: relative;
}
.teammembers_namewrap_pic{
margin-bottom: 0.5rem;
margin: auto;
}

.teammembers_wrap_single_details{
padding-top: 1rem;
position: relative;
}
}
</style>
