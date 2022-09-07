import mockedUser from "../../test-utils/mocks/mockUser";
import usersReducer, { loginUsers, logoutUsers } from "./UserSlice";

describe("Given a usersReducer function", () => {
  const userInitial = { id: "", userName: "", token: "" };
  describe("When it's invoked with a wrong state or action", () => {
    test("Then it should return the previous state", () => {
      const wrongState = undefined;
      const unkownAction = { type: "" };

      const usersReducersReturn = usersReducer(wrongState, unkownAction);

      expect(usersReducersReturn).toStrictEqual(userInitial);
    });
  });
  describe("When it receives a valid state or action", () => {
    test("Then it should return the new state", () => {
      const reducerReturn = usersReducer(userInitial, loginUsers(mockedUser));

      expect(reducerReturn).toStrictEqual(mockedUser);
    });

    test("Then it should return the new state changed on logout", () => {
      const expectedStateUsers = {
        id: "",
        userName: "",
        token: "",
      };
      const reducerReturn = usersReducer(mockedUser, logoutUsers());

      expect(reducerReturn).toStrictEqual(expectedStateUsers);
    });
  });
});
