<template>
  <div class="info">
      <div class="eventoverview-eventprize_wrap">
        <div class="section_bottom_title_wrap">
            <div class="section_bottom_title_wrap_text">prize</div>
        </div>
        <div class="prize-wrap" v-if="tournament">
            <div class="prize-wrap-card" v-for="prize in sortedArray" :key="prize.position">
                <!-- <div class="prize-wrap-card-medal">
                    <img src="img/medal.png">
                </div> -->
                <div class="prize-wrap-card-inner">
                    <div class="prize-wrap-card-inner-pic">
                        <img src="../../assets/tournament/prize.png">
                    </div>
                    <div class="prize-wrap-card-inner-prize">
                    <span class="prize-wrap-card-inner-prize-amount">{{prize.prize}}</span>
                        <span class="prize-wrap-card-inner-prize-country">{{prize.prize_type}}</span>
                        <span class="prize-wrap-card-inner-prize-money"><img src="../../assets/tournament/money.png"></span>
                    </div>
                    <div class="prize-wrap-card-inner-text">
                        <span>this  reward will be paid out to the winner</span><br>
                        <span>regional restriction may apply</span>
                    </div>
                </div>
                <div class="prize-wrap-card-footer">
                    Rank {{prize.position}}
                </div>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
/* eslint-disable */
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Info',
  data() {
    return {
      tournament: null,
    };
  },
  components: {
  },
  methods: {
    Tournament() {
    axios
    .get('/tournament/'.concat(this.$route.params.id))
    .then((response) => {
        if (response.status === 201) {
            this.tournament = response.data.prize;
        }
    })
    .catch((e) => {
        if (e.response.status === 400) {
            this.$router.push('/');
        }
    });
    },
  },
  mounted() {
      this.Tournament();
  },
  computed: {
        sortedArray: function() {
            function compare(a, b) {
            if (a.position < b.position)
                return -1;
            if (a.position > b.position)
                return 1;
                return 0;
            }
            return this.tournament.sort(compare);
        }
  },
};
</script>

<style scoped>


*, *::before, *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}


        /* Headings */
/*------------h-tags----------------*/



 
         /* Headings-end  */
/*------------h-tags----------------*/





img {
  max-width: 100%;
  height: auto;
}


figure {
  margin: 0!important;
}

