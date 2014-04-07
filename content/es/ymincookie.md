---
weight: 220
id: "ymincookie"
title: "Reduce Cookie Size"
yahoo: "http://developer.yahoo.com/performance/rules.html#cookie_size"
tags: ["cookie"]
locales: "en"
notoc: "true"
description: ""
---

HTTP cookies are used for a variety of reasons such as authentication and personalization. Information about cookies is exchanged in the HTTP headers between web servers and browsers. It's important to keep the size of cookies as low as possible to minimize the impact on the user's response time.

For more information check ["When the Cookie Crumbles"](http://yuiblog.com/blog/2007/03/01/performance-research-part-3/) by Tenni Theurer and Patty Chi. The take-home of this research:

-   Eliminate unnecessary cookies
-   Keep cookie sizes as low as possible to minimize the impact on the user response time
-   Be mindful of setting cookies at the appropriate domain level so other sub-domains are not affected
-   Set an Expires date appropriately. An earlier Expires date or none removes the cookie sooner, improving the user response time