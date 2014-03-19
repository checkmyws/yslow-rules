---
weight: 50
id: "yjsbottom"
title: "Mettres les scripts en bas de page"
yahoo: "http://developer.yahoo.com/performance/rules.html#js_bottom"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_5.html"
tags: ["javascript"]
locales: "fr"
notoc: "true"
description: ""
---

Le problème des par scripts est qu'ils bloquent les téléchargements en parallèle. La [spécification HTTP/1.1](http://www.w3.org/Protocols/rfc2616/rfc2616-sec8.html#sec8.1.4) suggère que les navigateurs ne téléchargent pas plus de deux composants en parallèle par nom d'hôte. Si vous servez vos images à partir de plusieurs noms d'hôtes, vous pouvez obtenir plus de deux téléchargements en parallèle. Cependant, pendant le téléchargement d'un script, le navigateur ne démarre pas d'autres téléchargements y compris sur différents noms de domaine.

Dans certaines situations, il n'est pas facile de déplacer ses scripts en bas de page. Si, par exemple, le script utilise `document.write` pour insérer une partie du contenu de la page, il ne peut pas être déplacé plus bas dans la page. Il pourrait s'en suivre des problèmes de scope. Dans de nombreux cas, il existe des moyens de contourner ces situations.

Une autre suggestion qui revient souvent est l'utilisation de scripts différés. L'attribut `DEFER` indique que le script ne contient pas document.write. C'est un indication pour les navigateurs qu'ils peuvent continuer le rendu de la page. Malheureusement, Firefox ne prend pas en charge l'attribut `DEFER`. Dans Internet Explorer, le script peut être différé mais pas autant que vous le souhaitez. Si un script peut être différé, il peut également être déplacé vers le bas de la page. Cela rendra vos pages Web plus rapides à charger.
