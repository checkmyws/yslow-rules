---
weight: 180
id: "ymindom"
title: "Reduce the Number of DOM Elements"
yahoo: "http://developer.yahoo.com/performance/rules.html#min_dom"
tags: ["content"]
locales: "en"
notoc: "true"
description: ""
---

A complex page means more bytes to download and it also means slower DOM access in JavaScript. It makes a difference if you loop through 500 or 5000 DOM elements on the page when you want to add an event handler for example.

A high number of DOM elements can be a symptom that there's something that should be improved with the markup of the page without necessarily removing content. Are you using nested tables for layout purposes? Are you throwing in more `<div>`s only to fix layout issues? Maybe there's a better and more semantically correct way to do your markup.

A great help with layouts are the [YUI CSS utilities](http://developer.yahoo.com/yui/): grids.css can help you with the overall layout, fonts.css and reset.css can help you strip away the browser's defaults formatting. This is a chance to start fresh and think about your markup, for example use `<div>`s only when it makes sense semantically, and not because it renders a new line.

The number of DOM elements is easy to test, just type in Firebug's console: `document.getElementsByTagName('*').length`

And how many DOM elements are too many? Check other similar pages that have good markup. For example the [Yahoo! Home Page](http://www.yahoo.com) is a pretty busy page and still under 700 elements (HTML tags).