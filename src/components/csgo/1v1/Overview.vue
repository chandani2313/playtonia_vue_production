<template>
    <div class="overview">
        <div class="wrapper">
            <Message/>
            <Controls/>
            <Chat/>
        </div>
    </div>
</template>
<script>
import Chat from '../../chat/Chat.vue';
import Message from './Message.vue';
import Controls from './Controls.vue';
// @ is an alias to /src

export default {
  name: 'Overview',
  data() {
    return {
    };
  },
  components: {
      Chat,
      Message,
      Controls,
  },
  computed: {
  },
};
</script>

<style scoped>
.wrapper{
    height: 300px;
    display: flex;
    justify-content: space-between;
}
</style>
