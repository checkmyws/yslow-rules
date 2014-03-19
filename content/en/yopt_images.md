---
weight: 280
id: "yopt_images"
title: "Optimize Images"
yahoo: "http://developer.yahoo.com/performance/rules.html#opt_images"
tags: ["images"]
locales: "en"
notoc: "true"
description: ""
---

After a designer is done with creating the images for your web page, there are still some things you can try before you FTP those images to your web server.

- You can check the GIFs and see if they are using a palette size corresponding to the number of colors in the image. Using [imagemagick](http://www.imagemagick.org) it's easy to check using `identify -verbose image.gif` When you see an image using 4 colors and a 256 color "slots" in the palette, there is room for improvement.
-   Try converting GIFs to PNGs and see if there is a saving. More often than not, there is. Developers often hesitate to use PNGs due to the limited support in browsers, but this is now a thing of the past. The only real problem is alpha-transparency in true color PNGs, but then again, GIFs are not true color and don't support variable transparency either. So anything a GIF can do, a palette PNG (PNG8) can do too (except for animations). This simple imagemagick command results in totally safe-to-use PNGs: `convert image.gif image.png` "All we are saying is: Give PiNG a Chance!"
- Run [pngcrush](http://pmt.sourceforge.net/pngcrush/) (or any other PNG optimizer tool) on all your PNGs. Example: `pngcrush image.png -rem alla -reduce -brute result.png`
- Run jpegtran on all your JPEGs. This tool does lossless JPEG operations such as rotation and can also be used to optimize and remove comments and other useless information (such as EXIF information) from your images. `jpegtran -copy none -optimize -perfect src.jpg dest.jpg`