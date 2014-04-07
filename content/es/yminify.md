---
weight: 90
id: "yminify"
title: "Minimizar JavaScript y CSS"
yahoo: "http://developer.yahoo.com/performance/rules.html#minify"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_8.html"
tags: ["javascript","css"]
locales: "es"
notoc: "true"
description: ""
---

Minimización es la práctica de eliminar el código de caracteres innecesarios para reducir su tamaño, mejorando así los tiempos de carga. Cuando el código es minimizado todos los comentarios se eliminan, así como los espacios en blanco y caracteres innecesarios (espacio, nueva línea…). En el caso de JavaScript, esto mejora el tiempo de respuesta de rendimiento debido a que el tamaño del archivo descargado es reducido.

La ofuscación es una alternativa de optimización que se pueden aplicar al código fuente. Es más complejo que la minimización y, por tanto, más posibilidades de generar errores. En una encuesta de los diez principales sitios web de EE.UU., la minimización alcanzó un 21% la reducción de tamaño frente a un 25% de la ofuscación. A pesar de la ofuscación tiene mayor reducción de tamaño, minificar JavaScript es menos arriesgado.

Incluso si usted comprime con gzip sus archivos javascript y de estilo, minimizarlos podría reducir el tamaño en un 5% o más.