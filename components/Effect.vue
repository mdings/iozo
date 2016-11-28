<template>
    <div class="effect" v-on:click="toggleEffect" v-bind:class="{inactive:!isEnabled}">
        <span class="effect__label">{{effect.label}}</span>
        <input type="range" @change="changeAmount" v-bind:id="effect.name" data-preset>
    </div>
</template>

<script>

    import Pizzicato from 'pizzicato'
    import slider from '../mixins/slider'

    export default {

        mixins: [slider],

        props: ['effect'],

        created() {

            // const tuna = new Tuna(Howler.ctx)
            // const chorus = new tuna.Chorus({})

            // Howler.addEffect(chorus)
        },

        methods: {

            toggleEffect(e) {

                /* @TODO: this should go to the mixin */
                if(e.target.classList.contains('effect') &&
                    this.hasChanged === false) {

                    this.isEnabled = !this.isEnabled
                }
            },

            slide() {

            },

            changeAmount() {
                
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

    .effect {

        @include track;
    }
</style>