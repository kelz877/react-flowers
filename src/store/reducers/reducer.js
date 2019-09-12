const initialState = {
    counter: 0,
    cartItems: []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'Count_CART'){
        return {
            ...state, 
            counter: state.counter + 1,
            cartItems: state.cartItems.concat(action.payload)
        }
    } 
    return state
}

export default reducer