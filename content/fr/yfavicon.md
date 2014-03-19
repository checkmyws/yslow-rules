---
weight: 310
id: "yfavicon"
title: "Faire un petit favicon.ico et le rendre cachable"
yahoo: "http://developer.yahoo.com/performance/rules.html#favicon"
tags: ["images"]
locales: "fr"
notoc: "true"
description: ""
---

Le favicon.ico est une image qui réside à la racine de votre serveur. C'est un mal nécessaire parce que même si vous ne vous en souciez pas, un navigateur saura toujours le demander. Il est donc préférable de ne pas répondre avec un `404 Not Found`. En outre, depuis qu'il est sur ​​le même serveur, des cookies sont envoyés chaque fois qu'il est demandé. Cette image interfère également avec la séquence de téléchargement. Par exemple dans IE, lorsque vous demandez des composants supplémentaires dans le onload, le favicon sera téléchargé avant ces composants supplémentaires.

Donc, pour pallier les inconvénients d'avoir un favicon.ico, assurez-vous de:

- Le faire petit, de préférence sous les 1K.
- Régler l'en-tête Set Expire de façon confortable pour vous (puisque vous ne pouvez pas le renommer si vous décidez de le changer). Vous pouvez probablement régler l'en-tête Expires quelques mois dans le futur. Vérifier la dernière date de modification de votre favicon.ico actuelle peut aider à faire un choix éclairé.

[ImageMagick](http://www.imagemagick.org) peut vous aider à créer de petits favicons.