a{
  text-decoration: none;
}
.evnt-top-wrap{
  padding: 1.5rem;
}
.evt-header{
    position: relative;
    
    background: #171a20;
    width: 100%;
    /*min-height: 480px;
    max-height: 480px;*/
    background-size: cover;
    background-position: 50%;
    border-radius: 10px;
    overflow: hidden;
    
}
.evt-gradient{
    opacity: 1;
    background-size: 2px 2px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.evt-overlay{
    /*background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(0, 0, 0)100%);*/
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(15, 15, 15)100%);
    position: absolute;
    height: 100%;
    width: 100%;
}
.evt-inner{
    width: 100%;
    min-height: 420px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
    position: relative;
    max-width: 1400px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: 40px;
    padding-right: 40px;
    /*max-width: 1360px;*/
    box-sizing: border-box;
    margin: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.evt-inner-section{
  display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;

}
/*.evt-inner-section{
  -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
}
*/

.evt-logo{
  
    /*width: 450px;
    height: 450px;*/
    width: 200px;
    min-width: 200px;
    background: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;

}
.evt-info{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

/*.evt-info{
  -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
    margin-top: 20px;
    margin-left: 0;
    margin-right: 0;
}*/
.evt-info-name{
  margin-left: 1.5em;
  align-self: baseline;
}
.evt-info-name-title {
    color: #fff;
    font-size: 30px;
    line-height: 1em;
    margin-bottom: 10px;
    
    letter-spacing: .8px;
    font-weight: 600;
     /*max-width: 400px;*/
}
.evt-info-name-organized{
  color: #999;
}
.evt-info-name-organized span{
    font-weight: 800;
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    /*font-style: italic;*/
}
.evt-info-join{
    /*width: 362px;*/
    color: #fff;
    margin: auto;
    text-align: center;
    white-space: nowrap;
}
.evt-info-join-timer{


}
.evt-info-join-date{
    line-height: 1.2rem;
    display: inline-block;
    padding: 5px;
}
.evt-info-join-joinbtn {
    margin: auto auto 12px;
    width: max-content;
    padding: 8px 40px;
    font-size: 16px;
    line-height: 1.5em;
    border-radius: 4px;
    color: #1b2731d1;
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    /*display: inline-block;
    margin-bottom: 12px;*/
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;
}
.evt-info-join-joinbtn:hover{
    box-shadow: 0px 0px 10px 0px #3CA3F0;
    color: #ffffff;
}


 /*-------------header.............*/

.nav {
    background-color: #1b2731;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: 20px;
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
}


.nav > .nav-links {
  display: flex;
  font-size: 16px;
}

.nav > .nav-links > a {
  padding: 20px 10px;
  text-decoration: none;
  color: #ffffff82;
  display: flex;
  justify-content: space-evenly;
  width: 20%;
  text-transform: uppercase;
  position: relative;
  /*border-width: 0px;*/
  transition: 0.5s ease;
}
.nav > .nav-links > a::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background-color: transparent;
    transition: 0.5s ease;
    width: 0;
}
.nav > .nav-links > a:hover::after {
    /*background-color: #4facfe;*/
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    width: 100%;
}


.nav > .nav-links > .active {
 color:#fff;
 background: #111c25;
 box-shadow: inset 0px -10px 15px 1px #000000d4;
 
}
.nav > .nav-links > .active:after{
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    /*background-color: #4facfe;*/
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    width: 100%;

}
.nav > .nav-links > a:hover {
    color:#fff;
}

.nav > .nav-links > a:before{
    content: "";
    position: absolute;
    top: 5px;
    width: 1px;
    background-color: #2a2d30;
    /* background-color: #101820; */
    -webkit-box-shadow: 1px 0 0 #000000;
    box-shadow: 1px 0 0 #000000;
    height: calc(100% - 10px);
    right:0px;
}
.nav > .nav-links > a:last-child:before{
    display: none;
}
/*-------------header-end---------------*/
/*-----------mobile-header------------*/
.mob_wrapper_outer {
  display: none;
}
/*-----------mobile-header-end------------*/




.bottom-container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    
}

.bottom-wrap {
    padding: 20px 16px;
}

.eventoverview-eventprize_wrap{
    margin-bottom: 1.5rem;
}

/*----------------------event prize start ------------------------------*/


.section_bottom_title_wrap {
    display: flex;
    border-bottom: 2px solid #ffffff0f;
    padding-bottom: 14px;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
}
.section_bottom_title_wrap_text {
    position: relative;
    font-size: 16px;
    text-transform: uppercase;
    color: white;
    display: inline-block;
    padding: 0 10px;
    font-weight: 600;
}
.section_bottom_title_wrap_text:before {
    content: "";
    position: absolute;
    bottom: -16px;
    height: 2px;
    width: 100%;
    left: 0;
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    box-shadow: 0 0 9px #009fd1c7;
}

.prize-wrap{
    grid-template-columns: repeat(auto-fill, minmax(193px, 1fr));
    grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
    grid-gap: 10px;
    grid-auto-flow: dense;
    display: grid;
}
.prize-wrap-card{
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
    background: #1b2731;
}
.prize-wrap-card:hover{
    /*transform: scale(1.04);*/
    transform: translateY(-5px);
    transition: all .15s;
    box-shadow: 0px 0px 3px 0px #00c7ff;
}
.prize-wrap-card:hover {
    background: #111a23;
}

