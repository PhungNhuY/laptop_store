import { defineStore } from 'pinia'
import { ref } from 'vue';
import { productAndFilterStore } from '@/features/main/stores/productsAndFilter.store';

export const cartStore = defineStore('cart', () => {
    const { products } = productAndFilterStore();
    // cart: map
    // key is product id
    // value is number of product
    const cart = ref(new Map<number, number>());
    const totalProductInCart = ref(countProductInCart());
    const subTotal = ref(calculateSubTotal());

    function countProductInCart(): number {
        return cart.value.size;
    }

    function calculateSubTotal(): number {
        let ans = 0;
        cart.value.forEach((value, key) => {
            ans += products[products.findIndex(pro => pro.id === key)].newPrice * value
        })
        return ans;
    }

    function addToCart(id: number, qty = 1) {
        cart.value.set(id, cart.value.has(id) ? cart.value.get(id) as number + qty : qty);
        console.log('add to cart', id, cart.value.get(id));
        totalProductInCart.value = countProductInCart();
        subTotal.value = calculateSubTotal();
    }

    function removeFromCart(id: number) {
        cart.value.delete(id);
        totalProductInCart.value = countProductInCart();
        subTotal.value = calculateSubTotal();
    }

    function clearCart() {
        cart.value.clear();
        totalProductInCart.value = countProductInCart();
        subTotal.value = calculateSubTotal();
    }

    function updateProductInCart(productId: number, qty: number) {
        cart.value.set(productId, qty > 1 ? qty : 1);
        subTotal.value = calculateSubTotal();
    }

    return {
        cart,
        totalProductInCart,
        subTotal,
        addToCart,
        removeFromCart,
        clearCart,
        updateProductInCart
    };
});