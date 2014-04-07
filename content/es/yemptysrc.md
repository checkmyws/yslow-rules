---
weight: 340
id: "yemptysrc"
title: "Avoid Empty Image src"
yahoo: "http://developer.yahoo.com/performance/rules.html#emptysrc"
tags: ["server"]
locales: "es"
notoc: "true"
description: ""
---

**To be translate. You can help. Please fork and edit…**

Image with empty string **src** attribute occurs more than one will expect. It appears in two form:

1.  straight HTML

~~~
<img src="">
~~~

2.  JavaScript

~~~
var img = new Image();
img.src = "";
~~~

Both forms cause the same effect: browser makes another request to your server.

-   **Internet Explorer** makes a request to the directory in which the page is located.
-   **Safari and Chrome** make a request to the actual page itself.
-   **Firefox** 3 and earlier versions behave the same as Safari and Chrome, but version 3.5 addressed this issue [[bug 444931]](https://bugzilla.mozilla.org/show_bug.cgi?id=444931) and no longer sends a request.
-   **Opera** does not do anything when an empty image src is encountered.

**Why is this behavior bad?**

1.  Cripple your servers by sending a large amount of unexpected traffic, especially for pages that get millions of page views per day.
2.  Waste server computing cycles generating a page that will never be viewed.
3.  Possibly corrupt user data. If you are tracking state in the request, either by cookies or in another way, you have the possibility of destroying data. Even though the image request does not return an image, all of the headers are read and accepted by the browser, including all cookies. While the rest of the response is thrown away, the damage may already be done.

The root cause of this behavior is the way that URI resolution is performed in browsers. This behavior is defined in RFC 3986 - Uniform Resource Identifiers. When an empty string is encountered as a URI, it is considered a relative URI and is resolved according to the algorithm defined in section 5.2. This specific example, an empty string, is listed in section 5.4. Firefox, Safari, and Chrome are all resolving an empty string correctly per the specification, while Internet Explorer is resolving it incorrectly, apparently in line with an earlier version of the specification, RFC 2396 - Uniform Resource Identifiers (this was obsoleted by RFC 3986). So technically, the browsers are doing what they are supposed to do to resolve relative URIs. The problem is that in this context, the empty string is clearly unintentional.

HTML5 adds to the description of the tag's src attribute to instruct browsers not to make an additional request in section 4.8.2:

> The src attribute must be present, and must contain a valid URL referencing a non-interactive, optionally animated, image resource that is neither paged nor scripted. If the base URI of the element is the same as the document's address, then the src attribute's value must not be the empty string.

Hopefully, browsers will not have this problem in the future. Unfortunately, there is no such clause for `<script src="">` and `<link href="">`. Maybe there is still time to make that adjustment to ensure browsers don't accidentally implement this behavior.

This rule was inspired by Yahoo!'s JavaScript guru Nicolas C. Zakas. For more information check out his article "[Empty image src can destroy your site](http://www.nczonline.net/blog/2009/11/30/empty-image-src-can-destroy-your-site/)".
