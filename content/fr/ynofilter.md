---
weight: 270
id: "ynofilter"
title: "Éviter les filtres"
yahoo: "http://developer.yahoo.com/performance/rules.html#no_filters"
tags: ["css"]
locales: "fr"
notoc: "true"
description: ""
---

Le filtre propriétaire IE `AlphaImageLoader` vise à régler un problème de couleurs vraies semi-transparentes dans les versions IE <7. Le problème avec ce filtre est qu'il bloque le rendu. Le navigateur se bloque lorsque l'image est en cours de téléchargement. Il augmente également la consommation de mémoire et est appliqué par élément, et non par image, de sorte que le problème est multiplié.

La meilleure approche est d'éviter `AlphaImageLoader` complètement et d'utiliser une version dégradée PNG8 à la place. Fonctionne dans IE. Si vous avez absolument besoin du filtre `AlphaImageLoader`, utilisez le vieux hack `_filter` afin de ne pas pénaliser vos utilisateurs IE7+.