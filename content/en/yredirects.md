---
weight: 100
id: "yredirects"
title: "Avoid Redirects"
yahoo: "http://developer.yahoo.com/performance/rules.html#redirects"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_9.html"
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

The browser automatically takes the user to the URL specified in the `Location` field. All the information necessary for a redirect is in the headers. The body of the response is typically empty. Despite their names, neither a 301 nor a 302 response is cached in practice unless additional headers, such as `Expires` or `Cache-Control`, indicate it should be. The meta refresh tag and JavaScript are other ways to direct users to a different URL, but if you must do a redirect, the preferred technique is to use the standard 3xx HTTP status codes, primarily to ensure the back button works correctly.

The main thing to remember is that redirects slow down the user experience. Inserting a redirect between the user and the HTML document delays everything in the page since nothing in the page can be rendered and no components can start being downloaded until the HTML document has arrived.

One of the most wasteful redirects happens frequently and web developers are generally not aware of it. It occurs when a trailing slash (/) is missing from a URL that should otherwise have one. For example, going to [http://astrology.yahoo.com/astrology](http://astrology.yahoo.com/astrology) results in a 301 response containing a redirect to [http://astrology.yahoo.com/astrology/](http://astrology.yahoo.com/astrology/) (notice the added trailing slash). This is fixed in Apache by using `Alias` or `mod_rewrite`, or the `DirectorySlash` directive if you're using Apache handlers.

Connecting an old web site to a new one is another common use for redirects. Others include connecting different parts of a website and directing the user based on certain conditions (type of browser, type of user account, etc.). Using a redirect to connect two web sites is simple and requires little additional coding. Although using redirects in these situations reduces the complexity for developers, it degrades the user experience. Alternatives for this use of redirects include using `Alias` and `mod_rewrite` if the two code paths are hosted on the same server. If a domain name change is the cause of using redirects, an alternative is to create a CNAME (a DNS record that creates an alias pointing from one domain name to another) in combination with `Alias` or `mod_rewrite`.