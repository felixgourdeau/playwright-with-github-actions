import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        viewport: {
          "width": 390,
          "height": 664
        },
        screen: {
          "width": 390,
          "height": 844
        },
      },
    },
  ],
});