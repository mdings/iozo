<template>
    <div id="settings" v-bind:class="{visible: isVisible}">
        <div class="volume">
            <span class="sound__label">Master volume</span>
            <input type="range">
        </div>
        <ul>
            <li>Master volume</li>
            <li>Start on login</li>
            <li>Started paused</li>
            <li>Show icon in dock</li>
        </ul>
        </ul>
    </div>
</template>

<script>

    import slider from '../mixins/slider'

    export default {

       mixins: [slider],

       created() {

           this.$root.$on('toggle-settings', () => {

               this.isVisible = !this.isVisible
           })
       },

       data() {

           return {

               isVisible: false
           }
       },

       methods: {

           slide(value) {

               Howler.volume(value/100)
           }
       }
   }

</script>

<style lang="sass" scoped>

    #settings {

        position: fixed;
        left: 0;
        right: 0;
        padding: 8px;
        top: 48px;
        background-color: #ededed;
        height: 100vh;
        z-index: 4;
        transition: transform 150ms ease-in-out;
        transform: translate3d(0, calc(100% - 80px), 0);

        &.visible {

            transform: translate3d(0, 0, 0);
        }
    }
</style>