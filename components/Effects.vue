<template>
   <div>
       <Effect v-for="effect in effects" :effect="effect"></Effect>
   </div>
</template>

<script>

    import Effect from './Effect.vue'

    export default {

        data() {

            return {

                name: 'effects',
                effects: [
                    {
                        name: 'Chorus',
                        label: 'Chorus',
                        settings: {
                            rate: 1.5,
                            feedback: 0.2,
                            delay: 0.0045,
                            bypass: 0
                        }
                    },
                    {
                        name: 'Delay',
                        label: 'Delay',
                        settings: {
                            feedback: 0.45,
                            delayTime: 150,
                            wetLevel: 0.25,
                            dryLevel: 1,
                            cutoff: 2000,
                            bypass: 0
                        }
                    }
                ]
            }
        },

        components: {

            Effect
        }
    }

</script>

<style lang="sass">

</style>