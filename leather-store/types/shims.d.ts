declare module "next" {
  // Minimal shim so the app can compile without the real Next.js types.
  export interface Metadata {
    title?: string;
    description?: string;
    [key: string]: unknown;
  }
}

declare module "react/jsx-runtime" {
  // Basic JSX runtime shim for TypeScript.
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

// Fallback JSX namespace so intrinsic elements like <div> don't error
// in environments where React's JSX types are not being picked up.
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Minimal React namespace so `React.ReactNode` and similar references work.
declare namespace React {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type ReactNode = any;
}
