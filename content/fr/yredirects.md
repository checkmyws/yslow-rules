---
weight: 100
id: "yredirects"
title: "Éviter les redirections"
yahoo: "http://developer.yahoo.com/performance/rules.html#redirects"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_9.html"
tags: ["content"]
locales: "fr"
notoc: "true"
description: ""
---

Les redirections sont effectuées en utilisant les codes d'état 301 et 302 . Voici un exemple d'en-têtes HTTP contenus dans une réponse 301 :

~~~
HTTP/1.1 301 Moved Permanently
Location: http://example.com/newuri
Content-Type: text/html
~~~

Le navigateur conduit automatiquement l'utilisateur vers l'URL spécifiée dans le champ `Location`. Toutes les informations nécessaires pour une redirection sont contenues dans les en-têtes. Le corps de la réponse est généralement vide. Malgré leur nom, aucune réponse 301 302 n'est mise en cache dans la pratique, sauf si des en-têtes supplémentaires, comme `Expire` ou `Cache-Control` indiquent qu'elle devrait l'être. La balise meta refresh et JavaScript sont d'autres façons de diriger les utilisateurs vers une URL différente, mais si vous devez faire une redirection, la technique préférée est d'utiliser les codes d'état HTTP 3xx standards, principalement pour s'assurer que le bouton de retour du navigateur fonctionne correctement.

La principale chose à retenir est que les redirections ralentissent l'expérience utilisateur. L'insertion d'une redirection entre l'utilisateur et le document HTML retarde tout le rendu de la page puisqu'aucun composant ne peut commencer à être téléchargé jusqu'à ce que le document HTML ne soit arrivé.

L'une des redirections les plus inutiles est aussi l'une des plus fréquentes et les développeurs web ne sont généralement pas au courant. Elle se produit quand une barre oblique (/) est absente depuis une URL qui devrait en avoir une. Par exemple, aller à [http://astrology.yahoo.com/astrology]( http://astrology.yahoo.com/astrology entraîne une réponse 301 contenant une redirection vers [http://astrology.yahoo.com / astrologie/](http://astrology.yahoo.com/astrology/) (notez le slash ajouté). Ce problème est résolu dans Apache en utilisant les directives `Alias`, `mod_rewrite` ou `DirectorySlash directive`.

La connexion d'un ancien site Web vers un nouveau est un autre usage répandu pour les redirections. D'autres incluent reliant les différentes parties d'un site Web et de diriger l' utilisateur en fonction de certaines conditions (type de navigateur, type de compte utilisateur, etc.). Utiliser une redirection pour connecter deux sites Web est simple et nécessite peu de code supplémentaire. Bien que l'utilisation des redirections dans ces situations réduit la complexité pour les développeurs, elle dégrade l'expérience utilisateur. Si la redirection a lieu sur le même serveur, il est possible d'utiliser `Alias​​` et `mod_rewrite` comme alternatives pour cette utilisation de redirections. Si un changement de nom de domaine est la cause de l'utilisation de redirections, une alternative est de créer un CNAME (un enregistrement DNS qui crée un pointage d'alias de nom d'un domaine à l'autre) en combinaison avec `Alias` ou `mod_rewrite`.
