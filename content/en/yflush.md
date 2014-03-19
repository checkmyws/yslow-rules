---
weight: 145
id: "yflush"
title: "Flush the Buffer Early"
yahoo: "http://developer.yahoo.com/performance/rules.html#flush"
tags: ["server"]
locales: "en"
notoc: "true"
description: ""
---

When users request a page, it can take anywhere from 200 to 500ms for the backend server to stitch together the HTML page. During this time, the browser is idle as it waits for the data to arrive. In PHP you have the function [flush()](http://php.net/flush). It allows you to send your partially ready HTML response to the browser so that the browser can start fetching components while your backend is busy with the rest of the HTML page. The benefit is mainly seen on busy backends or light frontends.

A good place to consider flushing is right after the HEAD because the HTML for the head is usually easier to produce and it allows you to include any CSS and JavaScript files for the browser to start fetching in parallel while the backend is still processing.

Example:

~~~
    ... <!-- css, js -->
    </head>
    <?php flush(); ?>
    <body>
      ... <!-- content -->
~~~

[Yahoo! search](http://search.yahoo.com) pioneered research and real user testing to prove the benefits of using this technique.