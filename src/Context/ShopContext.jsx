import React, { createContext, useEffect, useState } from "react";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        fetch('http://localhost:4001/allproducts')
            .then((response) => response.json())
            .then((data) => setAll_Product(data))
            .catch((error) => console.error('Error fetching products:', error));
    
        if(localStorage.getItem('auth-token')) {
            fetch('http://localhost:4001/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: "",
            }).then((response) => response.json())
              .then((data) => setCartItems(data))
              .catch((error) => console.error('Error fetching cart:', error));
        }
    }, []);

    const addToCart = (itemsId) => {
        setCartItems(prev => ({...prev, [itemsId]: prev[itemsId] + 1}));

        if(localStorage.getItem('auth-token')) {
            fetch('http://localhost:4001/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemsId": itemsId }),
            })
                .then((response) => response.json())
                .then((data) => console.log('Response from addtocart:', data))
                .catch((error) => console.error('Error adding to cart:', error));
        }
    };

    const removeFromCart = (itemsId) => {
        setCartItems(prev => ({...prev, [itemsId]: prev[itemsId] - 1}));

        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4001/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemsId": itemsId }),
            })
                .then((response) => response.json())
                .then((data) => console.log('Response from removefromcart:', data))
                .catch((error) => console.error('Error removing from cart:', error));
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            if (cartItems[items] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(items));
                if (itemInfo) {
                    totalAmount += cartItems[items] * itemInfo.new_price;
                } else {
                    console.error(`Product with id ${items} not found`);
                }
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const ContextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
