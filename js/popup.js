"use strict";
class PopupPage {
    async initialize() {
        const currTab = (await chrome.tabs.query({
            active: true
        }))[0];
        if (!currTab?.id) {
            return;
        }
        chrome.scripting.executeScript({
            target: {
                tabId: currTab.id,
            },
            files: ["/js/inject.js"],
        });
    }
}
new PopupPage().initialize();
