import * as types from '../types/basket';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const basket = (state = initialState, action) => {
  switch (action.type) {
    case types.BASKET_ADD_ITEM:
      let newItems = [];
      const hasItem = state.items.some(i => i.id === action.payload.id);

      if (hasItem) {
        newItems = state.items.map(i => {
          if (i.id === action.payload.id) {
            return {
              ...i,
              quantity: i.quantity + 1,
            };
          }
          return i;
        });
      } else {
        newItems = [action.payload, ...state.items];
      }
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice + action.payload.price,
        totalQuantity: state.totalQuantity + 1,
      };
    case types.BASKET_REMOVE_ITEM: {
      let newItems = state.items;
      const item = state.items.find(i => i.id === action.payload);
      console.log(item, action.payload);
      if (item.quantity > 1) {
        newItems = state.items.map(i => {
          if (i.id === action.payload) {
            return {
              ...i,
              quantity: i.quantity - 1,
            };
          }
          return i;
        });
      } else {
        newItems = state.items.filter(i => i.id !== action.payload);
      }
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - item.price,
        totalQuantity: state.totalQuantity - 1,
      };
    }
    case types.BASKET_REMOVE_ALL: {
      const item = state.items.find(i => i.id === action.payload);

      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload),
        totalPrice: state.totalPrice - item.price * item.quantity,
        totalQuantity: state.totalQuantity - item.quantity,
      };
    }
    case types.BASKET_CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default basket;
