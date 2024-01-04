<template>
  <div class="edit_profile">
    <div class="tab_nav">
        <div class="tab_nav-links">
            <!-- <router-link class="m-btn" tag="a" :to="{ name: 'general'}" exact-active-class="active">GENERAL</router-link> -->
            <!-- <router-link class="m-btn" tag="a" :to="{ name: 'social'}" exact-active-class="active">SOCIAL</router-link> -->
            <router-link class="m-btn" tag="a" :to="{ name: 'Games'}" exact-active-class="active">Games</router-link>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'edit_profile',
  components: {
  },
};
</script>
<style scoped>
.edit_profile{
    width: 100%;
}
.tab_nav{
    background-color: #1b2731;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 3px 2px 20px 3px rgba(0,0,0,.16);
}
.tab_nav > .tab_nav-links {
    display: flex;
    font-size: 16px;
}
.tab_nav > .tab_nav-links > a {
    padding: 15px 10px;
    text-decoration: none;
    color: #ffffff82;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    text-transform: uppercase;
    position: relative;
    transition: 0.5s ease;
    cursor: pointer;
}
.tab_nav > .tab_nav-links > a:before {
    content: "";
    position: absolute;
    top: 5px;
    width: 1px;
    background-color: #2a2d30;
    -webkit-box-shadow: 1px 0 0 #000000;
    box-shadow: 1px 0 0 #000000;
    height: calc(100% - 10px);
    right: 0px;
}
.tab_nav > .tab_nav-links > a:last-child:before{
    display: none;
}
.tab_nav > .tab_nav-links > a::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    width: 100%;
    background-color: transparent;
    transition: 0.5s ease;
    width: 0;
}

.tab_nav > .tab_nav-links > a:hover {
    color: #fff;
}
.tab_nav > .tab_nav-links > a:hover::after {
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    width: 100%;
}
.tab_nav > .tab_nav-links > .active {
    color: #fff;
    background: #111c25;
}
.tab_nav > .tab_nav-links > .active:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    width: 100%;
}
@media (min-width: 320px) and (max-width: 767px) {
    .edit_profile{
       margin-top: 26px;
    }
}
</style>
