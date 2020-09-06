import { useReducer, useLayoutEffect } from "react";

export function createFetchActions(namespace) {
  return {
    START: `fetch_${namespace}_started`,
    SUCCESS: `fetch_${namespace}_succeed`,
    FAIL: `fetch_${namespace}_failed`,
  };
}

export function usePromiseEffectReducer(
  { actions, reducer, initialState },
  promise,
  deps = []
) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useLayoutEffect(() => {
    promise
      .then((res) => {
        dispatch({ type: actions.SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: actions.FAIL, payload: err, isError: true });
      });
    // eslint-disable-next-line
  }, deps);

  return state;
}
