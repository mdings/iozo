<template>
    <div id="controller">
        <Sounds v-show="active === 'sounds'"></Sounds>
        <Effects v-show="active === 'effects'"></Effects>
        <Presets v-show="active === 'presets'"></Presets>
        <Settings v-show="active === 'settings'"></Settings>
    </div>
</template>

<script>

    import Sounds from './Sounds.vue'
    import Effects from './Effects.vue'
    import Presets from './Presets.vue'
    import Settings from './Settings.vue'

    export default {

        data() {

            return {

                active: 'sounds'
            }
        },

        created() {

            this.$parent.$on('control', (panel) => {

                this.active = panel
            })
        },


        components: {

            Sounds,
            Effects,
            Presets,
            Settings
        }
    }

</script>

<style scoped>

    #controller {

        flex: 1 1 auto;
        position: relative;
        overflow-y: auto;
    }
</style>