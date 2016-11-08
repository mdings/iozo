<template>
    <section>
        <Sound v-for="sound in sounds" :sound="sound"></Sound>
    </section>
</template>

<script>

    import Sound from './Sound.vue'

    export default {

        created() {

        },


        data() {

            return {

                sounds: [
                    {
                        label: 'Ocean',
                        url: 'ocean.mp3'
                    },
                    {
                        label: 'Park',
                        url: 'park.mp3'
                    },
                    {
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

        flex: 1 1 auto;
        position: relative;
        overflow-y: auto;
    }
</style>