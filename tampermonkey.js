// ==UserScript==
// @name         Zipwhip Plugin Bootstrapper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://app.zipwhip.com/*
// @grant        none
// ==/UserScript==

// If doing local development, override plugin Javascript URL jsUrl locations here
window.pluginOverrides = [
    {
        // New Text Shortcut Key
        id: "d7bd26ff-69b4-4b58-b228-475f5a00b5fd", // id from app store
        active: true, // set to false to stop overriding, true to override
        //jsUrl: "https://raw.githubusercontent.com/chilipeppr/ZwNewTextShortcutKey/master/plugin.js", // John's version in Github
        jsUrl: "http://localhost:8080/ZwNewTextShortcutKey/plugin.js", // Local dev version
    },
    {
        // ABC Plugin
        id: "10ea0309-a455-450d-8bba-a435bd147c6b", // id from app store
        active: true, // set to false to stop overriding, true to override
        //jsUrl: "https://raw.githubusercontent.com/chilipeppr/zw-plugin-abc/master/pluginAbc.js", // John's version in Github
        //jsUrl: "https://raw.githubusercontent.com/dfreddolino/zw-plugin-abc/master/pluginAbc.js", // David's version in Github
        jsUrl: "http://localhost:8080/zw-plugin-abc/pluginAbc.js", // Local dev version

    },
    {
        // Human Date Time
        id: "dd33675d-24d5-4b8e-93db-0376a47d1834", // id from app store
        active: true, // set to false to stop overriding, true to override
        //jsUrl: "https://raw.githubusercontent.com/chilipeppr/ZwHumanDate/master/plugin.js", // John's version in Github
        jsUrl: "http://localhost:8080/ZwHumanDate/plugin.js", // Local dev version
    },
];

console.log("Plugin - Pre-run");
setTimeout(function() {

    console.log("Plugin - Bootsrapper running...");

    var script = document.createElement('script');

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                console.log("Plugin - Got boot.js downloaded"); // 'This is the returned text.'
                script.text = xhr.responseText;
                document.getElementsByTagName('head')[0].appendChild(script);

            } else {
                console.log('Error: ' + xhr.status); // An error occurred during the request.
            }
        }
    };

    var urlForBoot = 'https://raw.githubusercontent.com/chilipeppr/zw-plugin-bootstrap/master/boot.js';
    // var urlForBoot = 'http://localhost:8080/zw-plugin-bootstrap/boot.js';
    console.log("Plugin - Boot url:", urlForBoot);

    xhr.open('GET', urlForBoot);
    xhr.send(null);

    console.log("Plugin - Bootsrapper ran");
}, 1000);

