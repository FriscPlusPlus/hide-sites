import browser from "webextension-polyfill";

browser.runtime.onConnect.addListener(function (port) {
  console.log("Connection established!");
});
