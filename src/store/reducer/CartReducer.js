export const actions = {
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
};

export const defaults = {
  items: [],
  totalAmount: 0,
};

export function cartReducer(state, action) {
  switch (action.type) {
    case actions.ADD_ITEM: {
      const totalAmount =
        state.totalAmount + action.data.item.price * action.data.item.amount;

      const existIndex = state.items.findIndex((item) => {
        return item.id === action.data.item.id;
      });

      const existItem = state.items[existIndex];
      let items = [];

      if (existItem) {
        const item = {
          ...existItem,
          amount: existItem.amount + action.data.item.amount,
        };
        items = [...state.items];
        items[existIndex] = item;
      } else {
        items = state.items.concat(action.data.item);
      }

      return {
        items: items,
        totalAmount: totalAmount,
      };
    }
    case actions.REMOVE_ITEM: {
      const existIndex = state.items.findIndex((item) => {
        return item.id === action.data.id;
      });

      const existItem = state.items[existIndex];
      const totalAmount = state.totalAmount - existItem.price;
      let items = [];

      if(existItem.amount === 1) {
        items = state.items.filter((item) => {
          return item.id !== action.data.id;
        })
      }
      else {
        const item = { ...existItem, amount: existItem.amount - 1};
        items[existIndex] = item;
      }

      return {
        items: items,
        totalAmount: totalAmount,
      };
    }
    default: {
      return state;
    }
  }
}
