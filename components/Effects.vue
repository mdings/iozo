<template>
   <div>
       <Effect v-for="effect in effects" :effect="effect"></Effect>
   </div>
</template>

<script>

    import Pizzicato from 'pizzicato'
    import Effect from './Effect.vue'

    export default {

        data() {

            return {

                name: 'effects',
                effects: []
            }
        },

        created() {

            const tremolo = new Pizzicato.Effects.RingModulator({
                time: 0.45,
    speed: 0.2,
    depth: 0.1,
    feedback: 0.1,
    mix: 0.5
            });

            var input = Pizzicato.masterGainNode;
            var output = Pizzicato.context.createGain();
            input.connect(tremolo);
            tremolo.connect(output);


            console.log(Pizzicato)
            console.log(input)
            console.log(output)
        },

        components: {

            Effect
        }
    }

</script>

<style lang="sass">

</style>