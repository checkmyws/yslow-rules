---
weight: 50
id: "yjsbottom"
title: "Put Scripts at Bottom"
yahoo: "http://developer.yahoo.com/performance/rules.html#js_bottom"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_5.html"
tags: ["javascript"]
locales: "en"
notoc: "true"
description: ""
---

The problem caused by scripts is that they block parallel downloads. The [HTTP/1.1 specification](http://www.w3.org/Protocols/rfc2616/rfc2616-sec8.html#sec8.1.4) suggests that browsers download no more than two components in parallel per hostname. If you serve your images from multiple hostnames, you can get more than two downloads to occur in parallel. While a script is downloading, however, the browser won't start any other downloads, even on different hostnames.

In some situations it's not easy to move scripts to the bottom. If, for example, the script uses `document.write` to insert part of the page's content, it can't be moved lower in the page. There might also be scoping issues. In many cases, there are ways to workaround these situations.

An alternative suggestion that often comes up is to use deferred scripts. The `DEFER` attribute indicates that the script does not contain document.write, and is a clue to browsers that they can continue rendering. Unfortunately, Firefox doesn't support the `DEFER` attribute. In Internet Explorer, the script may be deferred, but not as much as desired. If a script can be deferred, it can also be moved to the bottom of the page. That will make your web pages load faster.