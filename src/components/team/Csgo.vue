<template>
  <div class="pubgm_details">
      <div class="modal__wrapper">
            <div class="table__wrapper animated zoomIn">
                <div class="table__header">
                    <div class="backdrop">
                    <div class="heading"></div>
                    <div class="close" @click="toggle()" >X</div>
                    </div>
                </div>
                <div class="table__body">
                   <form novalidate>
                        <div class="warn">{{error}}</div>
                        <a href="https://api.playtonia.com/v1/social/login/steam" onclick="window.open('https://api.playtonia.com/v1/social/login/steam',
                                        'newwindow',
                                        'width=500,height=500');
                            return false;" class="steambutton"><span>Link Steam Account</span><div class="icon">
                        <i class="fab fa-steam-symbol"></i>
                        </div></a>
                    </form>
                </div>
            </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'create_team',
  data() {
    return {
    };
  },
  props: ['game', 'error'],
  methods: {
        toggle() {
            this.$emit('close');
        },
  },
};
</script>

<style scoped>
.warn{
    padding: 10px;
    margin-bottom: 23px;
    color:red;
}
.steambutton {
  display: block;
  background: linear-gradient(90deg,#1b8fe4,#2e88ef);
  width: 270px;
  height: 50px;
  line-height: 50px;
  margin: auto;
  color: #fff;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
}

.steambutton span {
  font-family: 'Exo 2', sans-serif;
  font-weight: bold;
  letter-spacing: 0.1em;
  width: 75%;
  font-size: 14px;
  text-transform: uppercase;
  left: 0;
  -webkit-transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
  transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
}

.steambutton span,
.steambutton .icon {
  display: block;
  height: 100%;
  text-align: center;
  position: absolute;
  top: 0;
}

.steambutton .icon .fa {
  font-size: 30px;
  line-height: 50px;
  -webkit-transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4), height 0.25s ease;
  transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4), height 0.25s ease;
}

.steambutton .icon {
  width: 25%;
  right: 0;
  -webkit-transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
  transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
}

.steambutton span,
.steambutton .icon {
  display: block;
  height: 100%;
  text-align: center;
  position: absolute;
  top: 0;
}

.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
}

