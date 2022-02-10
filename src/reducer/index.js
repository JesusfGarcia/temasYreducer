import { actions } from "./actions";
import { initialState } from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.LLENAR_MENTORIA:
      return {
        ...state,
        mentoria: {
          ...state.mentoria,
          [action.name]: action.payload,
        },
      };
    case actions.POST_MENTORIA:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actions.POST_MENTORIA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        mentoria: initialState.mentoria,
      };
    case actions.POST_MENTORIA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { actions, initialState, reducer };
