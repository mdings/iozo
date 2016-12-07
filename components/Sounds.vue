<template>
    <div>
        <Sound v-for="sound in sounds" :sound="sound"></Sound>
    </div>
</template>

<script>

    import Sound from './Sound.vue'

    export default {

        data() {

            return {

                name: 'sounds',
                sounds: []
            }
        },

        components: {

            Sound
        },

        created() {

            this.sounds = require("json-loader!../sounds.json");
        }

    }

</script>

<style>

    section {


    }
</style>