import { actionType } from "./actionType";

export const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  term: true,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.IMP:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionType.TOGGLE:
      return {
        ...state,
        term: !state.term,
      };
    default:
      return state;
  }
};
