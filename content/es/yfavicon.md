---
weight: 310
id: "yfavicon"
title: "Favicon.ico, ligero y cacheable"
yahoo: "http://developer.yahoo.com/performance/rules.html#favicon"
tags: ["images"]
locales: "es"
notoc: "true"
description: ""
---

La favicon.ico es una imagen que se almacena en la raíz de tu servidor. Ésta es un mal necesario, porque aunque usted no le tenga ciudado, el navegador siempre va a pedirla, por lo que es mejor no responder con un `404 Not Found`. Además desde el hecho de que está en el mismo servidor, las cookies son enviadas cada vez que es pedida. Esta imagen también interfiere con la secuencia de descargas , por ejemplo en IE cuando usted pide componentes extra en la carga, la favicon será descargada antes que esos componentes.

Por lo tanto para mitigar los inconvenientes de tener una favicon.ico primero asegúrese de que:

- Es muy pequeña, preferiblemente menor a 1kb.
- Establecer Expires header con las cuales se sienta cómodo (ya que no le puede cambiar el nombre aunque quiera hacerlo). Usted probablemente puede establecer con seguridad la Expires header unos pocos meses de duración. Usted puede revisar que la última fecha de modificación de su favicon.ico actual para tomar una decisión informada.


[Imagemagick](http://www.imagemagick.org) can help you create small favicons