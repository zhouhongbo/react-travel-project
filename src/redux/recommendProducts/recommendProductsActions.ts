import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store'

export const FETCH_RECOMMEND_PRODUCTS_START = 'fetch_recommend_products_start'
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
  'fetch_recommend_products_success'
export const FETCH_RECOMMEND_PRODUCTS_FAIL = 'fetch_recommend_products_fail'

interface FetchRecommendProductStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START
}

interface FetchRecommendProductSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS
  payload: any
}

interface FetchRecommendProductFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL
  payload: any
}

export type RecommendProductAction =
  | FetchRecommendProductStartAction
  | FetchRecommendProductSuccessAction
  | FetchRecommendProductFailAction

export const fetchRecommendProductStartActionCreator =
  (): FetchRecommendProductStartAction => ({
    type: FETCH_RECOMMEND_PRODUCTS_START,
  })

export const fetchRecommendProductSuccessActionCreator = (
  data
): FetchRecommendProductSuccessAction => ({
  type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  payload: data,
})

export const fetchRecommendProductFailActionCreator = (
  errMsg
): FetchRecommendProductFailAction => ({
  type: FETCH_RECOMMEND_PRODUCTS_FAIL,
  payload: errMsg,
})

export const giveMeDataActionCreator =
  (): ThunkAction<void, RootState, unknown, RecommendProductAction> =>
  (dispatch, getState) => {}
