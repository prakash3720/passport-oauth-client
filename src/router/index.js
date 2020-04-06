import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Redirect from '@/components/Redirect'
import Disp from '@/components/Disp'
import {store} from '../store/store'

Vue.use(Router)

const router=new Router({
  'mode':'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'Disp',
      component: Disp,
      beforeEnter:(to,from,next)=>{
        if(from.name!=='Redirect'){
          if(store.state.token){
            next(`/auth/redirect/${store.state.token}`)
          }else{
            next('/')
          }
        }else{
          next()
        }
      }
    },
    {
      path: '/auth/redirect/:id',
      name: 'Redirect',
      component: Redirect
    }
  ]
})

export default router