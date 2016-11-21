<template>
    <div>
        <Preset v-for="preset in presets" :preset="preset"></Preset>
       
        <button @click="savePreset" class="preset__clear">save presets</button>
        <button @click="clearPresets" class="preset__clear">Clear presets</button>
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

            renamePreset() {

            },


            savePreset() {

                const ranges = document.querySelectorAll('[data-preset]')
                const preset = {}
                preset.sliders = {}

                // get the values from the range sliders
                ranges.forEach((range) => {

                    preset['sliders'][range.id] = {

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

            this.$root.$on('update-preset', (preset) => {

                let record = this.presets.find((p) => {

                    return preset === p
                })

                record = preset
                storage.set('presets', this.presets)

            })

            // Load the data
            storage.get('presets', (err, presets) => {

                if (err) throw error;

                if (presets.length) {

                    presets.forEach((preset) => {

                        console.log(preset)
                        this.presets.push(preset)
                    })
                }
            })
        }
    }
</script>

<style lang="sass">

    .preset__new {

        padding: 8px;
        font-size: 13px;
    }

    .preset__clear {

        /*display: none;*/
    }

</style>