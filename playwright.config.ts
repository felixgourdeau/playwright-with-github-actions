import { defineConfig, devices } from '@playwright/test';

console.log("DESKTOP SAFARI", devices['Desktop Safari'])

console.log("IPHONE 13", devices['iPhone 13'])

export default defineConfig({
  projects: [
    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        //"userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
        //"screen": {
        //  "width": 390,
        //  "height": 844
        //},
        //"viewport": {
        //  "width": 390,
        //  "height": 664
        //},
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
    },
  ],
});