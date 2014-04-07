---
weight: 240
id: "ydom_access"
title: "Minimize DOM Access"
yahoo: "http://developer.yahoo.com/performance/rules.html#dom_access"
tags: ["javascript"]
locales: "en"
notoc: "true"
description: ""
---

Accessing DOM elements with JavaScript is slow so in order to have a more responsive page, you should:

-   Cache references to accessed elements
-   Update nodes "offline" and then add them to the tree
-   Avoid fixing layout with JavaScript

For more information check the YUI theatre's ["High Performance Ajax Applications"](http://yuiblog.com/blog/2007/12/20/video-lecomte/) by Julien Lecomte.