.steambutton span:after {
  content: '';
  background: linear-gradient(90deg,#356180,#163c68);
  width: 2px;
  height: 70%;
  position: absolute;
  top: 15%;
  right: -1px;
}

.steambutton.success span,
.steambutton:hover span {
  left: -72%;
  opacity: 0;
}

.steambutton.success .icon,
.steambutton:hover .icon {
  width: 100%;
}

.steambutton.success .icon .fa,
.steambutton:hover .icon .fa {
  font-size: 45px;
}
form{
    width: 100%;
}
.input-wrapper span {
    padding: 4px;
}
.result{
    padding: 21px;
    height: 200px;
    background: #00000061;
    margin-top: 16px;
    border-radius: 12px;
    overflow: auto;
}
.input-wrapper input:focus {
  border: 2px solid #1b8fe4;
}
.input-wrapper input {
  border: 2px solid #364444;
  padding: 12px;
  border-radius: 11px;
  background: transparent;
  /* margin-block-end: 12px; */
  outline: none;
  color: white;
  box-shadow: 5px 10px 20px #141f28;
  width: -webkit-fill-available;
  font-weight: 700;
   margin-top: 10px;
}
.close{
    margin-right: 22px;
    font-size: 20px;
    color: white;
    font-weight: 400;
    cursor: pointer;
}
.phone__wrap input:valid{
    border: 2px solid #1b8fe4 !important;
}
label{
    font-size: 12px;
    color: #848484;
    padding: 10px;
    font-weight: 700;
}
select{
    padding: 14px;
    width: -webkit-fill-available;
    background: #111e2a;
    outline: none;
    border: none;
    color: white;
    border-radius: 10px;
    -webkit-appearance: none;
}
.formphonenumber_code{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 40%;
    margin-right: 20px;
}
.formphonenumber_code::before, .formphonenumber_code::after {
    content: "";
    position: absolute;
    pointer-events: none;
}
.formphonenumber_code::before {
    width: 25px;
    height: 43px;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0 3px 3px 0;
}
.formphonenumber_code::before {
    background-color: rgba(0,0,0,.15);
}
.formphonenumber_code::after {
    color: #6c829d;
    content: "\25BC";
    height: 1em;
    font-size: .625em;
    line-height: 1;
    right: 7.5px;
    top: 16px;
}
.select_dropdown{
    position: relative;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.select_dropdown::before, .select_dropdown::after {
    content: "";
    position: absolute;
    pointer-events: none;
}
.select_dropdown::before {
    width: 25px;
    height: 43px;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0 12px 12px 0;
}
.select_dropdown::before {
    background-color: rgba(0,0,0,.15);
}
.select_dropdown::after {
    color: #6c829d;
    content: "\25BC";
    height: 1em;
    font-size: .325em;
    line-height: 1;
    right: 7.5px;
    top: 16px;
}
.phone__wrap{
    width: -webkit-fill-available;
    display: flex;
    flex-direction: row;
    margin-top: 18px;
}
.phone__wrap select{
    width: 100%;
}
.modal__wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000073;
    z-index: 3;
}
.modal__wrapper .table__wrapper{
    width: 480px;
    background: #1b2731;
    border-radius: 10px;
    box-shadow: -6px 7px 20px 3px rgba(0,0,0,.16);
    margin: 90px auto;
}
.table__wrapper .table__header{
    width: 100%;
    height: 65px;
    border-top-right-radius: 10px;
    display: flex;
    align-items: center;
    border-top-left-radius: 10px;
    /* background-image: url('../../assets/img/table__img.png'); */
    background-repeat: no-repeat;
    background-position: right;
    position: relative;
}
.table__header .heading{
    width: fit-content;
    color: white;
    font-weight: 700;
    margin-left: 18px;
    font-size: 13px;
    display: flex;
    align-items: center;
    height: 100%;
}
.table__wrapper .table__body{
    display: flex;
    padding: 25px;
    flex-direction: column;
    color: white;
    align-items: center;
}
.table__header .backdrop{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    z-index: 2;
    background: #111c25e0;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 100%;
    justify-content: space-between;
}
.table__body .input-wrapper{
  width: 100%;
  position: relative;
  /* margin-top: 10px; */
  /* margin-bottom: 17px; */
}
.table__body form input {
  border: 2px solid #364444;
  padding: 12px;
  border-radius: 11px;
  background: transparent;
  outline: none;
  color: white;
  box-shadow: 5px 10px 20px #141f28;
  width: -webkit-fill-available;
  font-weight: 700;
}
#border_reset{
    border: 2px solid #364444 ;
}
.table__body .floating-label{
  position: absolute;
  font-size: 10px;
  top: 25px;
  font-weight: 700;
  left: 15px;
  color: #848484;
  pointer-events: none;
  transition: 0.2s ease all;
}
.table__body form input:valid {
  border: 2px solid #1b8fe4;
}
.err{
  border: 2px solid red!important;
}
.err_text{
  color: red !important;
}
.error {
    font-size: 11px;
    padding: 8px;
    color: red !important;
}
.table__body form input:valid~ .floating-label {
  color: #1b8fe4;
}
input:focus ~ .floating-label,input:not(:focus):valid ~ .floating-label{
  top: 5px;
  left: 20px;
  background: #192632;
  padding: 6px;
  font-size: 10px;
}
.table__body form input:focus {
  border: 2px solid #1b8fe4 !important;
}
.table__body form input:focus ~ .floating-label {
  color: #1b8fe4;
}
.btn{
    background: linear-gradient(90deg,#1b8fe4,#2e88ef);
    width: 100%;
    padding: 11px;
    outline: none;
    border-radius: 5px;
    border-style: none;
    margin: 15px auto;
    cursor: pointer;
    box-shadow: 5px 10px 20px #141f28;
    color: white;
    font-weight: 600;
}
.btn:hover{
    box-shadow: 0px 0px 10px 0px #2e88ef;
    transform: translateY(-2px);
    transition-duration: .5s;
}
@media (min-width: 320px) and (max-width: 480px) {
    .modal__wrapper .table__wrapper{
        width: 90%;
        margin: 115px auto;
    }
}
</style>