.prize-wrap-card:hover .prize-wrap-card-inner{
    background: #1b2731;
}
.prize-wrap-card:hover .prize-wrap-card-medal img{
    filter: drop-shadow(0px 4px 4px);
    color: #b28a00; 
}
.prize-wrap-card:hover .prize-wrap-card-inner-pic img{
    color: rgb(171, 223, 81);
    filter: drop-shadow( 0px 4px 4px);
    transform: scale(1.1);
}
.prize-wrap-card:hover .prize-wrap-card-inner-prize-money img{
    color: rgb(171, 223, 81);
    filter: drop-shadow( 0px 4px .5px);
}
.prize-wrap-card-medal{
    position: absolute;
    right:0;
    top:0;
    width: 60px;
}
.prize-wrap-card-medal img{
    filter: drop-shadow(0px 10px 3px);
    color: #000000;
}
.prize-wrap-card-inner{
    margin-top: 60px;
    padding:0 20px;
    background: #111a23;
}
.prize-wrap-card-inner-pic{
    width: 50%;
}

.prize-wrap-card-inner-pic img{
    margin-top: -30px;
}
.prize-wrap-card-inner-prize{
    padding: 10px 0;
    color: white;
}
.prize-wrap-card-inner-prize-amount{
    font-size: 21px;
}

.prize-wrap-card-inner-prize-country{
    text-transform: uppercase;
    font-size: 12px;
}
.prize-wrap-card-inner-prize-money{
    width: 30px;
    display: inline-block;
}
.prize-wrap-card-inner-text{
    font-size: 10px;
    color: #ffffff80;
    text-transform: uppercase;
    padding:10px 0;
}
.prize-wrap-card-footer{
    padding: 10px;
    color: white;
    font-size: 17px;
    text-align: justify;
    text-align: center;
}

/*--------------------------event prize end------------*/





@media (min-width: 320px) and (max-width: 767px) {

    .evnt-top-wrap{
        padding: 0;
    }
    .evt-header{
        border-radius: 0px;
    }
  
  .nav{
    display: none;
  }

  
/*-----------mobile-header------------*/

   .mob_wrapper_outer{
        margin-bottom: 20px;
        display: flex;
        border-radius: 4px;
        border: 2px solid #181f25;
   } 

  .mob_wrapper {
    display: block;
    width: 100%;
    height: 60px;    
    background-color: #1b2731;
    box-shadow: inset 0px 0px 15px 0px #000000d4;
    /*box-shadow: inset 0 16px 14px -21px transparent, 0 0px 13px 0 rgba(0,0,0,0.3), inset 0 0 7px 2px rgba(0,0,0,0.4);*/
    overflow: hidden;
    position: relative;
    color:#fff;
    
  }

  .mob_arrow {
    display: block;
    width: 88px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: #111c25;
    font-weight: bold;
    cursor: pointer;
    box-shadow: inset 0 20px 4px -21px rgba(113, 113, 113, 0.4), 0 19px 13px 0 rgba(0, 0, 0, 0.50);    
  }
  .mob_arrow:first-of-type {
  	border-radius: 4px 0 0 4px;
  }
  .mob_arrow:nth-of-type(2) {
  	border-radius: 0 4px 4px 0;
  }
  .mob_arrow:hover{
    box-shadow: 1px 5px 14px -21px transparent, 20px 0px 20px 0 rgba(0,0,0,0.3), 4px 0px 20px 2px rgba(0,0,0,0.4);
    text-shadow: 1px 0px #423838;
  }

  .mob_nav {
    width: auto;
    height: 60px;
    overflow: hidden;
    list-style-type: none;
    white-space: nowrap;
    transition: 2.0s;
    margin: 0;
    padding: 0;
  }

  .mob_nav li {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
/*-----------mobile-header------------*/



.evt-inner{
  padding-left: 20px;
  padding-right: 20px;
}
.evt-inner-section{
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column;
  flex-flow: column;
}
.evt-logo{
    width: 150px;
    height: auto;
    min-width: 150px;
}
.evt-info{
  -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
    margin-top: 12px;
    margin-left: 0;
    margin-right: 0;
}
.evt-info-name{
    margin: auto auto 12px;
}

.evt-info-name-title {
  text-align: center;
    font-size: 1rem;
}

.evt-info-name-organized{
     font-size: 14px;
     text-align: center;
}


.evt-info-join-date{
    font-size: 14px;
}



}
</style>
