import {ADD_TO_CART, REMOVE_TO_CART} from '../Constants'

export const addToCart =(data)=>{
    console.warn(data.price, data.name ," actions.js")

    return {
        type:ADD_TO_CART,
        data:data
    }
}

export const removeToCart=()=>{
    console.warn("Remove")
    return {
        type:REMOVE_TO_CART
    }
  
}


