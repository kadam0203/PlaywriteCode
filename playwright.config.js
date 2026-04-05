// @ts-check
import { chromium, defineConfig, devices, firefox, webkit } from '@playwright/test';
import { trace } from 'node:console';
import Module from 'node:module';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
  
  timeout: 40*1000,
  expect:{
    timeout: 50000,
  },
  reporter:'html',
  use: {
     browserName: 'chromium',
     headless: false,
     screenshot : 'on',
     trace : 'retain-on-failure'
     
  }




});
module.exports=config 


