---
weight: 240
id: "ydom_access"
title: "Minimizar accesos DOM"
yahoo: "http://developer.yahoo.com/performance/rules.html#dom_access"
tags: ["javascript"]
locales: "es"
notoc: "true"
description: ""
---

Acceder a elementos DOM con JavaScript es lento con el fin de tener una mejor capacidad de respuesta, usted debería:

- Cachear referencias para acceder a los elementos.
- Actualizar nodos “offline” y luego añadirlos al árbol.
- Evitar fijar la posición con Javascript.


For more information check the YUI theatre's ["High Performance Ajax Applications"](http://yuiblog.com/blog/2007/12/20/video-lecomte/) by Julien Lecomte.