import * as types from '../types/basket';

export const addItemToBasket = car => ({
  type: types.BASKET_ADD_ITEM,
  payload: car,
});

export const clearBasket = () => ({
  type: types.BASKET_CLEAR,
});

export const removeBasketItem = id => ({
  type: types.BASKET_REMOVE_ITEM,
  payload: id,
});

export const removeAllBasketItem = id => ({
  type: types.BASKET_REMOVE_ALL,
  payload: id,
});
