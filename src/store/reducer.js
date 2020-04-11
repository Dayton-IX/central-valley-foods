const initialState = {
    cart: [],
    total: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD':
            const newArray = state.cart.concat(action.item);
            const newTotal = state.total + action.item.price
            return {
                ...state,
                cart: newArray,
                total: newTotal
            }
        default:
            return state;
    }
}

export default reducer;