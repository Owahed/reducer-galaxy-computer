import { productActionType } from "./actionType";

export const initialState = {
  loading: false,
  products: [],
  error: false,
  card: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case productActionType.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case productActionType.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case productActionType.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case productActionType.ADD_TO_CARD:
      return {
        ...state,
        card: [...state.card, action.payload],
      };
    default: {
      return state;
    }
  }
};
