import React, { createContext, useCallback, useContext, useState } from "react";

type SetCount = React.Dispatch<React.SetStateAction<number>> | undefined;

const CountStateContext = createContext(0);
const CountUpdaterContext = createContext<SetCount | undefined>(undefined);

export function CountProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState<number>(0);
  return (
    <CountStateContext.Provider value={count}>
      <CountUpdaterContext.Provider value={setCount}>
        {children}
      </CountUpdaterContext.Provider>
    </CountStateContext.Provider>
  );
}

export function useCountState() {
  const countState = useContext(CountStateContext);
  if (typeof countState === "undefined") {
    throw new Error("useCountState must be used within a CountProvider");
  }
  return countState;
}

export function useCountUpdater() {
  const setCount = useContext(CountUpdaterContext);
  if (typeof setCount === "undefined") {
    throw new Error("useCountUpdater must be used within a CountProvider");
  }
  const increment = useCallback(
    () => setCount((prev: number) => prev + 1),
    [setCount]
  );
  return increment;
}
