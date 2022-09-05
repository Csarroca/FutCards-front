import { render, renderHook } from "@testing-library/react";
import { Wrapper } from "./Wrapper";

const customRender = (view: JSX.Element, ...options: any) =>
  render(view, { wrapper: Wrapper, ...options });

const customRenderHook = (hook: () => any, ...options: any) =>
  renderHook(hook, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
export { customRenderHook as renderHook };
