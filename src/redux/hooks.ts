import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { LanguageState } from "./language/languageReducer";
import { RecommendProductsState } from "./recommendProducts/recommendProductsReducer";

// TODO：如何传入CombinedState
export const useSelector: TypedUseSelectorHook<
  LanguageState & RecommendProductsState
> = useReduxSelector;
