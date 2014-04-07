---
weight: 110
id: "ydupes"
title: "Remove Duplicate Scripts"
yahoo: "http://developer.yahoo.com/performance/rules.html#js_dupes"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_10.html"
tags: ["javascript","css"]
locales: "en"
notoc: "true"
description: ""
---

It hurts performance to include the same JavaScript file twice in one page. This isn't as unusual as you might think. A review of the ten top U.S. web sites shows that two of them contain a duplicated script. Two main factors increase the odds of a script being duplicated in a single web page: team size and number of scripts. When it does happen, duplicate scripts hurt performance by creating unnecessary HTTP requests and wasted JavaScript execution.

Unnecessary HTTP requests happen in Internet Explorer, but not in Firefox. In Internet Explorer, if an external script is included twice and is not cacheable, it generates two HTTP requests during page loading. Even if the script is cacheable, extra HTTP requests occur when the user reloads the page.

In addition to generating wasteful HTTP requests, time is wasted evaluating the script multiple times. This redundant JavaScript execution happens in both Firefox and Internet Explorer, regardless of whether the script is cacheable.

One way to avoid accidentally including the same script twice is to implement a script management module in your templating system. The typical way to include a script is to use the SCRIPT tag in your HTML page.

	<script type="text/javascript" src="menu_1.0.17.js"></script>

An alternative in PHP would be to create a function called `insertScript`.

	<?php insertScript("menu.js") ?>

In addition to preventing the same script from being inserted multiple times, this function could handle other issues with scripts, such as dependency checking and adding version numbers to script filenames to support far future Expires headers.