<template>
    <div class="effect" v-on:click="toggleEffect" v-bind:class="{inactive:!isEnabled}" v-show="effect.isVisible">
        <span class="effect__label">{{effect.label}}</span>
        <input type="range" v-on:input="setAmount" v-on:change="changeAmount" v-bind:id="effect.id" data-preset data-is-disabled>
    </div>
</template>

<script>

    import slider from '../mixins/slider'
    import Tuna from 'tunajs'
    import 'howler-plugin-effect-chain'

    export default {

        mixins: [slider],

        props: ['effect'],

        data() {

            return {

                effectLayer: null,
                isAttached: false
            }
        },

        created() {

            const tuna = new Tuna(Howler.ctx)

            this.effectLayer = new tuna[this.effect._](this.effect.params);
            this.attachOrRemove()
            this.$watch('isEnabled', this.attachOrRemove)
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

            attachOrRemove() {

                if (this.isEnabled) {

                    this.isAttached = true
                    Howler.addEffect(this.effectLayer)

                } else {

                    if (this.isAttached) {

                        this.isAttached = false
                        Howler.removeEffect(this.effectLayer)
                    }
                }
            },

            fadeto() {

            },

            changeAmount() {


            },

            setAmount() {


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