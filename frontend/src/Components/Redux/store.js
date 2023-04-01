import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  account: null,
  contract: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ACCOUNT":
      return {
        ...state,
        account: action.payload,
      };
    case "SET_CONTRACT":
      return {
        ...state,
        contract: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
