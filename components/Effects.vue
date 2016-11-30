<template>
   <div>
       <Effect v-for="effect in effects" :effect="effect" v-show="effect.isVisible"></Effect>
   </div>
</template>

<script>

    import Effect from './Effect.vue'

    export default {

        data() {

            return {

                effects: []
            }
        },

        components: {

            Effect
        },

        created() {

            this.effects = require("json-loader!../effects.json");
        }
    }

</script>

<style lang="sass">

</style>