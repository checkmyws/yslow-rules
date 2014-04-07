---
weight: 220
id: "ymincookie"
title: "Reducir tamaño de las cookies"
yahoo: "http://developer.yahoo.com/performance/rules.html#cookie_size"
tags: ["cookie"]
locales: "es"
notoc: "true"
description: ""
---

Las cookies son usadas por una variedad tales como la autenticación y personalización. La información de las cookies es intercambiadas en las cabeceras HTTP entre los servidores web y los navegadores. Es importante mantener el tamaño de las cookies lo más bajo posible para reducir al mínimo el impacto que pueda ocasionar en el tiempo de respuesta al usuario.

For more information check ["When the Cookie Crumbles"](http://yuiblog.com/blog/2007/03/01/performance-research-part-3/) by Tenni Theurer and Patty Chi. The take-home of this research:

- Eliminar las cookies innecesarias
- Mantener el tamaño de las cookies lo más bajo posible para reducir el impacto en el tiempo de respuesta.
- Ser conscientes de configurar la cookie al nivel apropiado del dominio, así otros subdominios no serán afectados.
- Establecer una fecha de expiración apropiada. Una fecha de expiración pasada o ninguna eliminan rápido la cookie, mejorando el tiempo de respuesta al usuario.
