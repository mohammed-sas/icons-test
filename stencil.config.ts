import { Config } from '@stencil/core';
import { inlineSvg } from 'stencil-inline-svg';
export const config: Config = {
  namespace: 'facicons-ui',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: false,
    },
  ],
  plugins: [inlineSvg()],
  extras: { experimentalImportInjection: true },
};
