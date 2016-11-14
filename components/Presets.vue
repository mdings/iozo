<template>
    <div>
        <Preset v-for="preset in presets" :preset="preset"></Preset>
        <button @click="savePreset">Save new preset</button>
        <button @click="clearPresets">Clear presets</button>
    </div>
</template>

<script>

    import storage from 'electron-json-storage'
    import Preset from './Preset.vue'

    export default {

        data() {

            return {

                presets: []
            }
        },


        methods: {

            savePreset() {

                const ranges = document.querySelectorAll('[data-preset]')
                const preset = {}

                ranges.forEach((range) => {

                    preset[range.id] = {

                        value: range.value,
                        isEnabled: !range.hasAttribute('data-is-disabled')
                    }
                })

                this.presets.push(preset)
                storage.set('presets', this.presets)

                console.log(preset)

            },

            clearPresets() {

                storage.clear((err) => {

                    if (err) throw err

                    this.presets = []
                })
            }
        },

        components: {

            Preset
        },

        mounted() {

        },

        created() {

            // Load the data
            storage.get('presets', (err, presets) => {

                if (err) throw error;

                if (presets.length) {

                    presets.forEach((preset) => {

                        this.presets.push(preset)
                    })
                }
            })
        }
    }
</script>

<style lang="sass">


</style>