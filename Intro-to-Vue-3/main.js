const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'the socks is white',
            counter: 0,
        }
    },
    methods: {
        increase() {
            this.counter++
        },
        decrease() {
            this.counter--
        }
    },
});
 const mountApp = app.mount('#app')