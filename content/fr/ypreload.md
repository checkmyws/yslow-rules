---
weight: 170
id: "ypreload"
title: "Précharger les composants"
yahoo: "http://developer.yahoo.com/performance/rules.html#preload"
tags: ["content"]
locales: "fr"
notoc: "true"
description: ""
---

le préchargement peut sembler de prime abord l'exact opposé du post-chargement, mais il a en fait un objectif différent. Le préchargement de composants consiste à profiter du temps où le navigateur est inactif pour charger des composants de la demande dont vous aurez besoin plus tard (comme les images, les styles et les scripts). De cette façon, lorsque l'internaute visite la page suivante, vous pourriez avoir la plupart des composants déjà dans le cache et votre page se chargera beaucoup plus rapidement pour l'utilisateur .

Il y a en fait plusieurs types de préchargements :

- Préchargement *inconditionnel* - dès que l'événement onload se produit, allez-y et récupérez quelques composants supplémentaires. Vérifiez google.com pour voir un exemple de la façon dont une image composée de  sprites est demandé onload. Cette image composée de sprites n'est pas nécessaire sur la page d'accueil de google.com, mais elle est nécessaire sur la page de résultat de recherche consécutive. 
- Préchargement *conditionnel* - basé sur une action de l'utilisateur à faire une supposition éclairée de la prochaine étape de l'utilisateur et précharger en conséquence. Sur [search.yahoo.com](http://search.yahoo.com) vous pouvez voir comment certains composants supplémentaires sont demandés après que vous ayez commencés à taper dans la zone de saisie.
- Préchargement *prévu* - précharge à l'avance avant de lancer une refonte du design d'un site. Il arrive souvent après une refonte que vous entendiez : «Le nouveau site est cool, mais il est plus lent qu'avant». Une partie du problème pourrait être que les utilisateurs étaient en visite sur votre ancien site avec un cache complet, mais le nouveau est toujours parcouru avec un cache vide. Vous pouvez atténuer cet effet secondaire par le préchargement des composants avant même de lancer la refonte. Votre ancien site utilise le temps pendant lequel le navigateur est inactif pour demander des images et des scripts qui seront utilisés par le nouveau site.