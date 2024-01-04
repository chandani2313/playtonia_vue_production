<template>
  <div class="navbar">
    <nav class="indextop-nav">
        <div class="indextop-nav-wrapper">
            <div class="playtonia-logo">
                <a href="/">
                    <img src="../../assets/home/Playtonia White.png">
                </a>
            </div>
            <!-- <div class="about_register desktop">
                <div class="Playtonia-register">
                    <div class="Playtonia-register-btn">
                        <div class="login-btn"><span>Log In</span></div>
                    </div>
                    <div class="Playtonia-register-btn">
                        <div class="signup-btn"><span>Sign Up</span></div>
                    </div>
                </div>
            </div> -->

            <div class="about_register " v-if="show">
                <div class="Playtonia-register">
                    <router-link class="Playtonia-register-btn" tag="div" :to="{ name: 'AuthMobile', query: { s: 'login', redirect: this.$route  }}"  exact>
                        <div class="login-btn"><span>Log In</span></div>
                    </router-link>
                    <router-link class="Playtonia-register-btn" tag="div" :to="{ name: 'AuthMobile', query: { s: 'register', redirect: this.$route }}"  exact>
                        <div class="signup-btn"><span>Sign Up</span></div>
                    </router-link>
                </div>
            </div>

        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
      return {
          show: true,
      };
  },
  props: {
  },
  methods: {
      Red() {
           if (this.$route.name === 'AuthMobile') {
                this.show = false;
            } else {
                this.show = true;
            }
      },
  },
  mounted() {
      this.Red();
  },
};
</script>

<style scoped>
.indextop-nav{
    background: #111720;
    -webkit-box-shadow: 5px 7px 6px rgba(0,0,0,.16);
    box-shadow: 5px 7px 6px rgba(0,0,0,.16);
    z-index: 1;
    height: 70px;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.indextop-nav-wrapper{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 30px;
    align-items: center;
    height: 100%;
}
.playtonia-logo{
    display: flex;
    width: 200px;
    height: 60px;
    align-items: center;
}
.about_register{
    display: flex;
    align-items: center;
}
.Playtonia-register{
    display: flex;
    align-items: center;
}
.Playtonia-register-btn{
    padding: 0 8px;
}
.login-btn , .signup-btn{
    padding: 7px 25px;
    cursor: pointer;
    color: #1b2731d1;
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    font-size: 14px;
    white-space: pre;
    border-radius: 4px;
    font-weight: 600;
}
.login-btn:hover , .signup-btn:hover{
    color: #fff;
    box-shadow: 0px 0px 5px 0px #3CA3F0;
}
.desktop{
    display: block;
}

.mobile{
    display:none;
}
@media (min-width: 320px) and (max-width: 767px) {
.desktop{
    display: none;
}

.mobile{
    display:block;
}

.indextop-nav-wrapper{
    padding: 0 10px;
}
.playtonia-logo {
    width: 150px;
}
.Playtonia-register-btn {
    padding: 0 4px;
}
.login-btn , .signup-btn{
    padding: 2px 10px;
    font-size: 12px;
    line-height: 1.7;
}
}
</style>
