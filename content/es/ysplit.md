---
weight: 190
id: "ysplit"
title: "Split Components Across Domains"
yahoo: "http://developer.yahoo.com/performance/rules.html#split"
tags: ["content"]
locales: "en"
notoc: "true"
description: ""
---

Splitting components allows you to maximize parallel downloads. Make sure you're using not more than 2-4 domains because of the DNS lookup penalty. For example, you can host your HTML and dynamic content on `www.example.org` and split static components between `static1.example.org` and `static2.example.org`

For more information check "[Maximizing Parallel Downloads in the Carpool Lane](http://yuiblog.com/blog/2007/04/11/performance-research-part-4/)" by Tenni Theurer and Patty Chi.