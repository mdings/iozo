<template>
    <div>

        <div v-show="presets.length">
            <Preset v-for="preset in presets" :preset="preset"></Preset>
            <a href="javascript:void(0)" @click="addPreset" class="preset__add">New preset</button>
            <a href="javascript:void(0)" @click="clearPresets" class="preset__add">Clear presets</button>
        </div>

        <div class="presets__default" v-show="!presets.length">
            <svg class="icon__preset">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-preset"></use>
            </svg>
            <div>There are no presets yet. <a href="javascript:void(0)" @click="addPreset">Let's create the first one!</a></div>
        </div>

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


            addPreset() {

                const ranges = document.querySelectorAll('[data-preset]')
                const preset = {}
                preset.sliders = {}
                preset.label = 'Untitled'

                // get the values from the range sliders
                ranges.forEach((range) => {

                    preset['sliders'][range.id] = {

                        value: range.value,
                        isEnabled: !range.hasAttribute('data-is-disabled')
                    }
                })

                this.presets.push(preset)
                storage.set('presets', this.presets)
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

                        this.presets.push(preset)
                    })
                }
            })
        }
    }
</script>

<style lang="sass">

    .preset__add {

        display: block;
        color: #000;
    }

    .preset__clear {

        /*display: none;*/
    }

    .presets__default {

        font-size: 13px;
        position: absolute;
        text-align: center;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: #555;

        a {

            margin-top: 2px;
            text-decoration: underline;
            display: inline-block;
            color: inherit;
        }
    }

    .icon__preset {

        width: 70px;
        height: 70px;
        padding: 15px;
        border-radius: 50%;
        background: #ededed;
        fill: #fff;
        display: inline-block;
        margin: 0 auto 11px;

    }

</style>