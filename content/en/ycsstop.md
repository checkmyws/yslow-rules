---
weight: 40
id: "ycsstop"
title: "Put Stylesheets at Top"
yahoo: "http://developer.yahoo.com/performance/rules.html#css_top"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_4.html"
tags: ["css"]
locales: "en"
notoc: "true"
description: ""
---

While researching performance at Yahoo!, we discovered that moving stylesheets to the document HEAD makes pages *appear* to be loading faster. This is because putting stylesheets in the HEAD allows the page to render progressively.

Front-end engineers that care about performance want a page to load progressively; that is, we want the browser to display whatever content it has as soon as possible. This is especially important for pages with a lot of content and for users on slower Internet connections. The importance of giving users visual feedback, such as progress indicators, has been well researched and [documented](http://www.useit.com/papers/responsetime.html). In our case the HTML page is the progress indicator! When the browser loads the page progressively the header, the navigation bar, the logo at the top, etc. all serve as visual feedback for the user who is waiting for the page. This improves the overall user experience.

The problem with putting stylesheets near the bottom of the document is that it prohibits progressive rendering in many browsers, including Internet Explorer. These browsers block rendering to avoid having to redraw elements of the page if their styles change. The user is stuckviewing a blank white page.

The [HTML specification](http://www.w3.org/TR/html4/struct/links.html#h-12.3) clearly states that stylesheets are to be included in the HEAD of thepage: "Unlike A, [LINK] may only appear in the HEAD section of adocument, although it may appear any number of times. " Neither of the alternatives, the blank white screen or flash of unstyled content, are worth the risk. The optimal solution is to follow the HTML specification and load your stylesheets in the document HEAD.
