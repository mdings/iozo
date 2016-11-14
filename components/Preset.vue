<template>
    <div v-on:click="loadPreset">
        preset
    </div>
</template>

<script>

    export default {

        props: ['preset'],

        methods: {

            loadPreset() {

                Object.keys(this.preset).forEach((preset) => {

                    const range = document.getElementById(preset)
                    this.$root.$emit(`update-slider-${range.id}`, this.preset[preset])
                })
            }
        }
    }
</script>

<style lang="sass">

</style>