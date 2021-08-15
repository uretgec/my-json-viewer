"use strict";

// Manifest json file to object data
let manifestData = chrome.runtime.getManifest();

// Fired when the extension is first installed, when the extension is updated to a new version, and when the browser is updated to a new version.
chrome.runtime.onInstalled.addListener(
    function() {
        console.info('%c' + manifestData.name + ' Extension: %cWelcome to my world!', 'color: orange;', 'color: default;');
    }
);