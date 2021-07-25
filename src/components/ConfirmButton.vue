<template>
    <div class="done-button">
        <button @click="controlStatus()">CONFIRM</button>
    </div>
    
</template>

<script>
export default {
    methods:{
        controlStatus(){
            if(this.selectedHandValue!=null){
                this.$store.commit("setCurrentComponent","app-win-or-defeat");
            }
            else{
                alert(this.selectedHandValue);
            }
        },
    },
    computed:{
        selectedHandValue(){
            return this.$store.getters.getSelectedHand;
        }
    }
}
</script>


<style lang="scss" scoped>
     .done-button{
         width: 100%;
         margin-top: 1.7rem;
         display: flex;
         align-items: center;
         justify-content: center;
         button{
             cursor: pointer;
             width: 200px;
             height: 60px;
             border-radius: 5px;
             background: #52616B;
             color: #fff;
             font-size: 20px;
             border: none;
             transition: background 0.4s,color 0.4s;
             &:hover{
                 background: #fff;
                 color: #52616B;
             }
         }
     }
</style>