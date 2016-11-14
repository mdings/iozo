<template>
    <footer>
        <button v-on:click="showSection('sounds')" v-bind:class="{active: active === 'sounds'}">Sounds</button>
        <button v-on:click="showSection('effects')" v-bind:class="{active: active === 'effects'}">Effects</button>
        <button v-on:click="showSection('presets')" v-bind:class="{active: active === 'presets'}">Presets</button>
    </footer>
</template>

<script>
    export default {

        data() {

            return {

                active: 'sounds'
            }
        },

        created() {

            this.$parent.$on('control', (panel) => {

                this.active = null
            })
        },


        methods: {

            showSection(panel) {

                this.active = panel
                this.$parent.$emit('control', panel)
            }
        }
    }
</script>

<style scoped>

    footer {

        position: relative;
        padding: 5px 0 6px;
        text-align: center;
        background-color: #ddd;
        border-top: 1px solid #d6d6d6;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
    }

    button {

        color: 333;
        font-size: 11px;
        line-height: 18px;
        padding: 0 12px;
        display: inline-block;
        background-color: #fff;
        border: 1px solid transparent;
        border-top-color: #cacaca;
        border-left-color: #c3c3c3;
        border-bottom-color: #adadad;
        border-right-color: #c3c3c3;
        margin-left: -1px;
        box-shadow: 0 1px 1px rgba(0,0,0,.06);
    }

    button.active {

        background-color: #6d6c6d;
        color: #fff;
    }

    button:first-child {

        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    button:last-child {

        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
</style>