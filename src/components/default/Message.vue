<template>
  <div class="message_t">
     <div class="message__wrapper">
        <div class="message">
            {{noti.notification_obj.notification_message}}
        </div>
     </div>
     <div class="time">{{noti.notification_obj.created_at | moment("from", "now")}}</div>
  </div>
</template>

<script>

export default {
  name: 'Message',
  data() {
    return {
    };
  },
  props: ['noti'],
};
</script>

<style scoped>
.message__wrapper{
    display: flex;
}
.message_t{
    padding: 10px 15px;
    border-bottom: 1px solid hsla(0,0%,100%,.1);
}
.message{
    margin-bottom: 10px;
    color: hsla(0,0%,100%,.56);
    margin-right: 10px;
}
.time{
    font-size: 10px;
    text-align: right;
    margin-right: 10px;
    color: hsla(0,0%,100%,.56);
}
</style>
