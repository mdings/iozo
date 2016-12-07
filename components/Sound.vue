<template>
    <div class="sound" v-on:click="toggleSound" v-bind:class="{inactive:!isEnabled}">
        <span class="sound__label">{{sound.label}}</span>
        <input type="range" v-bind:id="sound.id" @change="changeVolume" data-preset data-is-disabled>
    </div>
</template>

<script>

    import slider from '../mixins/slider'
    import { Howler, Howl } from 'howler'

    export default {

        mixins: [slider],

        props: ['sound'],

        data() {

            return {

                track: null
            }
        },

        created() {

            this.track = new Howl({

                volume: 0,
                src: [`sounds/${this.sound.url}`],
                loop: true
            })

            this.track.play()
            
            this.$watch('isEnabled', () => {

                const slider = this.$el.querySelector('input[type="range"]')

                if(this.isEnabled === false) {

                    // fade the volume out
                    this.track.fade(this.track.volume(), 0, 1000)

                } else {

                    // fade the volume in
                    this.track.fade(this.track.volume(), slider.value/100, 1000)
                }
            })
        },

        methods: {

            slide(pos, val) {

                if (this.isEnabled) {

                    this.track.volume(val)
                }
            },

            fadeto(pos, val) {

                if (this.isEnabled) {

                    this.track.fade(this.track.volume(), val, 600)
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