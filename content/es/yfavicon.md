---
weight: 310
id: "yfavicon"
title: "Make favicon.ico Small and Cacheable"
yahoo: "http://developer.yahoo.com/performance/rules.html#favicon"
tags: ["images"]
locales: "en"
notoc: "true"
description: ""
---

The favicon.ico is an image that stays in the root of your server. It's a necessary evil because even if you don't care about it the browser will still request it, so it's better not to respond with a `404 Not Found`. Also since it's on the same server, cookies are sent every time it's requested. This image also interferes with the download sequence, for example in IE when you request extra components in the onload, the favicon will be downloaded before these extra components.

So to mitigate the drawbacks of having a favicon.ico make sure:

-   It's small, preferably under 1K.
-   Set Expires header with what you feel comfortable (since you cannot rename it if you decide to change it). You can probably safely set the Expires header a few months in the future. You can check the last modified date of your current favicon.ico to make an informed decision.

[Imagemagick](http://www.imagemagick.org) can help you create small favicons