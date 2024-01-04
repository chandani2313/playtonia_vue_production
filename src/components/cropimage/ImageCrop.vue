<template>
  <div class="create_team">
      <div class="modal__wrapper">
            <div  class="table__wrapper animated zoomIn">
                <div class="table__header">
                    <div class="backdrop">
                    <div class="heading">CHANGE PROFILE PICTURE</div>
                    <div class="close" >X</div>
                    </div>
                </div>
                <div class="table__body">
                    <div class="container-bg">
                        <div class="img-container">
                            <img id="clip_src_img" @load="srcImgLoaded" :src="img">
                            <div class="shadow-box"></div>
                            <Select-Box ref="box" :srcSize="imgSize" :ratio="ratio" :img="img" @selectEnd="selectEnd"
                                        @selectChange="selectChange"></Select-Box>
                        </div>
                    </div>
                    <input type="file" ref="file" id="file_input" accept="image/png,image/jpg,image/gif" @change="fileChange">
                    <button  @click="$refs.file.click()" class="btn" >UPLOAD PICTURE</button>
                    <button  @click="SaveImage()" class="btn" >CLIP PICTURE</button>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
  import axios from 'axios';
  import SelectBox from './SelectBox.vue'
  export default {
    components: {
      SelectBox
    },
    data () {
      return {
        img: null,
        $srcImg: null,
        $resImg: null,
        $input: null,
        $imgContainer: null,
        $preContainer: null,
        nw: 0,
        nh: 0,
        clipData: null,
        ratio: 16 / 10, // equal to SelectBox's width / height
        imgSize: {w: 0, h: 0},
        containerTop: 0
      }
    },
    mounted () {
      this.$input = this.$el.querySelectorAll('#file_input')[0]
      this.$srcImg = this.$el.querySelectorAll('#clip_src_img')[0]
      this.$imgContainer = this.$el.querySelectorAll('.img-container')[0]
      this.$containerBox = this.$el.querySelectorAll('.container-bg')[0]
    },
    methods: {
      SaveImage () {
        const formData = new FormData();
        formData.append('image', this.clipData);
        axios
        .post('/player/profile_image',formData)
        .then((response) => {
          if (response.status === 201) {
              this.username = response.data.username;
              this.leafs = response.data.leafs;
          }
          if (response.data.profile_image) {
              this.profile_image = response.data.profile_image;
          }
        })
        .catch((e) => {
          console.log(e.response.data);
        });
        return this.clipData;
      },
      selectChange () {
        const rec = this.$refs.box.rec
        if (rec.w > 0 && rec.h > 0) {
        //   this.updatePreview()
        }
      },
      selectEnd () {
        const rec = this.$refs.box.rec
        if (rec.w > 0 && rec.h > 0) {
          this.clip()
        }
      },
      fileChange () {
        const me = this
        const fd = new FileReader()
        fd.onloadend = function () {
          me.img = fd.result
        };
        if (this.$input.files && this.$input.files[0]) {
          fd.readAsDataURL(this.$input.files[0])
        }
      },
      srcImgLoaded () {
        this.nw = this.$srcImg.naturalWidth
        this.nh = this.$srcImg.naturalHeight
        this.clearSelect()
        this.setImgSize()
        // this.updatePreview()
        this.clip()
      },
      clearSelect () {
        const box = this.$refs.box
        box.clearRec()
        this.clipData = null
      },
      setImgSize () {
        // image's naturalWidth naturalHeight ratio
        const nr = this.nw / this.nh
        const scw = this.$containerBox.offsetWidth
        const sch = this.$containerBox.offsetHeight
        let rw = 0  // select box width
        let rh = 0  // select box height
        if (nr >= this.ratio) {
          this.imgSize.w = scw
          this.imgSize.h = scw / nr
          this.containerTop = (sch - this.imgSize.h) / 2
          rh = this.imgSize.h
          rw = rh * this.ratio
        } else {
          this.imgSize.h = sch
          this.imgSize.w = sch * nr
          this.containerTop = 0
          rw = this.imgSize.w
          rh = rw / this.ratio
        }
        this.$srcImg.setAttribute('style', `width:${this.imgSize.w}px;height:${this.imgSize.h}px;`)
        this.$imgContainer.setAttribute('style',
          `width:${this.imgSize.w}px;height:${this.imgSize.h}px;top:${this.containerTop}px;`)
        this.$refs.box.rec = {w: rw, h: rh, l: 0, t: 0}
      },
      getComputedRec (r) {
        const cw = this.$imgContainer.offsetWidth
        const ch = this.$imgContainer.offsetHeight
        const wr = cw / this.nw
        const hr = ch / this.nh
        return {
          l: r.l / wr, t: r.t / hr,
          w: r.w / wr, h: r.h / hr
        }
      },
      updatePreview () {
        const rec = this.$refs.box.rec
        const pcw = this.$preContainer.offsetWidth
        const pch = this.$preContainer.offsetHeight
        const wr = pcw / rec.w
        const hr = pch / rec.h
        const w = wr * this.$imgContainer.offsetWidth
        const h = hr * this.$imgContainer.offsetHeight
        const l = -rec.l * wr
        const t = -rec.t * hr
        this.$resImg.setAttribute('style',
          `width:${w}px;height:${h}px;top:${t}px;left:${l}px;`)
      },
      clip () {
        let rec = this.$refs.box.rec
        if (!rec.w || !rec.h) {
          return
        }
        const bufferCanvas = document.createElement('canvas')
        const bfx = bufferCanvas.getContext('2d')
        const computedRec = this.getComputedRec(rec)
        bufferCanvas.width = computedRec.w
        bufferCanvas.height = computedRec.h
        bfx.drawImage(this.$srcImg, -computedRec.l, -computedRec.t, this.nw, this.nh)
        this.clipData = bufferCanvas.toDataURL('image/jpeg', 1)
      }
    }
  }
