---
weight: 150
id: "yxhrmethod"
title: "Utiliser GET pour les requêtes Ajax"
yahoo: "http://developer.yahoo.com/performance/rules.html#ajax_get"
tags: ["server"]
locales: "fr"
notoc: "true"
description: ""
---

L'équipe de [Yahoo! Mail](http://mail.yahoo.com) a constaté que lors de l'utilisation de `XMLHttpRequest`, POST est mis en œuvre dans les navigateurs comme un processus en deux étapes: l'envoi des en-têtes puis l'envoi de données. Il est donc préférable d'utiliser GET, qui ne prend qu'un paquet TCP pour envoyer (sauf si vous avez un grand nombre de cookies). La longueur maximale pour une URL dans IE est 2K, donc si vous envoyez des données de plus de 2K vous pourriez ne pas être en mesure d'utiliser GET.

Un côté intéressant est que POST sans affichage réels de données se comporte comme GET. Sur la base des spécifications [HTTP](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html), GET est destiné à récupérer des informations. Il serait donc très judicieux (sémantiquement) d'utiliser GET lorsque vous récupérez des données, par opposition à l'envoi de données à stocker côté serveur.