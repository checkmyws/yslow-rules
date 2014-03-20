---
weight: 10
id: "ycdn"
title: "Utiliser un réseau de diffusion de contenu (CDN)"
yahoo: "http://developer.yahoo.com/performance/rules.html#cdn"
discuss: "http://developer.yahoo.net/blog/archives/2007/04/high_performanc_1.html"
tags: ["server"]
locales: "fr"
notoc: "true"
description: ""
---

La proximité de l'utilisateur par rapport à votre serveur web a un impact sur les temps de réponse. Le déploiement de votre contenu sur plusieurs serveurs géographiquement dispersés rendra vos pages plus rapides du point de vue de l'utilisateur. Mais par où commencer ?

Dans un premier temps, ne tentez pas la refonte de votre application web pour travailler en mode distribué afin de mettre en œuvre du contenu dispersé géographiquement. Selon l'application, l'évolution de l'architecture pourrait inclure des tâches redoutables telles que la synchronisation d'états ​​de session et la réplication de transactions de base de données de serveurs à serveurs répartis géographiquement. Vous pourriez être retardés, voire ne jamais atteindre l'objectif visant à réduire la distance entre les utilisateurs et le contenu si vous souhaitez passer par cette étape d'amélioration d'architecture applicative.

Rappelez-vous que 80 à 90% du temps de réponse de l'utilisateur final est passé à télécharger tous les composants de la page : images, feuilles de style, scripts, flash, etc. C'est la *règle d'or de la performance*. Plutôt que de partir sur la refonte de votre architecture applicative, il vaut mieux d'abord répartir votre contenu statique. Non seulement il permet une plus grande réduction des temps de réponse, mais il est de plus facile à mettre en œuvre grâce à des réseaux de diffusion de contenu.

Un réseau de diffusion de contenu (CDN) est un ensemble de serveurs Web répartis sur plusieurs endroits géographiques pour fournir un contenu de façon plus efficace aux utilisateurs. Le serveur sélectionné pour fournir du contenu à un utilisateur spécifique est généralement basé sur une mesure de proximité de réseau. Par exemple, le serveur avec le moins de sauts de réseau ou le serveur avec le meilleur temps de réponse est choisi.

Certaines grandes entreprises de l'Internet possèdent leur propre CDN, mais il peut être moins cher d'utiliser un fournisseur de services CDN, comme [Akamai Technologies](http://www.akamai.com/), [EdgeCast](http://www.edgecast.com/) ou [level3](http://www.level3.com/index.cfm?pageID=36). Pour les entreprises qui démarrent et les sites web privés, le coût d'un service CDN peut être prohibitif. Mais que votre public cible grandisse et devienne plus global, et alors un CDN est nécessaire pour obtenir des temps de réponse rapides. Chez Yahoo!, ceux qui ont déplacé le contenu statique de leurs serveurs d'applications Web à un CDN (à la fois chez des prestataires externes comme ceux mentionnés ci-dessus et leur propre [CDN](https://cwiki.apache.org/TS/traffic-server.html) chez Yahoo) améliorent le temps de réponse de l'utilisateur final de 20% ou plus. Le passage à un CDN est un changement de code relativement facile qui va considérablement améliorer la vitesse de votre site web.