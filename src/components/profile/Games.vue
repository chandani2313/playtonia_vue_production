<template>
  <div class="general">
    <div class="popup_content popup_content_general">
        <form >
            <div class="username_wrapper" >
                <label class="form-control_label" >COD MOBILE ID</label>
                <input type="text"  v-model="codm_id" class="form-control"  />
                <div class="success" >{{success}}</div>
            </div>
            <button class="save_change_submit" @click.prevent="add_game">Save Change</button>
        </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'general',
  data: function() {
    return {
       codm_id:'',
       success:'',
    }
  },
  components: {
  },
  methods:{
    general_info(){
        axios.get('/player/'.concat(this.$route.params.username))
        .then(response => {
            if(response.status == 201 && response.data.player_games[0]){
                this.codm_id = response.data.player_games[0].game_id
            }
        })
        .catch(e => {
            if(e.response.status === 401){
                localStorage.removeItem("token")
                this.$router.push('/')
            }
        })
    },
    add_game(){
        axios.post('/player/add_game',{
            game_id:this.codm_id,
        })
        .then(response => {
            if(response.status === 201){
                this.success = "Updated Successfully.";
            }
        })
        .catch(e => {
            if (e.response.status === 400) {
                this.$router.push('/');
            }
        })
    }
  },
  mounted(){
      this.general_info()
  }
}
</script>
<style scoped>
.success{
    color: white;
}
.popup_content{
  padding:2rem;
  width: 54%;
  margin: auto;
}

.form-control_label{
    line-height: 1.8;
    font-size: 1rem;
    color: #6c829d;
}
.form-control{
    padding: 12px 20px;
    width: -webkit-fill-available;
    font-size: 13px;
    color: #fff;
    background-color: #1b2731;
    border: 0px solid #4b3b60;
    border-radius: 5px;
    margin-bottom: 6px;
}
.form-control:focus {
    color: #fff; 
    box-shadow: 0px 0px 10px 0px #3CA3F0;
    outline: none;
}
.first-lastname_wrapper, .newold-password_wrapper{
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
}
.gender_wrapper_inner{
  text-align: center; 
}
.gender_wrapper_inner input[type='radio'] {
    display: none;
}
.gender_wrapper_inner input[type='radio'] + label {
    font-size: 12px;
    line-height: 55px;
    letter-spacing: 0;
    width: 55px;
    height: 55px;
    z-index: 1;
    margin: 0 10px 10px 0;
    position: relative;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    color: #0e0e0e;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
    font-weight: bold;
    text-transform: capitalize;
}
 .gender_wrapper_inner input[type='radio'] + label:hover {
    color: #becde3;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);
}
.gender_wrapper_inner input[type='radio'] + label:after {
    top: 2.64px;
    left: -25px;
    width: 50px;
    height: 50px;
}
.gender_wrapper_inner input[type='radio'] + label:after {
    z-index: -1;
    content: '';
    cursor: pointer;
    top: 1.98px;
    margin-left: 50%;
    display: block;
    position: absolute;
    background-size: 100%;
    -moz-box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3);
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
}
 .gender_wrapper_inner input[type='radio']:checked + label:after {
    -moz-box-shadow: inset 0 5px 6px rgba(0, 0, 0, 0.3), inset 0 0 4px rgba(0, 0, 0, 0.9), 0 0 0 black;
    -webkit-box-shadow: inset 0 5px 6px rgba(0, 0, 0, 0.3), inset 0 0 4px rgba(0, 0, 0, 0.9), 0 0 0 black;
    box-shadow: inset 0 5px 6px rgba(0, 0, 0, 0.3), inset 0 0 4px rgba(0, 0, 0, 0.9), 0 0 0 black;
}

.gender_wrapper_inner input[type='radio']:checked + label {
    color: #00ccff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3), 0 0px 30px rgba(0, 255, 255, 0.7);
    -moz-box-shadow: 0 -1px 0 rgba(0, 193, 255, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255, 255, 255, 0.05), 0 0 20px rgba(0, 193, 255, 0.1), 0 0 30px rgba(0, 193, 255, 0.1);
    -webkit-box-shadow: 0 -1px 0 rgba(0, 193, 255, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255, 255, 255, 0.05), 0 0 20px rgba(0, 193, 255, 0.1), 0 0 30px rgba(0, 193, 255, 0.1);
    box-shadow: 0 -1px 0 rgba(0, 193, 255, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255, 255, 255, 0.05), 0 0 20px rgba(0, 193, 255, 0.1), 0 0 30px rgba(0, 193, 255, 0.1);
}
.save_change_submit{
    text-shadow: 1px 1px #46867e;
    padding: 5px 10px;
    cursor: pointer;
    color: #1b2731;
    background-image: linear-gradient(to right, rgb(79, 172, 254) 0%, rgb(0, 242, 254) 100%);
    font-size: 14px;
    white-space: pre;
    border-radius: 4px;
    border:none;
    margin-top: 1rem;
}
.save_change_submit:hover{
  color: #fff;
  box-shadow: 0px 1px 20px 0px #3CA3F0;
}
@media (min-width: 320px) and (max-width: 767px) {
    .popup_content{
        padding:2rem;
        width: auto;
    }
    .first-lastname_wrapper{
        grid-template-columns:none;
    }
    .newold-password_wrapper{
        grid-template-columns:none;
    }
    
}
</style>
