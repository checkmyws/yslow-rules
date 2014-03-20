---
weight: 220
id: "ymincookie"
title: "Réduire la taille des cookies"
yahoo: "http://developer.yahoo.com/performance/rules.html#cookie_size"
tags: ["cookie"]
locales: "fr"
notoc: "true"
description: ""
---

Les cookies HTTP sont utilisés pour de multiples raisons comme l'authentification et la personnalisation. L'information sur les cookies est échangée dans les en-têtes HTTP entre les serveurs Web et les navigateurs. Il est important de garder la taille des cookies aussi basse que possible pour minimiser l'impact sur ​​le temps de réponse de l'utilisateur.

Consultez ["When the Cookie Crumbles"](http://yuiblog.com/blog/2007/03/01/performance-research-part-3/) par Tenni Theurer et Patty Chi pour plus d'informations. Les points importants de cette recherche :

- Éliminer les cookies inutiles.
- Gardez leur taille aussi faible que possible afin de minimiser l'impact sur le temps de réponse de l'utilisateur.
- Stockez vos cookies au niveau de domaine approprié afin que les autres sous-domaines ne soient pas affectés.
- Définir une date d'expiration appropriée. Un délai d'expiration plus court ou aucune date d'expiration spécifiée feront expirer le cookie plus tôt, améliorant par là le temps de réponse de l'utilisateur.
