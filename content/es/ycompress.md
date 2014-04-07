---
weight: 30
id: "ycompress"
title: "Gzip Components"
yahoo: "http://developer.yahoo.com/performance/rules.html#gzip"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_3.html"
tags: ["server"]
locales: "en"
notoc: "true"
description: ""
---

The time it takes to transfer an HTTP request and response across the network can be significantly reduced by decisions made by front-end engineers. It's true that the end-user's bandwidth speed, Internet service provider, proximity to peering exchange points, etc. are beyond the control of the development team. But there are other variables that affect response times. Compression reduces response times by reducing the size of the HTTP response.

Starting with HTTP/1.1, web clients indicate support for compression with the Accept-Encoding header in the HTTP request.

	Accept-Encoding: gzip, deflate

If the web server sees this header in the request, it may compress the response using one of the methods listed by the client. The web server notifies the web client of this via the Content-Encoding header in the response.

	Content-Encoding: gzip

Gzip is the most popular and effective compression method at this time. It was developed by the GNU project and standardized by [RFC 1952](http://www.ietf.org/rfc/rfc1952.txt). The only other compression format you're likely to see is deflate, but it's less effective and less popular.

Gzipping generally reduces the response size by about 70%. Approximately 90% of today's Internet traffic travels through browsers that claim to support gzip. If you use Apache, the module configuring gzip depends on your version: Apache 1.3 uses [mod\_gzip](http://sourceforge.net/projects/mod-gzip/) while Apache 2.x uses [mod\_deflate](http://httpd.apache.org/docs/2.0/mod/mod_deflate.html).

There are known issues with browsers and proxies that may cause a mismatch in what the browser expects and what it receives with regard to compressed content. Fortunately, these edge cases are dwindling as the use of older browsers drops off. The Apache modules help out by adding appropriate Vary response headers automatically.

Servers choose what to gzip based on file type, but are typically too limited in what they decide to compress. Most web sites gzip their HTML documents. It's also worthwhile to gzip your scripts and stylesheets, but many web sites miss this opportunity. In fact, it's worthwhile to compress any text response including XML and JSON. Image and PDF files should not be gzipped because they are already compressed. Trying to gzip them not only wastes CPU but can potentially increase file sizes.

Gzipping as many file types as possible is an easy way to reduce page weight and accelerate the user experience.
