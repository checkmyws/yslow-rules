---
weight: 160
id: "ypostload"
title: "Postload Components"
yahoo: "http://developer.yahoo.com/performance/rules.html#postload"
tags: ["content"]
locales: "en"
notoc: "true"
description: ""
---

Redirects are accomplished using the 301 and 302 status codes. Here's an example of the HTTP headers in a 301 response:

~~~
HTTP/1.1 301 Moved Permanently
Location: http://example.com/newuri
Content-Type: text/html
~~~

You can take a closer look at your page and ask yourself: "What's absolutely required in order to render the page initially?". The rest of the content and components can wait.

JavaScript is an ideal candidate for splitting before and after the onload event. For example if you have JavaScript code and libraries that do drag and drop and animations, those can wait, because dragging elements on the page comes after the initial rendering. Other places to look for candidates for post-loading include hidden content (content that appears after a user action) and images below the fold.

Tools to help you out in your effort: [YUI Image Loader](http://developer.yahoo.com/yui/imageloader/) allows you to delay images below the fold and the [YUI Get utility](http://developer.yahoo.com/yui/get/) is an easy way to include JS and CSS on the fly. For an example in the wild take a look at [Yahoo! Home Page](http://www.yahoo.com) with Firebug's Net Panel turned on.

It's good when the performance goals are inline with other web development best practices. In this case, the idea of progressive enhancement tells us that JavaScript, when supported, can improve the user experience but you have to make sure the page works even without JavaScript. So after you've made sure the page works fine, you can enhance it with some post-loaded scripts that give you more bells and whistles such as drag and drop and animations.