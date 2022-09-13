import userEvent from "@testing-library/user-event";
import { Card } from "../../features/cards/models/card";
import mockedCard from "../../test-utils/mocks/mockCard";
import { screen, wrappedRender } from "../../test-utils/render/WrappedRender";
import DetailedCard from "./DetailedCard";

const mockUseApi = {
  deleteCard: jest.fn(),
  getCardById: jest.fn(),
};

let mockCards: Card[] = [mockedCard];
const mockNavigate = jest.fn();

let mockParam = {
  id: "23423fksdf22faadc",
};

let mockUseAppSelector = {
  id: "aqqee12kk34d",
};
jest.mock("../../app/store/hooks", () => ({
  ...jest.requireActual("../../app/store/hooks"),
  useAppSelector: () => mockUseAppSelector,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => mockParam,
  useNavigate: () => mockNavigate,
}));

jest.mock("../../hooks/cards/useAPI", () => () => mockUseApi);

describe("Given a detailedCard component", () => {
  beforeEach(() => jest.clearAllMocks());
  describe("When it is instantiated with a card as props", () => {
    test("The it should show a heading with the name and the position of the card", () => {
      wrappedRender(<DetailedCard card={mockedCard} />);
      const heading = screen.getByRole("list", {});

      expect(heading).toBeInTheDocument();
    });

    test("If the user click on the delete button it should call the  delete  function with the id of the card", async () => {
      wrappedRender(<DetailedCard card={mockedCard} />);
      const route = "/cards";
      const deleteButton = screen.getByText("DELETE");

      await userEvent.click(deleteButton);

      expect(mockUseApi.deleteCard).toBeCalledWith(mockParam.id);
      expect(mockNavigate).toBeCalledWith(route);
    });

    xtest("If the user click on the modify button it should call the navigate with /modify/ and the id of the review", async () => {
      wrappedRender(<DetailedCard card={mockedCard} />);
      const route = `cards/update/${mockCards[0].id}`;
      const modifyButton = screen.getByText("EDIT");

      await userEvent.click(modifyButton);

      expect(mockNavigate).toBeCalledWith(route);
    });

    test("If user's id is different as review's owner delete button shouldn't be in the document", async () => {
      wrappedRender(<DetailedCard card={mockedCard} />);

      const editButton = screen.queryByText("DELETE");

      expect(editButton).toBeInTheDocument();
    });

    test("If user's id is different as review's owner edit button shouldn't be in the document", async () => {
      wrappedRender(<DetailedCard card={mockedCard} />);

      const editButton = screen.queryByText("EDIT");

      expect(editButton).toBeInTheDocument();
    });

    test("If user's id is different as review's owner edit button shouldn't be in tewfgerfghe document", async () => {
      mockUseAppSelector = {
        id: "dfdggfdgfdgdfg",
      };

      wrappedRender(<DetailedCard card={mockedCard} />);

      const editButton = screen.queryByText("EDIT");

      expect(editButton).not.toBeInTheDocument();
    });
  });
});
