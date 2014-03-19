---
weight: 260
id: "ycsslink"
title: "Choose <link> Over @import"
yahoo: "http://developer.yahoo.com/performance/rules.html#csslink"
tags: ["css"]
locales: "en"
notoc: "true"
description: ""
---

One of the previous best practices states that CSS should be at the top in order to allow for progressive rendering.

In IE `@import` behaves the same as using `<link>` at the bottom of the page, so it's best not to use it.
