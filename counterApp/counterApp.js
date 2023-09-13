const { createStore } = require("redux");
const initialState = {
  count: 0,
};

{
  type: "INCREMENT";
}

const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};

{
  type: "DECREMENT";
}
const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};
{
  type: "RESET";
}
const resetAction = () => {
  return {
    type: "RESET",
  };
};
{
  type: "INCREMENT_BY_AMT ";
}

const incrementByAmtAction = (anyAmount) => {
  return {
    type: "INCREMENT_BY_AMT",
    payload: anyAmount,
  };
};

const countReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "RESET") {
    return {
      count: 0,
    };
  } else if (action.type === "INCREMENT_BY_AMT") {
    return {
      count: state.count + action.payload,
    };
  }
};
const store = createStore(countReducer);

store.subscribe(() => {
  const data = store.getState();
  console.log("🚀 ~ file: counterApp.js:73 ~ store.subscribe ~ data:", data);
});

store.dispatch(incrementAction());
store.dispatch(incrementAction());

store.dispatch(decrementAction());
store.dispatch(decrementAction());

store.dispatch(resetAction());
store.dispatch(resetAction());

store.dispatch(incrementByAmtAction(10));
store.dispatch(incrementByAmtAction(20));
