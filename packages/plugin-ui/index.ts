import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { PluginUIContext } from './context'
import { Plugin } from './plugin'
import { DefaultPluginUISpec, PluginUISpec } from './spec'

export async function createPluginUI(
  target: HTMLElement,
  spec?: PluginUISpec,
  options?: {
    onBeforeUIRender?: (ctx: PluginUIContext) => Promise<void> | void
  }
) {
  const ctx = new PluginUIContext(spec || DefaultPluginUISpec())
  await ctx.init()
  if (options?.onBeforeUIRender) {
    await options.onBeforeUIRender(ctx)
  }
  ReactDOM.render(React.createElement(Plugin, { plugin: ctx }), target)
  return ctx
}
