import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // console.log("cart item", cartItems);
    const addToCart = (itemsId) => {
        setCartItems(prev => ({
            ...prev,
            [itemsId]: prev[itemsId] + 1
        }));

    };

    const removeFromCart = (itemsId) => {
        setCartItems(prev => ({
            ...prev,
            [itemsId]: prev[itemsId] - 1
        }));
    };

    const getTotalCartAmount =() =>{
        let totalAmount = 0;
        for (const items in cartItems ){
            if(cartItems[items] > 0){
            let itemInfo = all_product.find((product) => product.id === Number(items));
       
            totalAmount += cartItems[items] * itemInfo.new_price;
        }
    }
    return totalAmount;

}

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem+= cartItems[item]; 
            }
        }
        return totalItem;
    }

    const ContextValue = {getTotalCartItems,getTotalCartAmount,all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
