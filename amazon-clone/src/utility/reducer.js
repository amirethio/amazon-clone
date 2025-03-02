import { type } from "./actiontype";
export const initialstate = {
  basket: [],
<<<<<<< HEAD
  user:null
=======
>>>>>>> 9caef8d59edbde00cdf65585685ddd1e96b05192
};

export const reducer = (state, action) => {
  switch (action.type) {
    case type.ADD_TO_BASKET: {
      // check if the item exists
      const existingItem = state.basket.find(
        (item) => item.id === action?.item?.id
      );
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updateBasket = state.basket.map((item) => {
          return item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
        return {
          ...state,
          basket: updateBasket,
        };
      }
    }
    case type.REMOVE_FROM_BASKET:
<<<<<<< HEAD
      {
        const index = state.basket.findIndex((item) => item.id === action.id);
        let newBasket = [...state.basket];
        if (index >= 0) {
          if (newBasket[index].amount > 1) {
            newBasket[index] = {
              ...newBasket[index],
              amount: newBasket[index].amount - 1,
            };
          } else {
            newBasket.splice(index, 1);
          }
        }
        return { ...state, basket: newBasket };
      }
      case type.SET_USER :
        return{
        ...state,
        user:action.user

      }
=======
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice(index, 1);
        }
      }
      return { ...state, basket: newBasket };
>>>>>>> 9caef8d59edbde00cdf65585685ddd1e96b05192
    default:
      return state;
  }
};

<<<<<<< HEAD

=======
// const [state, dispatch] = useReducer(reducer, initialstate )
>>>>>>> 9caef8d59edbde00cdf65585685ddd1e96b05192
