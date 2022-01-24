import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {

    const [cart, setCart] = useState(localStorage.cart ? JSON.parse(localStorage.cart) : [])

    const saveCart = (newCart) => {
        localStorage.cart = JSON.stringify(newCart)
    }

    const addToCart = (product) => {
        const foundIndex = cart.findIndex(item => item.id === product.id)
        if(foundIndex !== -1){
            const tmp = cart
            tmp[foundIndex].quantity++
            setCart([...tmp])
            saveCart([...tmp])
        }else {
            product.quantity = 1
            setCart([...cart, product])
            saveCart([...cart, product])
        }
    }

    const removeFromCart = (product_id) => {
        const foundIndex = cart.findIndex(item => item.id === product_id)
        if(foundIndex !== -1){
            const tmp = cart
            tmp.splice(foundIndex, 1)
            setCart([...tmp])
            saveCart([...tmp])
        }
    }

    const increaseQuantity = (product_id) => {
        const foundIndex = cart.findIndex(item => item.id === product_id)
        if(foundIndex !== -1){
            const tmp = cart
            tmp[foundIndex].quantity++
            setCart([...tmp])
            saveCart([...tmp])
        }
    }

    const decreaseQuanrtity = (product_id) => {
        const foundIndex = cart.findIndex(item => item.id === product_id)
        if(foundIndex !== -1){
            const tmp = cart
            tmp[foundIndex].quantity--
            setCart([...tmp])
            saveCart([...tmp])
        }
    }
    
    const getTotalQuantity = () => {
        let summ = 0
        cart.forEach(item => {
            summ += item.quantity
        });
        return summ
    }

    const getTotalSumm = () => {
        let summ = 0
        cart.forEach(item => {
            summ += item.quantity * item.price
        });
        return summ
    }

    const isInCart = (product_id) => {
        return cart.findIndex(item => item.id === product_id) !== -1
    }


  return (

        <CartContext.Provider value ={
            {
               cart,
               addToCart,
               removeFromCart, 
               increaseQuantity,
               decreaseQuanrtity,
               getTotalQuantity,
               getTotalSumm,
               isInCart
            }
        }>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
