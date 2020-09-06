import {
  createFetchActions,
  usePromiseEffectReducer,
} from "./usePromiseEffectReducer";
import { UserService } from "../services/UserService";

const userService = UserService();

const userActions = createFetchActions("user_data");

function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case userActions.SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };

    case userActions.FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

const initialUserState = {
  loading: true,
  data: {
    address: {},
  },
  error: null,
};

export function useUser() {
  const { loading, data } = usePromiseEffectReducer(
    {
      actions: userActions,
      reducer: userReducer,
      initialState: initialUserState,
    },
    userService.getData(),
    []
  );

  return { loading, data };
}
