const mockUseDispatch = jest.fn();

jest.mock("../../app/store/hooks", () => ({
  ...jest.requireActual("../../app/store/hooks"),
  useAppDispatch: () => mockUseDispatch,
}));

export default mockUseDispatch;
