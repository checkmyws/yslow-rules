---
weight: 260
id: "ycsslink"
title: "Utiliser <link> plutôt que @import"
yahoo: "http://developer.yahoo.com/performance/rules.html#csslink"
tags: ["css"]
locales: "fr"
notoc: "true"
description: ""
---

Une des meilleures pratiques précédentes indique que les feuilles de style CSS devraient être chargées en haut de page afin de permettre le rendu progressif.

Dans IE `@import` se comporte comme utilisant `<link>` en bas de page, il est donc préférable de ne pas l'utiliser.
