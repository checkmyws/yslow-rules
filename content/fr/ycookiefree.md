---
weight: 230
id: "ycookiefree"
title: "Utiliser des domaines sans cookies pour les composants"
yahoo: "http://developer.yahoo.com/performance/rules.html#cookie_free"
tags: ["cookie"]
locales: "fr"
notoc: "true"
description: ""
---

Lorsque le navigateur envoie une requête pour une image statique et envoie un/des cookie(s) avec la demande, le serveur n'a pas l'utilité de ces cookies. Ils créent du trafic réseau sans raison valable. Vous devez vous assurer que les composants statiques soient demandés sans cookies. Créez un sous-domaine et hébergez-y tous vos composants statiques.

Si votre domaine est `www.example.org`, vous pouvez héberger vos composants statiques sur `static.example.org`. Toutefois, si vous avez déjà configuré les cookies sur le domaine de premier niveau `example.org` par opposition à `www.example.org`, alors toutes les demandes vers `static.example.org` comprendront des cookies. Dans ce cas, vous pouvez acheter un tout nouveau domaine, y héberger vos composants statiques et garder ce nom de domaine libre de tout cookie. Yahoo! utilise `yimg.com`, YouTube utilise `ytimg.com`, Amazon utilise `image-amazon.com` et ainsi de suite.

Un autre avantage de mettre les composants statiques sur un domaine sans cookie est que certains mandataires pourraient refuser de mettre en cache les composants demandés avec des cookies. Sur une note liée, si vous vous demandez si vous devez utiliser example.org ou www.example.org pour votre page d'accueil, envisagez l'impact des cookies. Omettre www ne vous laisse pas d'autre choix que d'écrire des cookies pour `*.example.org`. Pour des raisons de performances, il est préférable d'utiliser le sous-domaine www et d'écrire les cookies sur ce sous-domaine.