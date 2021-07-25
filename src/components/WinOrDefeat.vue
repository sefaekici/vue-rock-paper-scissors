<template>
    <div class="status-component">{{winStatus}}</div>
</template>




<script>
export default {
    data(){
        return{
            computerHand:null,
            winStatus:null,
        }
    },
    methods:{
        setComputerHand(){
            let number=Math.floor(Math.random()*3);
            if(number==0){
                this.computerHand='paper';
            }else if(number==1){
                this.computerHand='rock';
            }
            else{
                this.computerHand='scissors';
            }
        },
        setWinStatus(){
            if(this.selectedHand==this.computerHand){
                this.winStatus="Draw!";
            }
            else if((this.selectedHand=="rock" && this.computerHand=="paper") || (this.selectedHand=='paper' && this.computerHand=='scissors') || (this.selectedHand=="scissors" && this.computerHand=="rock")){
                this.winStatus="Lose!"
                this.$store.commit("setScore",-1);
            }
            else{
                this.winStatus="Win!"
                this.$store.commit("setScore",1);
            }
        }
    },
    mounted(){
        this.setComputerHand();
        this.setWinStatus();
    },
    computed:{
        selectedHand(){
            return this.$store.getters.getSelectedHand;
        }
    }
}
</script>