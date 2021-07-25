<template>
    <div class="status-component">
        <h3>{{winStatus}}</h3>
        <div class="selections">
            <span><strong>Computer Select:  </strong>{{computerHand | getUpperCase}}</span>
            <br>
            <span><strong>User Select:  </strong>  {{selectedHand | getUpperCase}}</span>
        </div>
        <button @click="setCurrentComponent()">Play Again</button>
    </div>
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
        setCurrentComponent(){
            this.$store.commit("setCurrentComponent","app-select-hand");
            this.$store.commit("setSelectedHand",null);
        },
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
    },
    filters:{
        getUpperCase(val){
            return val.toUpperCase();
        }
    }
}
</script>



<style lang="scss" scoped>
.status-component{
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    h3{
        font-size: 40px;
        text-align: center;
        margin-bottom:15px;
        color:#053742;
    }

    .selections{
        margin-bottom: 15px;
        font-size: 22px;
        strong{
            font-size: 25px;
        }
    }

    button{
        width: 100%;
        height: 60px;
        font-size: 20px;
        background: #053742;
        color:#fff;
        border:none;
        border-radius: 10px;
        cursor: pointer;
        transition:color .5s,background .5s;
        &:hover{
            color:#053742;
            background: #fff;
        }
    }
}
</style>