import rangeSlider from 'rangeslider-pure'

const slider = {

    data() {

        return {

            elm: null,
            hasChanged: false,
            isEnabled: true
        }
    },

    created() {

        this.$watch('isEnabled', () => {

            if (this.isEnabled === false) {

                this.elm.setAttribute('data-is-disabled', true)

            } else {

                this.elm.removeAttribute('data-is-disabled')
            }
        })
    },


    mounted() {

        this.$nextTick(() => {

            this.elm = this.$el.querySelector("input[type='range']")
            const baseClass = 'slider'

            rangeSlider.create(this.elm,{

                // room for options here
                rangeClass: `${baseClass}`,
                fillClass: `${baseClass}__fill`,
                handleClass: `${baseClass}__handle`

            })

            // listen to specific updates for this slider
            this.$root.$on(`update-slider-${this.elm.id}`, (range) => {

                this.isEnabled = range.isEnabled

                this.elm
                    .rangeSlider
                    .update({
                        value: range.value
                    }, false)
            })

        })
    },

}

export default slider
