<template>
    <div class="select-hand">
        <app-hand-options :selectedHand="selectedHand"></app-hand-options>
        <app-confirm-button :selectedHand="selectedHand" :currentComponent="currentComponent" ></app-confirm-button>
    </div>
</template>



<script>
import HandOptions from "./HandOptions.vue"
import ConfirmButton from "./ConfirmButton.vue"
export default {
     props:["selectedHand","currentComponent"],
     components:{
         appHandOptions:HandOptions,
         appConfirmButton:ConfirmButton,
     },
}
</script>