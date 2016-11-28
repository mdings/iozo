<template>
    <header>

        <svg class="button__play" v-on:click="toggleVolume" v-show="isMuted === true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-play"></use>
        </svg>

        <svg class="button__pause" v-on:click="toggleVolume" v-show="isMuted === false">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pause"></use>
        </svg>

        <svg v-on:click="showSettings" class="button__settings" v-bind:class="{active: settingsActive}">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cog"></use>
        </svg>
    </header>
</template>

<script>

    import slider from '../mixins/slider'
    import Pizzicato from 'pizzicato'

    export default {

        created() {

            this.$root.$on('toggle-settings', () => {

               this.settingsActive = !this.settingsActive
           })
        },

        data() {

            return {

                settingsActive: false,
                isMuted: false

            }
        },

        methods: {


            showSettings() {

                this.$root.$emit('toggle-settings', {})
            },

            toggleVolume() {

                this.isMuted = !this.isMuted
                Pizzicato.volume = this.isMuted ? 0 : 1
            },
        }
    }
</script>

<style lang="sass">

    header {

        position: relative;
        padding: 6px 0;
        text-align: center;
        background-color: #ededed;
        border-bottom: 1px solid #d6d6d6;
        flex: 0 0 auto;
    }

    .button__save {

        width: 35px;
        height: 35px;
        fill: red;
    }

    .button__play {

        display: block;
        background-color: #fff;
        border-radius: 50%;
        padding: 3px;
        width: 35px;
        height: 35px;
        margin: 0 auto;
        fill: #333;

    }

    .button__pause {

        display: block;
        background-color: #fff;
        border-radius: 50%;
        padding: 11px;
        width: 35px;
        height: 35px;
        overflow: visible;
        margin: 0 auto;
        fill: #333;
    }

    .button__settings {

        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        fill: #6A6E7C;
        transition: fill 200ms;

        &.active {

            fill: #388df8;
        }
    }


</style>