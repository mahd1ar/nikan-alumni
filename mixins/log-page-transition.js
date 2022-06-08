// this will only works on pages not components

export default {
    transition: {
        beforeEnter() {
            this.$store.dispatch('loading/transitioning', true)
        },
        afterEnter() {
            this.$store.dispatch('loading/transitioning', false)
        },
    },
}
