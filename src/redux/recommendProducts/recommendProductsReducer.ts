import {
  FETCH_RECOMMEND_PRODUCTS_FAIL,
  FETCH_RECOMMEND_PRODUCTS_START,
  FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  RecommendProductAction,
} from "./recommendProductsActions";

export interface RecommendProductsState {
  productList: any[];
  isLoad: boolean;
  errorMsg: string | null;
}

const defaultState: RecommendProductsState = {
  isLoad: true,
  errorMsg: null,
  productList: [],
};

export default (state = defaultState, action: RecommendProductAction) => {
  switch (action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START:
      return {
        ...state,
        isLoad: true,
      };
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoad: false,
        productList: action.payload,
      };
    case FETCH_RECOMMEND_PRODUCTS_FAIL:
      return {
        ...state,
        isLoad: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};
