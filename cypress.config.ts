import { defineConfig } from "cypress";
import { beforeRunHook, afterRunHook } from "cypress-mochawesome-reporter/lib";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  retries: {
    runMode: 2,
  },
  e2e: {
    baseUrl: "https://www.saucedemo.com",

    setupNodeEvents(on, config) {
      defaultCommandTimeout: 5000;
      supportFile: "cypress/support/index.ts";
      on("before:run", async (details) => {
        console.log("override before:run");
        await beforeRunHook(details);
      });

      on("after:run", async () => {
        console.log("override after:run");
        await afterRunHook();
      });
      // implement node event listeners here
    },
    blockHosts: ["https://www.saucedemo.com/"],
  },
});
