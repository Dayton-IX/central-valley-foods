const initialState = {
    cart: [],
    total: 0
}

let i = 0;
const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD':
            const newArray = state.cart.concat({...action.item, cartId: i});
            const newTotal = state.total + action.item.price
            i++;
            return {
                ...state,
                cart: newArray,
                total: newTotal
            }
        case 'REMOVE':
            return {
                ...state,
                cart: state.cart.filter(item => item.cartId !== action.itemId),
                total: state.total - action.price
            }
        case 'REFRESH':
            return {
                cart: [],
                total: 0
            }
        default:
            return state;
    }
}

export default reducer;