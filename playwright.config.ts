import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chrome',
      //use: { ...devices['iPhone 13'] },
    },
  ],
});