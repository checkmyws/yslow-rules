---
weight: 270
id: "ynofilter"
title: "Avoid Filters"
yahoo: "http://developer.yahoo.com/performance/rules.html#no_filters"
tags: ["css"]
locales: "en"
notoc: "true"
description: ""
---

The IE-proprietary `AlphaImageLoader` filter aims to fix a problem with semi-transparent true color PNGs in IE versions \< 7. The problem with this filter is that it blocks rendering and freezes the browser while the image is being downloaded. It also increases memory consumption and is applied per element, not per image, so the problem is multiplied.

The best approach is to avoid `AlphaImageLoader` completely and use gracefully degrading PNG8 instead, which are fine in IE. If you absolutely need `AlphaImageLoader`, use the underscore hack `_filter` as to not penalize your IE7+ users.