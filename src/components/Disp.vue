<template>
<div class="disp">
    <div class="first">
        <PulseLoader />
    </div>
    <div class="second">
        <button @click="logout" class="btn btn-sm btn-dark">Logout</button>
        <h2>Passport <span>OAuth2.0</span></h2>
        <div class="content container">
            <pre>
                {{user}}
            </pre>
        </div>
    </div>
</div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/RotateLoader.vue'
export default {
  name: 'Disp',
  components:{
      PulseLoader
  },
  data () {
    return {
        user:{}
    }
  },
  methods:{
      updateView(){
        document.querySelector('.first').style.display="none"
      },
      logout(){
          this.$store.dispatch('logout')
          this.$router.push({name:'Home'})
      }
  },
  mounted(){
      this.user=this.$store.state.user
  },
  watch:{
      user:'updateView'
  }
}
</script>

<style scoped>
.first{
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
}
.second{
    min-height: 100vh;
    position: relative;
    color: #747474;
    background-color: #272727;
    font-family: 'Montserrat';
}
pre{
    color: rgb(43, 163, 79);
    margin: 0;
    overflow-y: hidden;
    overflow-x: scroll;
    background-color: #383838;
    border-radius: 1%;
    font-size: 1.2rem;
}
.content{
    padding-bottom: 1.5rem;
}
.second h2{
    text-align: center;
    padding: 2rem;
}
.second button{
    position: absolute;
    top: 1rem;
    right: 2.5rem;
}
pre::-webkit-scrollbar{
    width: 5px;
  height: 5px;
  background-color:grey;
}
pre::-webkit-scrollbar-thumb{
    background:rgb(80, 80, 80);
}
h2 span{
    font-weight: bold;
    color: #fff;
}
@media only screen and (max-width: 768px){
    .second button{
        position: absolute;
        top: 1rem;
        right: 0.5rem;
    }
    h2 span{
        display: block;
        font-weight: bold;
        color: #fff;
    }
}
</style>
