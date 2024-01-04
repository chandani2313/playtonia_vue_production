<template>
  <div class="crop_image" >
      <div class="modal__wrapper">
            <div  class="table__wrapper animated zoomIn">
                <div class="table__header">
                    <div class="backdrop">
                    <div class="heading">CHANGE COVER PICTURE</div>
                    <div class="close" @click="toggle">X</div>
                    </div>
                </div>
                <div class="table__body">
                   <div v-if="imgSrc" class="image__wrap">
                        <vue-cropper
                            ref='cropper'
                            :guides="true"
                            :view-mode="2"
                            drag-mode="crop"
                            :auto-crop-area="0.5"
                            :background="true"
                            :src="imgSrc"
                            :zoomOnWheel="true"
                            :aspectRatio="20/10"
                            :cropBoxResizable="false"
                            alt="Profile Picture"
                            :img-style="{ 'width': '200px', 'height': '200px' }">
                        </vue-cropper>
                    </div>
                    <div class="dummy__image" v-if="!imgSrc">

                    </div>
                    <input hidden type="file" name="image" accept="image/*" style="font-size: 1.2em; padding: 10px 0;"
                        @change="setImage" ref="file"  />
                    <div class="button__wrap">
                        <button class="btn" v-if="!imgSrc" @click="$refs.file.click()">Select Picture</button>
                        <button class="btn" @click="cropImage" v-if="imgSrc != ''">Upload</button>
                         <button class="btn" v-if="imgSrc" @click="$refs.file.click()">Change Picture</button>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
  name: 'create_team',
  data() {
    return {
      imgSrc: '',
      cropImg: null,
      cropImg: '',
      image_loaded: '',
      crop_image: false,
      profile_crop: false,
    };
  },
  components: {
  },
  methods: {
     toggle() {
        this.$emit('cover');
    },
    setImage(e) {
      const file = e.target.files[0];
      if (file.type.indexOf('image/') === -1) {
        alert('Please select an image file');
        return;
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }
    },
    cropImage() {
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      axios
            .post('/player/profile_image', {
            cover_image: this.cropImg,
            })
            .then((response) => {
               this.$notify({
                  title: 'Success.',
                  group: 'notifications',
                  text: 'Profiel Picture Updated Successfully.',
              });
               window.location.reload(true);
            })
            .catch((e) => {
              console.log(e.response.data)
              this.$notify({
                  title: 'Warning.',
                  type: 'warn',
                  group: 'notifications',
                  text: 'Profiel Picture Change Failed.',
              });
            });
    },
  },
};
</script>


<style scoped>

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
