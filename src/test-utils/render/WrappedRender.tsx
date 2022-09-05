import { render } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";

const wrappedRender = (view: JSX.Element, ...options: any) =>
  render(view, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";

export { wrappedRender };
