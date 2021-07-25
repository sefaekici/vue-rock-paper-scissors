<template>
    <div class="done-button">
        <button>CONFIRM</button>
    </div>
    
</template>

<script>
export default {
    props:["selectedHand"],
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
             background: #07689F;
             color: #fff;
             font-size: 20px;
             border: none;
             transition: background 0.4s,color 0.4s;
             &:hover{
                 background: #fff;
                 color: #07689F;
             }
         }
     }
</style>