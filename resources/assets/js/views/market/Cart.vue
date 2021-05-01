<template>
    <div class="modal fade bd-example-modal-xl show" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" style="display: block; padding-right: 17px;">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Cart</h4>
                    <button type="button" class="close btn btn-sm btn-danger text-white" data-dismiss="modal" aria-label="Close"
                            @click.stop.prevent="$emit('showCartModal', false)">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">

                    <table class="table" v-if="cart.length" style="min-width: 100%;">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" style="max-width: 60px !important;">Image</th>
                            <th scope="col">Item</th>
                            <th scope="col">Total stock</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(product, index) in cart" :key="product.id">
                            <th scope="row">{{ index }}</th>
                            <td>
                                <img :src="product.first_image" alt="" class="img-fluid rounded" style="height: 40px!important; margin-right: 10px !important;">
                            </td>
                            <td>{{ product.product_name }}</td>
                            <td>{{ product.total_stock }} {{ product.stock_type }}</td>
                            <td>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        {{ product.quantity }} {{ product.stock_type }}
                                    </div>
                                    <div>
                                        <button class="btn btn-sm btn-success" @click="addToCart(product)"><i class="fas fa-plus"></i></button>
                                        <button class="btn btn-sm btn-danger" @click="updateQuantityOfProduct(product, index)"><i class="fas fa-minus"></i></button>
                                    </div>
                                </div>
                            </td>
                            <td>{{ itemTotal(product) }}</td>
                            <td>
                                <button class="btn btn-sm btn-danger" @click="$store.commit('cart/removeFromCart',index)"><i class="fas fa-times"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="font-bold">Total Amount</td>
                            <td></td>
                            <td></td>
                            <td class="font-bold">{{ cartQuantity }}</td>
                            <td class="font-bold">{{ cartTotal }}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div v-else>
                        <div class="alert alert-danger text-center">Cart is empty!</div>
                    </div>

                    <div class="d-flex justify-content-between align-items-center" v-if="cart.length">
                        <button class="btn btn-sm btn-danger text-white" @click="$store.dispatch('cart/clearCart')">Clear Cart</button>
                        <button class="btn btn-sm btn-warning" @click="checkout()">Checkout</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'Cart',
    data() {
        return {
            errors: [],
            quantity: 0,
        }
    },
    computed: {
        ...mapGetters({
            user: 'auth/user',
        }),
        cart() {
            return this.$store.state.cart.cart;
        },
        cartQuantity() {
            return this.cart.reduce((acc, item) => acc + item.quantity, 0);
        },
        cartTotal() {
            let price = this.cart.reduce((acc, item) => acc + (item.regular_price * item.quantity), 0);
            //price = (price / 100);
            return price.toLocaleString('en-BN', {style: 'currency', currency: 'BDT'});
            //return 'Tk ' + price;
        },
    },
    mounted() {
        this.getCart();
    },
    methods: {
        ...mapActions({
            getCart: 'cart/getCart',
        }),
        itemTotal(item) {
            let price = (item.regular_price * item.quantity);
            //price = (price / 100);
            return price.toLocaleString('en-BN', {style: 'currency', currency: 'BDT'});
            //return 'Tk ' + price;
        },
        addToCart(product) {
            let stock = product.total_stock;
            let cartQuantity = 0;
            let cartItems = this.cart;
            let productInTheCart = cartItems.findIndex(item => item.product_slug === product.product_slug);
            if (productInTheCart !== -1) {
                cartQuantity = cartItems[productInTheCart].quantity;
            }
            if (stock <= cartQuantity) {
                this.$store.dispatch('snackbar/addSnack', {color: 'danger', msg: 'No more products in stock.', snakbarType: 'Warning'}, {root: true});
                return;
            }

            //this.$store.dispatch('cart/addProductToCart', product);
            this.$store.commit('cart/addToCart', product); // Add to cart ...
            this.getCart();
        },
        updateQuantityOfProduct(product, index) {
            if (product.quantity <= 1) {
                // Remove From cart ..
                this.$store.commit('cart/removeFromCart', index);
            } else {
                // Reduce ...
                this.$store.commit('cart/updateQuantityOfProduct', product)
            }
            //this.getCart();
        },
        checkout() {
            this.$emit('showCartModal', false);
            if (this.user) {
                if (this.$route.name != 'CheckOut') {
                    this.$router.push({name: 'CheckOut'});
                }
            } else {
                if (this.$route.path != '/login') {
                    this.$router.push({path: '/login'});
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.modal {
    position: fixed;
    overflow-y: scroll;
    transition: all 200ms ease-in-out;
    animation: 400ms fadeShow ease-in-out forwards;

    &::before {
        height: 100vh;
        width: 100vw;
        content: '';
        background: rgba(40, 40, 40, .6);
        position: fixed;
    }
}

@keyframes fadeShow {
    from {
        opacity: 0;
    }
    to {
        opacity: 100%;
    }
}
</style>
