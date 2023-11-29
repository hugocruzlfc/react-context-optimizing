import React from "react";
import { CountContext, CountContextValue } from "../context/CountContext";

export function CountConsumer({
  children,
}: {
  children: (context: CountContextValue) => React.ReactNode;
}) {
  return (
    <CountContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error("CountConsumer must be used within a CountProvider");
        }
        return children(context);
      }}
    </CountContext.Consumer>
  );
}

export class CounterThing extends React.Component {
  render() {
    return (
      <CountConsumer>
        {({ state, dispatch }) => (
          <div>
            <div>{state.count}</div>
            <button onClick={() => dispatch({ type: "decrement" })}>
              Decrement
            </button>
            <button onClick={() => dispatch({ type: "increment" })}>
              Increment
            </button>
          </div>
        )}
      </CountConsumer>
    );
  }
}
