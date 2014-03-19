---
weight: 130
id: "yxhr"
title: "Rendre les requêtes Ajax cachables"
yahoo: "http://developer.yahoo.com/performance/rules.html#cacheajax"
discuss: "http://developer.yahoo.net/blog/archives/2007/09/high_performanc_12.html"
tags: ["content"]
locales: "fr"
notoc: "true"
description: ""
---

Un des avantages cités d'Ajax est qu'il fournit une rétroaction instantanée à l'utilisateur car il demande des informations de manière asynchrone à partir du serveur Web. Cependant, utiliser Ajax n'est pas une garantie que l'utilisateur ne sera pas en train de se tourner les pouces en attendant le retour des réponses Asynchronous JavaScript and XML. Dans de nombreuses applications, maintenir l'attente de l'utilisateur dépend de la façon dont Ajax est utilisé. Par exemple, dans un client de messagerie basé sur le Web, l'utilisateur sera maintenu en attendant les résultats d'une requête Ajax pour trouver tous les messages électroniques correspondant aux critères de recherche. Il est important de se rappeler que «asynchrone» ne signifie pas «instantané».

Pour améliorer les performances, il est important d'optimiser ces réponses Ajax. Le moyen le plus important pour améliorer les performances Ajax est de servir les réponses mises en cache, comme indiqué dans [Ajouter une expiration ou un en-tête Cache-Control](# expire). D'autres règles s'appliquent également à pour Ajax:

- [Gzipper les composants](#gzip) 
- [Réduire le nombre de requêtes DNS](#dns_lookups) 
- [Minifier JavaScript](#minify) 
- [Éviter les redirections](#redirects) 
- [Configurer les ETags](#etags)

Voyons un exemple. Un client de messagerie Web 2.0 peut utiliser Ajax pour télécharger le carnet d'adresses de l'utilisateur à des fins d'auto-complétion. Si l'utilisateur n'a pas modifié son carnet d'adresse depuis la dernière fois, la réponse du carnet d'adresses précédente pourrait être lu à partir du cache si cette réponse Ajax a été mise en cache avec un en-tête Expire ou Cache-Control. Le navigateur doit être informé quand utiliser une réponse de carnet d'adresses précédemment mise en cache par rapport à en demander une nouvelle. Cela pourrait se faire par l'ajout d'un horodatage dans le carnet d'adresse URL Ajax indiquant la dernière fois que l'utilisateur a modifié son carnet d'adresses. Par exemple, `&t=1190241612`. Si le carnet d'adresses n'a pas été modifié depuis le dernier téléchargement, l'horodatage sera le même et le carnet d'adresses sera lu à partir de la mémoire cache du navigateur, éliminant un aller-retour HTTP supplémentaire. Si l'utilisateur a modifié son carnet d'adresses, l'horodatage assure que la nouvelle URL ne correspond pas à la réponse mise en cache, et le navigateur demandera une nouvelle réponse du carnet d'adresses à jour .

Même si vos réponses Ajax sont créées dynamiquement, et qu'elles ne sontt applicables qu'à un seul utilisateur, elles peuvent encore être mis en cache. Cela rendra vos applications Web 2.0 plus rapide .