<template>
    <div class="sound" v-on:click="toggleSound" v-bind:class="{inactive:!isEnabled}">
        <span class="sound__label">{{sound.label}}</span>
        <input type="range" v-on:input="setVolume" v-on:change="changeVolume">
    </div>
</template>

<script>

    import {Howler,Howl} from 'howler'
    import rangeSlider from 'rangeslider-pure'

    export default {

        props: ['sound'],

        data() {

            return {

                hasChanged: false,
                isEnabled: true,
                track: null
            }
        },

        created() {

            this.track = new Howl({

                src: [`sounds/${this.sound.url}`],
                loop: true
            })

            this.track.play()


            this.$watch('isEnabled', () => {

                const slider = this.$el.querySelector('input[type="range"]')

                if(this.isEnabled === false) {

                    // fade the volume out
                    this.track.fade(slider.value/100, 0, 600)

                } else {

                    // fade the volume in
                    this.track.fade(0, slider.value/100, 600)
                }
            })
        },

        mounted() {

            this.$nextTick(() => {

                const elm = this.$el.querySelector("input[type='range']");

                rangeSlider.create(elm,{

                    // room for options here
                })

            })
        },


        methods: {

            setVolume(e) {

                
                this.track.volume(e.target.value/100)
                
            },

            changeVolume(e) {

                this.hasChanged = true

                setTimeout(() => {

                    this.hasChanged = false
                }, 50)
            },

            toggleSound(e) {

                if(e.target.classList.contains('sound') &&
                    this.hasChanged === false) {

                    this.isEnabled = !this.isEnabled
                }
            }
        }

    }

</script>

<style>

    .rangeSlider {

        margin: 8px 0 6px;
        position: relative;
        background-color: #9aa4ad;
        height: 6px;
        width: 100%;
        border-radius: 5px;
        box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.2);
    }

    .rangeSlider__handle {

        box-shadow: inset 0px 0px 0px 1px #cfcfcf;
        background: #fff;
        display: block;
        width: 18px;
        height: 18px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 3;
        border-radius: 50%;
    }

    .rangeSlider__handle::after {

        content: "";
        display: inline-block;
        border-radius: 50%;
        background-color: #9ba4ad;
        width: 8px;
        height: 8px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }

    .rangeSlider__fill {

        border-radius: 10px;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        background: #388df8;
    }

    .sound {

        position: relative;
        padding: 8px 8px 9px;
        border-bottom: 1px solid #e5e5e5;
    }

    .sound.inactive::after {

        display: block;
        content: '';
        position: absolute;
        z-index: 999;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background:rgba(255,255,255,.75);

    }

    .sound:hover {

        background-image: linear-gradient(to right, #f9f9fa, #f1f8fc)
    }

    .sound__label {

        /*background-color: #e5e5e5;*/
        display: inline-block;
        font-size: 12px;
        border-radius: 4px;
        color: #555;
    }


</style>