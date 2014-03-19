---
weight: 70
id: "yexternal"
title: "Make JavaScript and CSS External"
yahoo: "http://developer.yahoo.com/performance/rules.html#external"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/rule_8_make_jav.html"
tags: ["javascript","css"]
locales: "en"
notoc: "true"
description: ""
---


Many of these performance rules deal with how external components are managed. However, before these considerations arise you should ask a more basic question: Should JavaScript and CSS be contained in external files, or inlined in the page itself?

Using external files in the real world generally produces faster pages because the JavaScript and CSS files are cached by the browser. JavaScript and CSS that are inlined in HTML documents get downloaded every time the HTML document is requested. This reduces the number of HTTP requests that are needed, but increases the size of the HTML document. On the other hand, if the JavaScript and CSS are in external files cached by the browser, the size of the HTML document is reduced without increasing the number of HTTP requests.

The key factor, then, is the frequency with which external JavaScript and CSS components are cached relative to the number of HTML documents requested. This factor, although difficult to quantify, can be gauged using various metrics. If users on your site have multiple page views per session and many of your pages re-use the same scripts and stylesheets, there is a greater potential benefit from cached external files.

Many web sites fall in the middle of these metrics. For these sites, the best solution generally is to deploy the JavaScript and CSS as external files. The only exception where inlining is preferable is with home pages, such as [Yahoo!'s front page](http://www.yahoo.com) and [My Yahoo!](http://my.yahoo.com). Home pages that have few (perhaps only one) page view per session may find that inlining JavaScript and CSS results in faster end-user response times.

For front pages that are typically the first of many page views, there are techniques that leverage the reduction of HTTP requests that inlining provides, as well as the caching benefits achieved through using external files. One such technique is to inline JavaScript and CSS in the front page, but dynamically download the external files after the page has finished loading. Subsequent pages would reference the external files that should already be in the browser's cache.