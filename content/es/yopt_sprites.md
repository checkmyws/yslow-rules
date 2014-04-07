---
weight: 290
id: "yopt_sprites"
title: "Optimize CSS Sprites"
yahoo: "http://developer.yahoo.com/performance/rules.html#opt_sprites"
tags: ["images"]
locales: "en"
notoc: "true"
description: ""
---

- Arranging the images in the sprite horizontally as opposed to vertically usually results in a smaller file size.
- Combining similar colors in a sprite helps you keep the color count low, ideally under 256 colors so to fit in a PNG8.
- "Be mobile-friendly" and don't leave big gaps between the images in a sprite. This doesn't affect the file size as much but requires less memory for the user agent to decompress the image into a pixel map. 100x100 image is 10 thousand pixels, where 1000x1000 is 1 million pixels