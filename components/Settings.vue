<template>
    <div id="settings" v-bind:class="{visible: isVisible}">
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

   export default {

       created() {

           this.$root.$on('toggle-settings', () => {

               this.isVisible = !this.isVisible
           })
       },

       data() {

           return {

               isVisible: false
           }
       }
   }

</script>

<style lang="sass" scoped>

    #settings {

        position: fixed;
        left: 0;
        right: 0;
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