---
weight: 30
id: "ycompress"
title: "Compresser avec Gzip les composants"
yahoo: "http://developer.yahoo.com/performance/rules.html#gzip"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_3.html"
tags: ["server"]
locales: "fr"
notoc: "true"
description: ""
---

Le temps nécessaire pour transférer une requête HTTP et la réponse sur le réseau peut être sensiblement réduit par les décisions prises par les ingénieurs front-end. Il est vrai que la vitesse de la bande passante de l'utilisateur final, le fournisseur de services Internet, la proximité des points de peering de change, etc. sont hors du contrôle de l'équipe de développement. Mais il y a d'autres variables qui influent le temps de réponse. La compression réduit les temps de réponse en diminuant la taille de la réponse HTTP.

À partir de HTTP/1.1, les clients Web indiquent support pour la compression de l'en-tête Accept-Encoding dans la requête HTTP .

	Accept-Encoding: gzip, deflate

Si le serveur Web voit cet en-tête dans la demande , il peut comprimer la réponse en utilisant l'une des méthodes énumérées par le client . Le serveur web informe le client Web de cette via l'en-tête Content-Encoding dans la réponse.

	Content-Encoding: gzip

Gzip est la méthode de compression la plus populaire et efficace pour le moment. Il a été développé par le projet GNU et normalisé par la [RFC 1952](http://www.ietf.org/rfc/rfc1952.txt). Le seule autre format de compression que vous êtes susceptible de voir est deflate, mais il est moins efficace et moins populaire .

Utiliser Gzip diminue généralement la taille de la réponse d'environ 70%. Environ 90 % du trafic Internet d'aujourd'hui se déplace à travers des navigateurs qui prétendent supporter gzip. Si vous utilisez Apache, le module pour configurer gzip dépend de votre version : Apache 1.3 utilise [mod\_gzip](http://sourceforge.net/projects/mod-gzip/) alors qu'Apache 2.x utilise [mod\_deflate](http://httpd.apache.org/docs/2.0/mod/mod_deflate.html).

Il ya des problèmes connus avec les navigateurs et les proxies qui peuvent causer une incohérence entre ce que le navigateur attend et ce qu'il reçoit en contenu compressé. Heureusement, ces cas diminuent au fur et à mesure que disparaissent les plus anciens navigateurs. Les modules Apache peuvent aider en ajoutant l'en-tête de réponse Vary automatiquement.

Les serveurs décident quoi gzipper en se basant sur le type de fichier, mais ils sont généralement trop restreints dans ce qu'ils décident de compresser. La plupart des sites web gzip leurs documents HTML. Il est également intéressant de gzipper vos scripts et les feuilles de style, ce que ne font pas de nombreux sites Web. En fait, il est intéressant de compresser toute réponse de texte, y compris XML et JSON. Les images et les fichiers PDF ne doivent pas être compressés au format gzip, car ils le sont déjà par d'autres moyens. Essayer de les gzipper entraîne non seulement un gaspillage de CPU mais peut potentiellement augmenter la taille des fichiers résultants.

Gzipper autant que possible les fichiers est un moyen facile de réduire le poids de la page et d'accélérer l'expérience utilisateur.