---
weight: 230
id: "ycookiefree"
title: "Use Cookie-Free Domains for Components"
yahoo: "http://developer.yahoo.com/performance/rules.html#cookie_free"
tags: ["cookie"]
locales: "en"
notoc: "true"
description: ""
---

When the browser makes a request for a static image and sends cookies together with the request, the server doesn't have any use for those cookies. So they only create network traffic for no good reason. You should make sure static components are requested with cookie-free requests. Create a subdomain and host all your static components there.

If your domain is `www.example.org`, you can host your static components on `static.example.org`. However, if you've already set cookies on the top-level domain `example.org` as opposed to `www.example.org`, then all the requests to `static.example.org` will include those cookies. In this case, you can buy a whole new domain, host your static components there, and keep this domain cookie-free. Yahoo! uses `yimg.com`, YouTube uses `ytimg.com`, Amazon uses `images-amazon.com` and so on.

Another benefit of hosting static components on a cookie-free domain is that some proxies might refuse to cache the components that are requested with cookies. On a related note, if you wonder if you should use example.org or www.example.org for your home page, consider the cookie impact. Omitting www leaves you no choice but to write cookies to `*.example.org`, so for performance reasons it's best to use the www subdomain and write the cookies to that subdomain.