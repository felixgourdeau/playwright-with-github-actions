import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'webkit',
      use: { ...devices['iPhone 13'] },
    },
  ],
});