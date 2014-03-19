---
weight: 60
id: "yexpressions"
title: "Avoid CSS expressions"
yahoo: "http://developer.yahoo.com/performance/rules.html#css_expressions"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_6.html"
tags: ["css"]
locales: "en"
notoc: "true"
description: ""
---

CSS expressions are a powerful (and dangerous) way to set CSS properties dynamically. They were supported in Internet Explorer starting with version 5, but were [deprecated starting with IE8](http://msdn.microsoft.com/en-us/library/ms537634%28VS.85%29.aspx). As an example, the background color could be set to alternate every hour using CSS expressions:

	background-color: expression( (new Date()).getHours()%2 ? "#B8D4FF" : "#F08A00" );

As shown here, the `expression` method accepts a JavaScript expression. The CSS property is set to the result of evaluating the JavaScript expression. The `expression` method is ignored by other browsers, so it is useful for setting properties in Internet Explorer needed to create a consistent experience across browsers.

The problem with expressions is that they are evaluated more frequently than most people expect. Not only are they evaluated when the page is rendered and resized, but also when the page is scrolled and even when the user moves the mouse over the page. Adding a counter to the CSS expression allows us to keep track of when and how often a CSS expression is evaluated. Moving the mouse around the page can easily generate more than 10,000 evaluations.

One way to reduce the number of times your CSS expression is evaluated is to use one-time expressions, where the first time the expression is evaluated it sets the style property to an explicit value, which replaces the CSS expression. If the style property must be set dynamically throughout the life of the page, using event handlers instead of CSS expressions is an alternative approach. If you must use CSS expressions, remember that they may be evaluated thousands of times and could affect the performance of your page.