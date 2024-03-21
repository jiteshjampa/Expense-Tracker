export default (state, action) => {
  switch (action.type) {
    case "Delete_Transaction":
      return {
        ...state,
        Transactions: state.Transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "Add_Transaction":
      return {
        ...state,
        Transactions: [action.payload, ...state.Transactions],
      };
    default:
      return state;
  }
};
