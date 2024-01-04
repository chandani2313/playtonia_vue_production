<template>
  <div class="leaderboard">
    <div class="leaderboard_wrapper">
        <div class="leaderboard_inner">
            <div class="leaderboard_header">
                <div class="leaderboard_header_title">MATCHES</div>
            </div>
            <div class="leaderboard_body">
                <div>No Matches</div>
                <div class="leaderboard_card" v-for="i in 4" :key="i">
                    <div class="leaderboard_card_bg"></div>
                    <div class="leaderboard_card_overlay"></div>
                    <div class="leaderboard_card_no">{{i}}</div>
                    <div class="leaderboard_card_inner">
                        <div class="leaderboard_card_img_wrap">
                            <img src="../../assets/profile/logo.png">
                        </div>
                        <div class="leaderboard_card_textwrap">
                            <div class="leaderboard_card_textwrap_in">
                                <div class="leaderboard_card_textwrap_in_txt">
                                    <span class="leaderboard_card_textwrap_in_txt_name">player</span>
                                </div>
                            </div>
                            <div class="leaderboard_card_textwrap_out">
                                <div class="leaderboard_card_textwrap_out_details">
                                    <div class="leaderboard_card_textwrap_out_details_title">XP</div>
                                    <div class="leaderboard_card_textwrap_out_details_points">0</div>
                                </div>
                                <div class="leaderboard_card_textwrap_out_details">
                                    <div class="leaderboard_card_textwrap_out_details_title">LEAFS</div>
                                    <div class="leaderboard_card_textwrap_out_details_points">0</div>
                                </div>
                                <div class="leaderboard_card_textwrap_out_details leaderboard_card_matches">
                                    <div class="leaderboard_card_textwrap_out_details_title">MATCHES</div>
                                    <div class="leaderboard_card_textwrap_out_details_points">0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
// @ is an alias to /src
export default {
  name: 'Overview',
  data() {
    return {
    };
  },
  components: {
  },
  methods: {
  },
};
</script>

<style >
.leaderboard{
    width: 100%;
}
.leaderboard_wrapper{
	margin-bottom: 20px;
}
.leaderboard_inner{
    background: #1b2731;
    /*border-radius: 5px;*/
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
}
.leaderboard_header{
	width: 100%;
    height: 65px;
    background: #111c25;
    /*border-top-right-radius: 5px;*/
    display: flex;
    align-items: center;
    /*border-top-left-radius: 5px;*/
    position: relative;
}
.leaderboard_header::before {
    content: "";
    display: block;
    position: absolute;
    width: 6px;
    /*border-radius: 10px;*/
    left: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(90deg,#1b8fe4,#2e88ef);
}
.leaderboard_header_title{
	width: fit-content;
    color: white;
    font-weight: 700;
    margin-left: 18px;
    font-size: 16px;
}
.leaderboard_body{
	display: flex;
    padding: 13px;
    flex-direction: column;
}
.leaderboard_card{
	width: 100%;
    border-radius: 4px;    
    margin-bottom: 15px;
    position: relative;
    height: 60px;
    box-shadow: 2px 3px 5px 1px rgba(0,0,0,.5);
    padding: 10px;
    display: flex;
    align-items: center;
    color: #ffffffa6;
}
.leaderboard_card:last-child {
	margin-bottom: 0px;
}
.leaderboard_card:hover {
    transform: translateY(-3px);
    transition-duration: .5s;
    color: white;
}
.leaderboard_card_bg{
	position: absolute;
    left: 0px;
    border-radius: 4px;
    background-image: url();
    background-repeat: no-repeat;
    background-position: right;
    bottom: 0px;
    right: 0px;
    height: 100%;
}
.leaderboard_card_overlay{
	position: absolute;
    left: 0px;
    border-radius: 4px;
    bottom: 0px;
    right: 0px;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}
.leaderboard_card_no{
	font-weight: 700;
    font-size: 13.5px;
    position: relative;
    padding-left: 10px;
}
.leaderboard_card_inner{
	display: flex;
    position: relative;
    width: 95%;
    align-items: center;
}
.leaderboard_card_img_wrap{
	min-width: 40px;
	width: 40px;
	margin-left: 20px;
	position: relative;
}
.leaderboard_card_img_wrap img{
	border-radius: 4px;
    display: block;
    width: 100%;
}
.leaderboard_card_img_wrap:before{
	content: "";
    position: absolute;
    top: 2px;
    width: 1px;
    background-color: #2a2d30;
    box-shadow: 1px 0 0 #000000;
    height: calc(100% - 4px);
    left: -10px;
}
.leaderboard_card_textwrap{
	display: flex;
    justify-content: space-between;
    margin-left: 9px;
    min-width: 1px;
    width: 100%;
}
.leaderboard_card_textwrap_in{
	min-width: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.leaderboard_card_textwrap_in_txt{
	font-size: 13px;
    height: 18px;
    margin-bottom: -3px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.leaderboard_card_textwrap_in_txt_name{
    font-weight: 600;
}
.leaderboard_card_textwrap_out{
	display: flex;
    flex: 0 0 auto;
    margin: auto 0 auto 10px;
    font-size: 13.5px;
    width: 50%;
    justify-content: space-around;
}
.leaderboard_card_textwrap_out_details{
	padding: 0 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    font-size: 12px;
}

.leaderboard_card_textwrap_out_details:before{
	content: "";
    position: absolute;
    top: 2px;
    width: 1px;
    background-color: #2a2d30;
    box-shadow: 1px 0 0 #000000;
    height: calc(100% - 4px);
    left: -1px;
}
.leaderboard_card_textwrap_out_details_title{
	margin-bottom: 3px;
	font-weight: 600;
}

@media (max-width: 767px) and (min-width: 320px) {

.leaderboard_card_textwrap_out_details ~ .leaderboard_card_matches{
	display: none;
}

}
</style>
