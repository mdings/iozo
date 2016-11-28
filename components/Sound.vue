<template>
    <div class="sound" v-on:click="toggleSound" v-bind:class="{inactive:!isEnabled}">
        <span class="sound__label">{{sound.label}}</span>
        <input type="range" v-bind:id="sound.name" data-preset @change="changeVolume">
    </div>
</template>

<script>

    import slider from '../mixins/slider'
    import Pizzicato from 'pizzicato'

    export default {

        mixins: [slider],

        props: ['sound'],


        data() {

            return {

                track: null
            }
        },

        created() {

            this.track = new Pizzicato.Sound({
                source: 'file',
                options: {
                    path: `sounds/${this.sound.url}`,
                    loop: true,
                    attack: .5,
                    release: .5,
                    volume: 0.5
                }
            }, () => {

                // this.track.play()
            })


            this.$watch('isEnabled', () => {

                if(this.isEnabled === false) {

                    this.track.pause()

                } else {

                    this.track.play()
                }
            })
        },

        methods: {

            slide(pos, val) {

                if (this.isEnabled) {

                    this.track.volume = val
                }
            },

            changeVolume(e) {

                this.hasChanged = true

                setTimeout(() => {

                    this.hasChanged = false
                }, 50)
            },

            toggleSound(e) {

                /* @TODO: this could go the the mixin */
                if(e.target.classList.contains('sound') &&
                    this.hasChanged === false) {

                    this.isEnabled = !this.isEnabled
                }
            }
        }

    }

</script>

<style lang="sass">

    @import "mixins/slider";
    @import "mixins/track";

    .slider {

        @include slider;
    }

    .sound {

        @include track;
    }


</style>