---
weight: 5
id: "ynumreq"
title: "Réduire le nombre de requêtes HTTP"
yahoo: "http://developer.yahoo.com/performance/rules.html#num_http"
discuss: "http://developer.yahoo.net/blog/archives/2007/04/rule_1_make_few.html"
tags: ["content"]
locales: "fr"
notoc: "true"
description: ""
---

80% du temps de réponse de l'utilisateur final est passé sur le front-end. La plupart de ce temps est consacré au téléchargement de tous les composants de la page: images, feuilles de style, scripts, flash, etc. Réduire le nombre de composants réduit le nombre de requêtes HTTP nécessaires pour rendre la page. C'est la clé de pages plus rapides.

Une façon de réduire le nombre de composants dans la page est de simplifier la conception de la page. Mais existe-il un moyen de créer des pages avec un contenu plus riche tout en conservant des temps de réponse rapides ? Voici quelques techniques pour réduire le nombre de requêtes HTTP, tout en conservant des pages riches d'un point de vue design.

Les **fichiers concaténés** sont un moyen de réduire le nombre de requêtes HTTP en combinant tous les scripts et toutes les CSS dans une feuille de style unique et en un seul script. la concaténation de fichiers est plus difficile lorsque les scripts et les feuilles de style varient d'une page à l'autre. Inclure ceci dans votre processus de construction des pages améliore les temps de réponse.

Les [**sprites CSS**](http://alistapart.com/articles/sprites) représente la méthode préférée pour réduire le nombre de demandes d'images. Combinez vos images de fond en une seule image et utilisez les propriétés CSS `background-image` et `background-position` pour afficher le segment de l'image souhaitée.

Les [**cartes-image**](http://www.w3.org/TR/html401/struct/objects.html#h-13.6) combinent plusieurs images en une seule image. La taille globale est à peu près la même, mais en réduisant le nombre de requêtes HTTP accélère la page. Les cartes-images ne fonctionnent que si les images sont contiguë dans la page, comme un menu de navigation. Définir les coordonnées de chaque segment dans une carte d'image peut être fastidieux et générateur d'erreurs. L'utilisation de cartes-images pour la navigation casse l'accessibilité de la page, donc non recommandé.

Les **images en ligne** utilisent le [`data:` URL scheme](http://tools.ietf.org/html/rfc2397) pour intégrer les données d'image dans la page en cours. Cela peut augmenter la taille de votre document HTML. En combinant des images en ligne dans vos feuilles de style (en cache) est un moyen de réduire les requêtes HTTP et éviter d'augmenter la taille de vos pages. Les images en ligne ne sont pas encore prise en charge dans tous les navigateurs principaux.

Réduire le nombre de requêtes HTTP de votre page est un point de départ idéal. C'est la recommandation qui permet d'améliorer les performances pour les nouveaux visiteurs de manière la plus significative. Comme décrit dans le billet de blog de Tenni Theurer [Browser Cache Usage - Exposed!](http://yuiblog.com/blog/2007/01/04/performance-research-part-2/), 40 à 60% des visiteurs quotidiens de votre site le consulte avec un cache navigateur vide. Améliorer le temps de chargement pour ces nouveaux visiteurs est la clé d'une meilleure expérience utilisateur.
