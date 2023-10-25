import type { Components, JSX } from "../dist/types/components";

interface FIcons extends Components.FIcons, HTMLElement {}
export const FIcons: {
  prototype: FIcons;
  new (): FIcons;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
