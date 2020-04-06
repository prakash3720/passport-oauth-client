<template>
<div class="redirect">
    <PulseLoader />
</div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/RotateLoader.vue'
import axios from 'axios'
export default {
  name: 'Redirect',
  components:{
      PulseLoader
  },
  data () {
    return {
        id:this.$route.params.id
    }
  },
  mounted(){
      this.$store.commit('setToken',this.id)
      axios.post('http://localhost:3000/auth/get',{token:this.id}).then(res=>{
          this.$store.commit('updateUser',res.data)
          this.$router.push({name:'Disp'})
      }).catch(err=>{
          console.log(err)
          this.$router.push({name:'Home'})
      })
  }
}
</script>

<style scoped>
.redirect{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #272727;
}
</style>
