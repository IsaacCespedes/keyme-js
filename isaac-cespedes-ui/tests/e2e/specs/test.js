// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "default e2e tests": browser => {
    browser
      .init()
      .waitForElementVisible("#app")
      .assert.elementPresent(".container")
      .assert.containsText("h1", "Add or Scan Your Free Key")
      .assert.elementCount("h1", 1)
      .end();
  },

  "example e2e test using a custom command": browser => {
    browser
      .openHomepage()
      .assert.elementPresent("#app")
      .end();
  }
};
