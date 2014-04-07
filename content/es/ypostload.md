---
weight: 160
id: "ypostload"
title: "Retrasar carga de componentes"
yahoo: "http://developer.yahoo.com/performance/rules.html#postload"
tags: ["contenido"]
locales: "es"
notoc: "true"
description: ""
---

Usted puede ver más de cerca su página y preguntarse: “Qué es absolutamente necesario para crear la página de inicio?”. El resto del contenido y los componentes pueden esperar.

JavaScript es un candidato ideal para dividir antes y después del evento onload. Por ejemplo si usted tiene el código y las librerías necesarias para hacer un “arrastrar y soltar” y animaciones, esos pueden esperar porque el arrastre de los elementos en la página vienen después del renderizado inicial. Otros lugares que lucen como candidatos para el post-loading incluyen el contenido oculto (contenido que aparece luego de una acción del usuario) y las imágenes ocultas.

Tools to help you out in your effort: [YUI Image Loader](http://developer.yahoo.com/yui/imageloader/) allows you to delay images below the fold and the [YUI Get utility](http://developer.yahoo.com/yui/get/) is an easy way to include JS and CSS on the fly. For an example in the wild take a look at [Yahoo! Home Page](http://www.yahoo.com) with Firebug's Net Panel turned on.

Es bueno cuando se obtienen los resultados deseados con otras prácticas de desarrollo web. En este caso, la idea de la progresiva mejora de Javascript nos dice que, cuando cuentan con el soporte, pueden mejorar la experiencia del usuario, pero debe asegurarse de que la página igualmente funcione sin javascript. Así, luego de que usted se haya cerciorado que la página funciona correctamente, usted puede mejorarla con algunos scripts para acicalarla con funcionalidades como el arrastrar y soltar y animaciones.