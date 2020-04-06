import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        token:localStorage.getItem('token') || '',
        user:{}
    },
    getters:{},
    mutations:{
        updateUser:(state,dat)=>{
            state.user=dat
        },
        setToken:(state,token)=>{
            state.token=token
            localStorage.setItem('token',token)
            axios.defaults.headers.common['Authorization']=token
        }
    },
    actions:{
        logout:(context)=>{
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
            context.state.user={}
            context.state.token=''
        }
    }
})