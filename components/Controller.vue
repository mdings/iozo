<template>
    <div id="controller">
        <Sounds v-show="active === 'sounds'"></Sounds>
        <Effects v-show="active === 'effects'"></Effects>
        <Presets v-show="active === 'presets'"></Presets>
    </div>
</template>

<script>

    import Sounds from './Sounds.vue'
    import Effects from './Effects.vue'
    import Presets from './Presets.vue'

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
        }
    }

</script>

<style scoped>

    #controller {

        flex: 1 1 auto;
        position: relative;
        height: 100%;
        overflow-y: auto;
    }
</style>