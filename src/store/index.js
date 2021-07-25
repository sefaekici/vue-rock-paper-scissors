import Vue from "vue"
import Vuex from "vuex";


Vue.use(Vuex);

export const store=new Vuex.Store({
    state:{
        selectedHand:null,
        score:0,
        currentComponent:"app-select-hand",
    },
    getters:{
        getScore(state){
            return state.score;
        },
        getSelectedHand(state){
            return state.selectedHand;
        },
        getCurrentComponent(state){
            return state.currentComponent;
        }
    },
    mutations:{
       setScore(state,payload){
           state.score+=payload;
       },
       setSelectedHand(state,payload){
           state.selectedHand=payload;
       },
       setCurrentComponent(state,payload){
           state.currentComponent=payload;
       }
    },
    actions:{}
})