</script>

<style scoped>
  .container-bg {
    width: 100%;
    height: 200px;
    background-color: #000;
    border-radius: 4px;
  }
.img-container {
    position: relative;
    height: 0;
    margin: auto;
  }
  .img-container img {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .img-container .shadow-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1;
  }
#file_input{
    display: none;
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
    border-radius: 0 3px 3px 0;
}
.select_dropdown::before {
    background-color: rgba(0,0,0,.15);
}
.select_dropdown::after {
    color: #6c829d;
    content: "\25BC";
    height: 1em;
    font-size: .625em;
    line-height: 1;
    right: 7.5px;
    top: 16px;
}
.phone__wrap{
    width: -webkit-fill-available;
    display: flex;
    flex-direction: row;
    margin-top: 8px;
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
    margin: 235px auto;
}
.table__wrapper .table__header{
    width: 100%;
    height: 65px;
    border-top-right-radius: 10px;
    display: flex;
    align-items: center;
    border-top-left-radius: 10px;
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
    padding: 13px;
    flex-direction: column;
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
  margin-top: 10px;
}
.table__body form input {
  border: 2px solid #364444;
  padding: 12px;
  border-radius: 11px;
  background: transparent;
  margin-block-end: 12px;
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
  top: 16px;
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
  box-shadow: -1px 1px 20px 0px #a32727 !important;
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
}
.table__body form input:valid~ .floating-label {
  color: #1b8fe4;
}
input:focus ~ .floating-label,input:not(:focus):valid ~ .floating-label{
  top: -11px;
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
.error-tooltip{
    display: block;
    position: absolute;
    color: white;
    padding: 8px;
    top: 4px;
    left: 474px;
    background: #dd4b39;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    z-index: 1;
    box-shadow: 3px 9px 20px #000000;
}
.error-tooltip:after {
    content: "";
    position: absolute;
    top: 10px;
    transform: rotate(90deg);
    left: -14px;
    border-style: solid;
    border-width: 15px 9px 0;
    border-color: #dd4b39 transparent;
    display: block;
    width: 0;
}
.err-mobile{
  display: none;
}
@media (min-width: 320px) and (max-width: 480px) {
    .modal__wrapper .table__wrapper{
        width: 90%;
        margin: 115px auto;
    }
    .err-mobile{
        display: block;
        color: red;
        margin-block-end: 5px;
    }
    .error-tooltip{
        display: none;
    }
}
</style>
