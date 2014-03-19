---
weight: 190
id: "ysplit"
title: "Répartir les composants sur plusieurs domaines"
yahoo: "http://developer.yahoo.com/performance/rules.html#split"
tags: ["content"]
locales: "fr"
notoc: "true"
description: ""
---

La répartition des composant permet de maximiser le nombre de téléchargements parallèles. Assurez-vous de ne pas utiliser plus de 2-4 domaines en raison du coût de recherche DNS. Par exemple, vous pouvez héberger votre code HTML et du contenu dynamique sur `www.example.org` et répartir les composants statiques entre `static1.example.org` et `static2.example.org`.

Visitez "[Maximizing Parallel Downloads in the Carpool Lane](http://yuiblog.com/blog/2007/04/11/performance-research-part-4/)" de Tenni Theurer et Patty Chi pour plus d'informations.