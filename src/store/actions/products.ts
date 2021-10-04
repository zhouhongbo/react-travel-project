import { ThunkAction } from "redux-thunk";
import { StateType } from "..";
import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
} from "../actionTypes/products";

interface FetchProductsStartAction {
  type: typeof FETCH_PRODUCTS_START;
}

interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: any;
}

interface FetchProductsFailAction {
  type: typeof FETCH_PRODUCTS_FAIL;
  payload: any;
}

export type ProductsAction =
  | FetchProductsStartAction
  | FetchProductsSuccessAction
  | FetchProductsFailAction;

export const fetchProductStartActionCreator = (): FetchProductsStartAction => ({
  type: FETCH_PRODUCTS_START,
});

export const fetchProductSuccessActionCreator = (
  data
): FetchProductsSuccessAction => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data,
});

export const fetchProductFailActionCreator = (
  errMsg
): FetchProductsFailAction => ({
  type: FETCH_PRODUCTS_FAIL,
  payload: errMsg,
});

export const giveMeDataActionCreator =
  (): ThunkAction<void, StateType, unknown, ProductsAction> =>
  (dispatch, getState) => {};
