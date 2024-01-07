import browser from "webextension-polyfill";

browser.runtime.onConnect.addListener(function (port) {
  console.log("Connection established!");
});

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  debugger
});
