import { CHANGE_LANGUAGE, ADD_LANGUAGE } from "../actionTypes/language";

interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  payload: "zh" | "en";
}

interface AddLanguageAction {
  type: typeof ADD_LANGUAGE;
  payload: { name: string; code: string };
}

export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction;

export const changeLanguageActionCreator = (
  languageCode: "zh" | "en"
): ChangeLanguageAction => ({
  type: CHANGE_LANGUAGE,
  payload: languageCode,
});

export const addLanguageActionCreator = (
  name: string,
  code: string
): AddLanguageAction => ({
  type: ADD_LANGUAGE,
  payload: {
    name,
    code,
  },
});
