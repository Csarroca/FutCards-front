import {
  render,
  renderHook,
  RenderHookOptions,
  RenderOptions,
} from "@testing-library/react";
import { Wrapper } from "./Wrapper";

const customRender = (view: JSX.Element, ...options: RenderOptions[]) =>
  render(view, { wrapper: Wrapper, ...options });

const customRenderHook = (
  hook: () => any,
  ...options: RenderHookOptions<unknown>[]
) => renderHook(hook, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
export { customRenderHook as renderHook };
