import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.ts'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/angular',
    options: {
      enableNgcc: true,
    },
  },
  core: {
    disableTelemetry: true,
  },
};

export default config;
