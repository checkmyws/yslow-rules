---
weight: 50
id: "yjsbottom"
title: "Scripts en el pie"
yahoo: "http://developer.yahoo.com/performance/rules.html#js_bottom"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_5.html"
tags: ["javascript"]
locales: "es"
notoc: "true"
description: ""
---

El problema causado por los scripts, es que bloquean las descargas paralelas. La [especificación HTTP/1.1](http://www.w3.org/Protocols/rfc2616/rfc2616-sec8.html#sec8.1.4) sugiere que los navegadores descarguen no más de dos componentes en paralelo por servidor. Si usted sirve sus imágenes desde múltiples servidores, usted puede tener más de dos descargas que se produzcan en paralelo. Mientras un script está descargándose, sin embargo, el navegador no iniciará otra descarga, incluso de diferentes servidores.

En algunas situaciones no es fácil mover los scripts al fondo. Si, por ejemplo, el script utiliza `document.write` para insertar contenido en la página, no se lo puede mover más abajo. También podrían haber problemas de alcance. En muchos casos, hay formas de solucionar estas situaciones.

Una sugerencia alternativa que a menudo surge es utilizar scripts en diferido. El atributo `DEFER` indica que el scriptno contiene document.write, y es una pista para los navegadores para que ellos puedan continuar trabajando.

Desafortunadamente, Firefox no soporta el atributo `DEFER`. En Internet Explorer, el script se lo puede diferir, pero no tanto como se desea. En caso de que un script pueda ser diferido, también puede ser trasladado a la parte inferior de la página. Que hará que sus páginas web se carguen más rápido.