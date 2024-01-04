<template>
    <div class="chat">
        <div class="chat__wrapper">
            <div class="heading">LOBBY CHAT</div>
            <div class="message__wrapper"></div>
            <div class="text__box">
                <textarea placeholder="Type Your Message Here..."> </textarea>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Chat',
  data() {
    return {
    };
  },
  components: {
  },
  computed: {
  },
};
</script>

<style scoped>
.chat__wrapper{
    width: 450px;
    border-radius: 10px;
    position: relative;
}
.heading{
    background: #1b2731;
    width: 100px;
    text-align: center;
    color: white;
    padding: 5px;
    position: absolute;
    top: -24px;
    right: 0;
    border-top-left-radius: 10px;
    font-size: 12px;
}
.message__wrapper{
    height: 260px;
    background: #1b2731;
    border-top-left-radius: 10px;
}

.text__box textarea{
    border: none;
    color: #444;
    width: 100%;
    padding: 10px;
    resize: none;
    height: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #0d16209e;
    box-shadow: 2px 3px 6px rgba(0,0,0,.5);
    outline: none;
}
.text__box{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>
