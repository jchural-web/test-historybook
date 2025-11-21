import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: {
    name: '@storybook/angular',
    options: {
      enableIvy: true,
    },
  },
  core: {
    disableTelemetry: true,
  },
  webpackFinal: async (config) => {
    return config;
  },
};
export default config;
