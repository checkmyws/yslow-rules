---
weight: 130
id: "yxhr"
title: "Make Ajax Cacheable"
yahoo: "http://developer.yahoo.com/performance/rules.html#cacheajax"
discuss: "http://developer.yahoo.net/blog/archives/2007/09/high_performanc_12.html"
tags: ["content"]
locales: "en"
notoc: "true"
description: ""
---

One of the cited benefits of Ajax is that it provides instantaneous feedback to the user because it requests information asynchronously from the backend web server. However, using Ajax is no guarantee that the user won't be twiddling his thumbs waiting for those asynchronous JavaScript and XML responses to return. In many applications, whether or not the user is kept waiting depends on how Ajax is used. For example, in a web-based email client the user will be kept waiting for the results of an Ajax request to find all the email messages that match their search criteria. It's important to remember that "asynchronous" does not imply "instantaneous".

To improve performance, it's important to optimize these Ajax responses. The most important way to improve the performance of Ajax is to make the responses cacheable, as discussed in [Add an Expires or a Cache-Control Header](#expires). Some of the other rules also apply to Ajax:\

- [Gzip Components](#gzip) 
- [Reduce DNS Lookups](#dns_lookups) 
- [Minify JavaScript](#minify) 
- [Avoid Redirects](#redirects) 
- [Configure ETags](#etags)

Let's look at an example. A Web 2.0 email client might use Ajax to download the user's address book for autocompletion. If the user hasn't modified her address book since the last time she used the email web app, the previous address book response could be read from cache if that Ajax response was made cacheable with a future Expires or Cache-Control header. The browser must be informed when to use a previously cached address book response versus requesting a new one. This could be done by adding a timestamp to the address book Ajax URL indicating the last time the user modified her address book, for example, `&t=1190241612`. If the address book hasn't been modified since the last download, the timestamp will be the same and the address book will be read from the browser's cache eliminating an extra HTTP roundtrip. If the user has modified her address book, the timestamp ensures the new URL doesn't match the cached response, and the browser will request the updated address book entries.

Even though your Ajax responses are created dynamically, and might only be applicable to a single user, they can still be cached. Doing so will make your Web 2.0 apps faster.