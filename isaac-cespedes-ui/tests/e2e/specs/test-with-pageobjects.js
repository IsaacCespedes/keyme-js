////////////////////////////////////////////////////////////////
// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide
//
// For more information on working with page objects see:
//   https://nightwatchjs.org/guide/working-with-page-objects/
////////////////////////////////////////////////////////////////

module.exports = {
  beforeEach: browser => browser.init(),

  "e2e tests using page objects": browser => {
    const homepage = browser.page.homepage();
    homepage.waitForElementVisible("@appContainer");

    const app = homepage.section.app;
    app.assert.elementCount("@header", 1);
    app.expect.section("@container").to.be.visible;
    app.expect.section("@header").text.to.match(/^Add or Scan Your Free Key$/);

    browser.end();
  },

  'verify if string "FREE DELIVERY" is in the second row': browser => {
    const homepage = browser.page.homepage();
    const container = homepage.section.app.section.container;

    container.expect.element("@freeDelivery").text.to.contain("FREE DELIVERY");
  }
};
