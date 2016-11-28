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
                handleClass: `${baseClass}__handle`,
                onSlide: (pos, val) => {

                    this.slide(pos, val)
                }
            })

            // listen to specific updates for this slider
            this.$root.$on(`update-slider-${this.elm.id}`, (range) => {

                this.isEnabled = range.isEnabled

                // sound update                
                this.slide(null, range.value/100)

                // visual update
                this.elm
                    .rangeSlider
                    .update({
                        value: range.value
                    }, true)
            })

        })
    },

}

export default slider
