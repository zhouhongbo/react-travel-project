import { ProductsAction } from "../actions/products";
import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
} from "../actionTypes/products";

export interface ProductsState {
  productList: any[];
  isLoad: boolean;
  errorMsg: string | null;
}

const defaultState: ProductsState = {
  isLoad: true,
  errorMsg: null,
  productList: [],
};

export default (state = defaultState, action: ProductsAction) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        isLoad: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoad: false,
        productList: action.payload,
      };
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        isLoad: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};
