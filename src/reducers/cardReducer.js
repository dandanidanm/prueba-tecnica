import { types } from "../types/type";

const initialState = {
  card: {},
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.cardAdd:
      return {
        ...state,
        card: { ...action.payload },
      };

    default:
      return state;
  }
};
