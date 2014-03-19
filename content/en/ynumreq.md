---
weight: 5
id: "ynumreq"
title: "Make Fewer HTTP requests"
yahoo: "http://developer.yahoo.com/performance/rules.html#num_http"
discuss: "http://developer.yahoo.net/blog/archives/2007/04/rule_1_make_few.html"
tags: ["content"]
locales: "en"
notoc: "true"
description: ""
---

80% of the end-user response time is spent on the front-end. Most of this time is tied up in downloading all the components in the page: images, stylesheets, scripts, Flash, etc. Reducing the number of components in turn reduces the number of HTTP requests required to render the page. This is the key to faster pages.

One way to reduce the number of components in the page is to simplify the page's design. But is there a way to build pages with richer content while also achieving fast response times? Here are some techniques for reducing the number of HTTP requests, while still supporting rich page designs.

**Combined files** are a way to reduce the number of HTTP requests by combining all scripts into a single script, and similarly combining all CSS into a single stylesheet. Combining files is more challenging when the scripts and stylesheets vary from page to page, but making this part of your release process improves response times.

[**CSS Sprites**](http://alistapart.com/articles/sprites) are the preferred method for reducing the number of image requests. Combine your background images into a single image and use the CSS `background-image` and `background-position` properties to display the desired image segment.

[**Image maps**](http://www.w3.org/TR/html401/struct/objects.html#h-13.6) combine multiple images into a single image. The overall size is about the same, but reducing the number of HTTP requests speeds up the page. Image maps only work if the images are contiguous in the page, such as a navigation bar. Defining the coordinates of image maps can be tedious and error prone. Using image maps for navigation is not accessible too, so it's not recommended.

**Inline images** use the [`data:` URL scheme](http://tools.ietf.org/html/rfc2397) to embed the image data in the actual page. This can increase the size of your HTML document. Combining inline images into your (cached) stylesheets is a way to reduce HTTP requests and avoid increasing the size of your pages. Inline images are not yet supported across all major browsers.

Reducing the number of HTTP requests in your page is the place to start. This is the most important guideline for improving performance for first time visitors. As described in Tenni Theurer's blog post [Browser Cache Usage - Exposed!](http://yuiblog.com/blog/2007/01/04/performance-research-part-2/), 40-60% of daily visitors to your site come in with an empty cache. Making your page fast for these first time visitors is key to a better user experience.
