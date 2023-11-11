const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            cart: 0,
            image: './assets/images/socks_green.jpg',
            inStock: true,
            inventory: 5,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ],
            description: 'the socks is white',
            counter: 1,
        }
    },
    methods: {
        increase() {
            this.counter++;
            this.inventory = this.inventory + 5;
        },
        decrease() {
            this.counter--;
            this.inventory = this.inventory - 5;
        },
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        updateImage(variantImage) {
            if (variantImage == this.image) return;
            this.image = variantImage
        }
    },
});
 const mountApp = app.mount('#app')