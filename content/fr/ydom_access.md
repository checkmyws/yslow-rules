---
weight: 240
id: "ydom_access"
title: "Minimiser les accès DOM"
yahoo: "http://developer.yahoo.com/performance/rules.html#dom_access"
tags: ["javascript"]
locales: "fr"
notoc: "true"
description: ""
---

L'accès aux éléments du DOM avec JavaScript est lent. Afin d'avoir une page plus réactive, vous devez:

- Mettre en cahe les références à des éléments accessibles.
- Mettre à jour les nœuds «hors ligne» et les ajouter ensuite à l'arbre.
- Éviter de corriger la mise en page avec JavaScript.

Consultez le YUI theatre's ["High Performance Ajax Applications"](http://yuiblog.com/blog/2007/12/20/video-lecomte/) de Julien Lecomte pour plus d'informations.
