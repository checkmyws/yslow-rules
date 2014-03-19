---
weight: 145
id: "yflush"
title: "Nettoyer le tampon très tôt"
yahoo: "http://developer.yahoo.com/performance/rules.html#flush"
tags: ["server"]
locales: "fr"
notoc: "true"
description: ""
---

Lorsque les utilisateurs demandent une page, il peut se passer 200 à 500 ms au niveau du serveur pour assembler la page HTML. Pendant ce temps, le navigateur est inactif, en attente des données qui vont arriver. En PHP vous avez la fonction [flush()](http://php.net/flush). Elle vous permet d'envoyer une partie de la réponse HTML afin que le navigateur puisse commencer la récupération des composants pendant que votre serveur backend est occupé avec le reste de la page HTML. L'avantage est surtout visible sur les backends occupés ou les interfaces légères.

Un bon endroit pour nettoyer le tampon est juste après la partie HEAD du document. Le code HTML contenu dans cette partie est généralement plus facile à produire et il vous permet d'inclure tout les fichiers CSS et JavaScript. Le navigateur peut commencer à charger en parallèle alors que le backend est en cours de traitement.

Exemple:

~~~
    ... <!-- css, js -->
    </head>
    <?php flush(); ?>
    <body>
      ... <!-- content -->
~~~

[Yahoo! search](http://search.yahoo.com) a été un des pionniers au niveau recherche sur les tests utilisateurs afin de prouver les avantages de l'utilisation de cette technique .