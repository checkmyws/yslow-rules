---
weight: 20
id: "yexpires"
title: "Add Expires or Cache-Control Header"
yahoo: "http://developer.yahoo.com/performance/rules.html#expires"
discuss: "http://developer.yahoo.net/blog/archives/2007/05/high_performanc_2.html"
tags: ["server"]
locales: "en"
notoc: "true"
description: ""
---

There are two aspects to this rule:

- For static components: implement "Never expire" policy by setting far future `Expires` header 
- For dynamic components: use an appropriate `Cache-Control` header to help the browser with conditional requests

 Web page designs are getting richer and richer, which means more scripts, stylesheets, images, and Flash in the page. A first-time visitor to your page may have to make several HTTP requests, but by using the Expires header you make those components cacheable. This avoids unnecessary HTTP requests on subsequent page views. Expires headers are most often used with images, but they should be used on *all* components including scripts, stylesheets, and Flash components.

Browsers (and proxies) use a cache to reduce the number and size of HTTP requests, making web pages load faster. A web server uses the Expires header in the HTTP response to tell the client how long a component can be cached. This is a far future Expires header, telling the browser that this response won't be stale until April 15, 2010.

	Expires: Thu, 15 Apr 2010 20:00:00 GMT

 If your server is Apache, use the ExpiresDefault directive to set an expiration date relative to the current date. This example of the ExpiresDefault directive sets the Expires date 10 years out from the time of the request.

	ExpiresDefault "access plus 10 years"

 Keep in mind, if you use a far future Expires header you have to change the component's filename whenever the component changes. At Yahoo! we often make this step part of the build process: a version number is embedded in the component's filename, for example, yahoo\_2.0.6.js.

Using a far future Expires header affects page views only after a user has already visited your site. It has no effect on the number of HTTP requests when a user visits your site for the first time and the browser's cache is empty. Therefore the impact of this performance improvement depends on how often users hit your pages with a primed cache. (A "primed cache" already contains all of the components in the page.) We [measured this at Yahoo!](http://yuiblog.com/blog/2007/01/04/performance-research-part-2/) and found the number of page views with a primed cache is 75-85%. By using a far future Expires header, you increase the number of components that are cached by the browser and re-used on subsequent page views without sending a single byte over the user's Internet connection.
