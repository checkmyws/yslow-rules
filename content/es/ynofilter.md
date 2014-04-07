---
weight: 270
id: "ynofilter"
title: "Evitar el uso de filtros"
yahoo: "http://developer.yahoo.com/performance/rules.html#no_filters"
tags: ["css"]
locales: "es"
notoc: "true"
description: ""
---

El filtro propietario de IE `AlphaImageLoader` tiene por objeto solucionar un problema con PNGs semi transparentes true-color en las versiones de IE inferiores a la 7. El problema con este filtro es que bloquea el renderizado y congela el navegador mientras la imagen está siendo descargada. Esto además incrementa el consumo de memoria y es aplicado por elemento, no por imagen, de modo que el problema se multiplica.

El mejor enfoque es evitar el uso de `AlphaImageLoader` completamente y usar en su reemplazo PNG8 con degradado, lo cual se ve bien en IE. Si usted necesita irremediablemente el uso de `AlphaImageLoader`, use el truco de relieve _filter que no afecta a los usuarios de ie7.