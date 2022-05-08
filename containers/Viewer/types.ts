import { PluginUIContext } from '~/packages/plugin-ui/context';
import { Plugin } from '~/packages/plugin-ui/plugin';
import { CElement } from 'react';

export type ViewerElement = CElement<
  {
    plugin: PluginUIContext;
    children?: any;
  },
  Plugin
>;
