---
weight: 20
id: "yexpires"
title: "Ajouter des en-têtes Expires ou Cache-Control"
yahoo: "http://developer.yahoo.com/performance/rules.html#expires"
discuss: "http://developer.yahoo.net/blog/archives/2007/05/high_performanc_2.html"
tags: ["server"]
locales: "fr"
notoc: "true"
description: ""
---

Il ya deux aspects à cette règle:

- Pour les composants statiques: Mettre en œuvre une politique du «n'expire jamais» par l'utilisation d'en-têtes Expire fixés loin dans le futur.
- Pour les composants dynamiques: utiliser un en-tête Cache-Control approprié pour aider le navigateur avec les requêtes conditionnelles.

Le design des pages web est de plus en plus riche, ce qui signifie plus de scripts, plus de feuilles de style, plus d'images et de Flash dans la page. Un nouveau visiteur de votre page peut avoir à faire plusieurs requêtes HTTP, mais en utilisant l'en-tête Expire, vous rendez ces composants cachables. Cela évite les requêtes HTTP inutiles sur les pages vues ultérieurement. Les en-têtes Expire sont le plus souvent utilisés avec des images; mais ils doivent être utilisés sur tous les composants, y compris les scripts, les feuilles de style et les composants Flash.

Les navigateurs (et les proxies) utilisent un cache afin de réduire le nombre et la taille des requêtes HTTP, ce qui rend les pages Web plus rapide au nioveau chargement. Un serveur web utilise l'en-tête Expire dans la réponse HTTP pour indiquer au client combien de temps un composant peut être mis en cache. Une date lointaine dans l'en-tête Expire indique au navigateur que cette réponse reste valide jusqu'au 15 Avril 2010.

	Expires: Thu, 15 Apr 2010 20:00:00 GMT

Si votre serveur est Apache, utilisez la directive ExpiresDefault qui permet de fixer une date d'expiration par rapport à la date actuelle. Cet exemple de directive ExpiresDefault fixe la date d'expiration dans 10 ans à partir du moment de la demande.

	ExpiresDefault "access plus 10 years"

Gardez à l'esprit, si vous utilisez un en-tête Expire loin dans le futur que vous devrez changer le nom de fichier du composant à chaque fois que celui-ci est modifié. Chez Yahoo!, un numéro de version est intégré dans le nom de fichier du composant, par exemple yahoo_2.0.6.js.

Utiliser un en-tête Expire loin dans le futur affecte uniquement les pages vues d'un utilisateur revenant sur votre site. Cela n'a aucun effet sur ​​le nombre de requêtes HTTP nécessaires quand un utilisateur visite votre site pour la première fois et que la mémoire cache du navigateur est vide. Par conséquent, l' impact de cette amélioration de la performance dépend de la fréquence d'utilisateurs réguliers. Ceux-ci possèdent en effet un cache amorcé. (Un «cache amorcé» contient déjà tous les éléments de la page.) Nous [avons mesuré ceci chez Yahoo!](http://yuiblog.com/blog/2007/01/04/performance-research-part-2/) et trouvé que le nombre de pages vues avec un cache amorcé est de 75 à 85 %. En utilisant un en-tête Expire loin dans le futur, vous augmentez le nombre de composants qui sont mis en cache par le navigateur et re-utilisé sur les vues ultérieures de pages sans envoyer un seul octet sur ​​la connexion Internet de l'utilisateur.