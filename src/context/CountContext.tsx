import React, { createContext, useReducer, useContext } from "react";

type Action = { type: "increment" } | { type: "decrement" };
type Dispatch = (action: Action) => void;
type State = { count: number };
type CountProviderProps = { children: React.ReactNode };

export interface CountContextValue {
  state: State;
  dispatch: Dispatch;
}

const CountContext = createContext<CountContextValue | undefined>(undefined);

function countReducer(state: State, action: Action) {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    default: {
      return state; // Return the current state for unhandled action types
    }
  }
}

function useCount() {
  const context = useContext(CountContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

function CountProvider({ children }: CountProviderProps) {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}

export { CountProvider, useCount, CountContext };

// for async actions

// user context
// async function updateUser(dispatch, user, updates) {
//   dispatch({ type: "start update", updates });
//   try {
//     const updatedUser = await userClient.updateUser(user, updates);
//     dispatch({ type: "finish update", updatedUser });
//   } catch (error) {
//     dispatch({ type: "fail update", error });
//   }
// }

// export { UserProvider, useUser, updateUser };

// user profile
// import { useUser, updateUser } from "./user-context";

// function UserSettings() {
//   const [{ user, status, error }, userDispatch] = useUser();

//   function handleSubmit(event) {
//     event.preventDefault();
//     updateUser(userDispatch, user, formState);
//   }

//   // more code...
// }
