---
weight: 170
id: "ypreload"
title: "Preload Components"
yahoo: "http://developer.yahoo.com/performance/rules.html#preload"
tags: ["content"]
locales: "en"
notoc: "true"
description: ""
---

Preload may look like the opposite of post-load, but it actually has a different goal. By preloading components you can take advantage of the time the browser is idle and request components (like images, styles and scripts) you'll need in the future. This way when the user visits the next page, you could have most of the components already in the cache and your page will load much faster for the user.

There are actually several types of preloading:

-  *Unconditional* preload - as soon as onload fires, you go ahead and fetch some extra components. Check google.com for an example of how a sprite image is requested onload. This sprite image is not needed on the google.com homepage, but it is needed on the consecutive search result page.
- *Conditional* preload - based on a user action you make an educated guess where the user is headed next and preload accordingly. On [search.yahoo.com](http://search.yahoo.com) you can see how some extra components are requested after you start typing in the input box.
- *Anticipated* preload - preload in advance before launching a redesign. It often happens after a redesign that you hear: "The new site is cool, but it's slower than before". Part of the problem could be that the users were visiting your old site with a full cache, but the new one is always an empty cache experience. You can mitigate this side effect by preloading some components before you even launched the redesign. Your old site can use the time the browser is idle and request images and scripts that will be used by the new site