---
weight: 070
id: "yexternal"
title: "Rendre JavaScript et les CSS externes"
yahoo: "http://developer.yahoo.com/performance/rules.html#external"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/rule_8_make_jav.html"
tags: ["javascript","css"]
locales: "fr"
notoc: "true"
description: ""
---

Beaucoup des règles de performance traitent de la façon dont les composants externes sont gérés. Toutefois, avant que ces éléments apparaissent, vous devez vous poser une question plus fondamentale : les scripts JavaScript et les feuilles de style CSS doivent-ils être contenus dans des fichiers externes ou en ligne dans la page elle-même ?

L'utilisation des fichiers externes produit généralement des pages plus rapides parce que les fichiers JavaScript et CSS sont mis en cache par le navigateur. JavaScript et CSS en ligne dans les documents HTML sont téléchargés chaque fois que le document HTML est demandé. Cela réduit le nombre de requêtes HTTP nécessaires mais augmente la taille du document HTML. D'autre part, si le code JavaScript et CSS dans des fichiers externes est mis en cache par le navigateur, la taille du document HTML est réduite sans augmenter le nombre de requêtes HTTP.

Le facteur-clé est donc la fréquence avec laquelle les composants CSS et JavaScript externes sont mis en cache par rapport au nombre de documents HTML demandés. Ce facteur, bien que difficile à quantifier, peut être mesuré à l'aide de divers paramètres. Si les utilisateurs de votre site voient plusieurs pages par session et que nombre de celles-ci ré-utilisent les mêmes scripts et feuilles de style, alors il y a un plus grand bénéfice potentiel à utiliser des fichiers externes en cache.

De nombreux sites Web échouent sur ces mesures. Pour ces sites, la meilleure solution consiste généralement à déployer le code JavaScript et les feuilles de style CSS dans des fichiers externes. La seule exception où les mettre en ligne est préférable est les pages d'accueil, tels que [Yahoo!](http://www.yahoo.com) et [Mon Yahoo! ](http://my.yahoo.com). Les pages d'accueil qui ont peu de vues (voir une seule) par session peuvent trouver que JavaScript et CSS en ligne résultent dans des temps de réponse plus rapides pour l'utilisateur final.

Pour les pages d'accueil qui sont généralement les premières d'une suite de pages vues, il existe des techniques qui s'appuient sur la réduction de requêtes HTTP que fournit le mode en ligne ainsi que les avantages de la mise en cache obtenus grâce à l'utilisation de fichiers externes. Une de ces techniques consiste à charger en ligne le JavaScript et les CSS dans la page d'accueil mais en téléchargeant dynamiquement les fichiers externes après le chargment de la page. Les pages suivantes pourraient alors référencer les fichiers externes qui devraient déjà être dans le cache du navigateur.
