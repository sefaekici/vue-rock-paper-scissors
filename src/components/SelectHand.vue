<template>
    <div class="select-hand">
        <app-hand-options :selectedHand="selectedHand"></app-hand-options>
        <app-confirm-button :selectedHand="selectedHand" ></app-confirm-button>
    </div>
</template>



<script>
import HandOptions from "./HandOptions.vue"
import ConfirmButton from "./ConfirmButton.vue"
export default {
     props:["selectedHand"],
     components:{
         appHandOptions:HandOptions,
         appConfirmButton:ConfirmButton,
     }
}
</script>