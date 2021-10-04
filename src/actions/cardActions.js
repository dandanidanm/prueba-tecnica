import { types } from "../types/type";
import { db } from "../firebase/firebase-config";

export const SaveCardData = (card) => {
  return async (dispatch) => {
    const risottoCard = {
      pedido: card.pedido,
      
    };

    const docRef = await db.collection("card").add(risottoCard);

    dispatch(AddCard(docRef.id, risottoCard));
  };
};

export const AddCard = (id, card) => ({
  type: types.cardAdd,
  payload: {
    id,
    ...card,
  },
});
