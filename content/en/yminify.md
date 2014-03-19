---
weight: 90
id: "yminify"
title: "Minify JavaScript and CSS"
yahoo: "http://developer.yahoo.com/performance/rules.html#minify"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_8.html"
tags: ["javascript","css"]
locales: "en"
notoc: "true"
description: ""
---

Minification is the practice of removing unnecessary characters from code to reduce its size thereby improving load times. When code is minified all comments are removed, as well as unneeded white space characters (space, newline, and tab). In the case of JavaScript, this improves response time performance because the size of the downloaded file is reduced. Two popular tools for minifying JavaScript code are [JSMin](http://crockford.com/javascript/jsmin) and [YUI Compressor](http://developer.yahoo.com/yui/compressor/). The YUI compressor can also minify CSS.

Obfuscation is an alternative optimization that can be applied to source code. It's more complex than minification and thus more likely to generate bugs as a result of the obfuscation step itself. In a survey of ten top U.S. web sites, minification achieved a 21% size reduction versus 25% for obfuscation. Although obfuscation has a higher size reduction, minifying JavaScript is less risky.

In addition to minifying external scripts and styles, inlined `<script>` and `<style>` blocks can and should also be minified. Even if you gzip your scripts and styles, minifying them will still reduce the size by 5% or more. As the use and size of JavaScript and CSS increases, so will the savings gained by minifying your code.