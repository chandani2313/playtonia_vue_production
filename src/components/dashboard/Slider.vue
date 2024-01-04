<template>
    <div class="top-wrap">
       <div class="carosel">
            <div class="slideshow-container">
              <div class="myslides fade" v-for="image in images" :key="image.id">
                <a :href="'http://alpha.playtonia.com/tournament/'.concat(image.tournament)" >
                <div >
                  <img class="desktop-carosel" :src="image.slider_image_desktop">
                  <img  class="mobile-carosel" :src="image.slider_image_mobile">
                </div>
              </a>
            </div>
              <a class="prev" @click="plusSlides(-1)">&#10094;</a>
              <a class="next" @click="plusSlides(1)">&#10095;</a>
              <div class="dots-pointer" style="text-align:center">
                <span class="dots" v-for="image in images" :key="image.id"></span>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'slider',
  data() {
    return {
        slideIndex: 1,
        slides: null,
        dots: null,
        timeout: null,
    };
  },
  props: [
      'images',
  ],
  methods: {
    /* eslint operator-assignment: [0,  "never"] */
    autoSlide() {
        let i;
        this.slides = document.getElementsByClassName('myslides');

        this.dots = document.getElementsByClassName('dots');
        for (i = 0; i < this.slides.length; i = i + 1) {
            this.slides[i].style.display = 'none';
        }
        for (i = 0; i < this.dots.length; i = i + 1) {
            this.dots[i].className = this.dots[i].className.replace('activee', '');
        }
        if (this.slideIndex > this.slides.length) { this.slideIndex = 1; }
        this.slides[this.slideIndex - 1].style.display = 'block';
        this.dots[this.slideIndex - 1].className += ' activee';
        this.slideIndex = this.slideIndex + 1;
        this.timeout = setTimeout(this.autoSlide, 3000);
    },
    showSlide(n) {
        let i;
        this.slides = document.getElementsByClassName('myslides');
        this.dots = document.getElementsByClassName('dots');
        if (n > this.slides.length) { this.slideIndex = 1; }
        if (n < 1) { this.slideIndex = this.slides.length; }
        for (i = 0; i < this.slides.length; i = i + 1) {
            this.slides[i].style.display = 'none';
        }
        for (i = 0; i < this.dots.length; i = i + 1) {
            this.dots[i].className = this.dots[i].className.replace('activee', '');
        }
        this.slides[this.slideIndex - 1].style.display = 'block';
        this.dots[this.slideIndex - 1].className += ' activee';
    },
    plusSlides(n) {
        this.showSlide(this.slideIndex = this.slideIndex + n);
    },
  },
  mounted() {
      this.showSlide(this.slideIndex);
      this.autoSlide();
  },
  beforeDestroy() {
    clearInterval(this.timeout);
  },
};
</script>

<style scoped>
.top-wrap{
    padding: 1.5rem;
}
.carosel{
  border-radius: 10px;
  overflow: hidden;
}
.slideshow-container{
  position: relative;
  overflow: hidden;
  width: 100%;
}
.myslides{
  display: none;
}
.myslides img{
  width: 100%;
}
.prev , .next{
    background: rgba(0, 0, 0, 0.28);
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    height: 40px;
    line-height: 35px;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    cursor: pointer;
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    text-align: center;
    width: 40px;
}
.next{
  right: 2%;
}
.prev{
  left: 2%;
}
.prev:hover,.next:hover{
  background-color: rgba(0,0,0,0.8);
  color:#3CA3F0;
}
.dots-pointer{
  position: absolute;
  bottom: 5%;
  width:100%;
  text-align: center;
}
.dots{
  width: 25px;
  height: 4px;
  background: transparent;
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;
}

.fade{
  animation-name:fade;
  animation-duration:1.5s;
}

@keyframes fade{

from {opacity: 0.4;}

to {opacity: 1;}

}
.activee  {
  background-color: transparent;
}
.dots:hover {
  background-color: #3CA3F0;
}

.desktop-carosel {
    display: block !important;
  }
.mobile-carosel {
    display: none !important;
}
@media (min-width: 320px) and (max-width: 767px) {
    .top-wrap{
        padding: 0;
    }
    .carosel{
        border-radius: 0;
    }
    .prev , .next{
        font-size: 15px;
        height: 30px;
        line-height: 25.5px;
        width: 30px;
    }
    .desktop-carosel {
        display: none !important;
    }
    .mobile-carosel {
        display: block !important;
    }
}
</style>
