<template>
    <div  @mousedown="startRename" @mouseup="endRename" class="preset">
        <input class="preset__label" :value="label" @keyup="updatePreset" v-bind:disabled="isEditable === false"></input>
        <a class="preset__update">update</a>
    </div>
</template>

<script>

    let timer = null

    export default {

        data() {

            return {

                isEditable: false
            }
        },

        props: ['preset'],

        computed: {

            label: {

                get() {

                    return this.preset.label || 'Untitled preset'
                }
            }
        },


        methods: {

            startRename() {

                const e = event
                timer = setTimeout(() => {

                    e.target.setSelectionRange(0, e.target.value.length)
                    this.isEditable = true
                    timer = null
                }, 1000)
            },

            endRename(e) {

                clearTimeout(timer)

                if (timer) {

                    this.loadPreset()
                }
            },

            updatePreset() {

                if (event.which == 13) {

                    this.preset.label = event.target.value
                    this.$root.$emit('update-preset', this.preset)
                    this.isEditable = false
                }
            },


            loadPreset() {

                if (this.isEditable) {

                    this.isEditable = false
                }
                    
                const sliders = this.preset.sliders

                Object.keys(sliders).forEach((preset) => {

                    const range = document.getElementById(preset)

                    this.$root.$emit(`update-slider-${range.id}`, sliders[preset])
                })
            }
        }
    }
</script>

<style lang="sass">

    @import "mixins/slider";
    @import "mixins/track";

    .preset {

        @include track;
        line-height: 30px;

        &:hover {

            .preset__update {

                opacity: 1;
            }
        }
    }

    .preset__label {

        display: block;
        padding-right: 40px;
        line-height: 30px;
        width: 100%;
        font-size: 14px;
        color: #555;
        border: none;
        overflow: hidden;
        text-overflow: ellipsis;
        background-color: transparent;

        &[disabled] {

            border-color: transparent;
        }
    }

    .preset__update {

        line-height: 1;
        opacity: 0;
        color: #388df8;
        position: absolute;
        right: 8px;
        padding: 6px 7px;
        display: inline-block;
        font-size: 12px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 2px;

        &:hover {

            background-color: mix(#388df8, #fff, 15%);
        }
    }
</style>