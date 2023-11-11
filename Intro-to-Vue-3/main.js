const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
            // counter: 1,
        }
    },
    methods: {
        updateCart(id) {  
            this.cart.push(id)
        }
    }
});
