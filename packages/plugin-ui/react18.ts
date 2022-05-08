// import { createElement } from 'react';
// import { createRoot } from 'react-dom/client';
// import { Plugin } from './plugin';
// import { PluginUIContext } from './context';
// import { DefaultPluginUISpec, PluginUISpec } from './spec';

// export async function createPluginUI(
//   target: HTMLElement,
//   spec?: PluginUISpec,
//   options?: {
//     onBeforeUIRender?: (ctx: PluginUIContext) => Promise<void> | void;
//   }
// ) {
//   const ctx = new PluginUIContext(spec || DefaultPluginUISpec());
//   await ctx.init();
//   if (options?.onBeforeUIRender) {
//     await options.onBeforeUIRender(ctx);
//   }
//   createRoot(target).render(createElement(Plugin, { plugin: ctx }));
//   return ctx;
// }
export {};
