---
weight: 190
id: "ysplit"
title: "Separar componentes con dominios"
yahoo: "http://developer.yahoo.com/performance/rules.html#split"
tags: ["content"]
locales: "es"
notoc: "true"
description: ""
---

Dividir los componentes le permite maximizar las descargas paralelas. Asegúrese de que no está usando más de 2-4 dominios porque las búsquedas DNS le penalizarán. Por ejemplo, usted puede alojar su HTML y el contenido dinámico en www.midominio.com y dividir los componentes estáticos entre `static1.example.org` y `static2.example.org`

For more information check "[Maximizing Parallel Downloads in the Carpool Lane](http://yuiblog.com/blog/2007/04/11/performance-research-part-4/)" by Tenni Theurer and Patty Chi.