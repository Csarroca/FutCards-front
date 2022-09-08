import { render, RenderOptions } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";

const wrappedRender = (view: JSX.Element, ...options: RenderOptions[]) =>
  render(view, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";

export { wrappedRender };
