import mockedCard from "../../test-utils/mocks/mockCard";
import cardsReducer, {
  deleteCardActionCreator,
  loadAllCardsActionCreator,
} from "./cardsSlice";
import { Card } from "./models/card";

describe("Given a loadAllCardsActionCreator function", () => {
  describe("When called with an array of cards as a payload", () => {
    test("Then it should return an action with a type 'cards/loadAllCards' and an array of cards as payload", () => {
      const actionType = "cards/loadAllCards";
      const expectedAction = {
        type: actionType,
        payload: [mockedCard],
      };

      const action = loadAllCardsActionCreator(expectedAction.payload);

      expect(action).toStrictEqual(expectedAction);
    });
  });
});

describe("Given a deleteCardActionCreator function", () => {
  describe("When called with a card id as a payload", () => {
    test("Then it should return an action with a type 'cards/deleteCard' and the id as payload", () => {
      const actionType = "cards/deleteCard";
      const expectedAction = {
        type: actionType,
        payload: mockedCard.id,
      };

      const action = deleteCardActionCreator(expectedAction.payload);

      expect(action).toStrictEqual(expectedAction);
    });
  });
});

describe("Given a cardsReducer function", () => {
  describe("When called with a loadAll action", () => {
    test("Then it should replace the previous users with the passed ones", () => {
      const initialState = [{ ...mockedCard, name: "test" }] as Card[];

      const expectedResult = [mockedCard];
      const action = loadAllCardsActionCreator([mockedCard]);

      const result = cardsReducer(initialState, action);

      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("When called with a deleteCard action", () => {
    test("Then it should remove the card", () => {
      const initialState = [mockedCard] as Card[];

      const expectedResult = [] as Card[];
      const action = deleteCardActionCreator(mockedCard.id);

      const result = cardsReducer(initialState, action);

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
