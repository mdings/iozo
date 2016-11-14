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
                sounds: [
                    {
                        name: 'Ocean',
                        label: 'Ocean',
                        url: 'ocean.mp3'
                    },
                    {
                        name: 'Park',
                        label: 'Park',
                        url: 'park.mp3'
                    },
                    {
                        name: 'Rain',
                        label: 'Rain',
                        url: 'rain.mp3'
                    }
                ]
            }
        },

        components: {

            Sound
        }

    }

</script>

<style>

    section {


    }
</style>