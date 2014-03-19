---
weight: 250
id: "yevents"
title: "Développer des gestionnaires d’événements intelligents"
yahoo: "http://developer.yahoo.com/performance/rules.html#events"
tags: ["javascript"]
locales: "fr"
notoc: "true"
description: ""
---

Parfois, les pages sont perçues comme moins réactives à cause des trop nombreux gestionnaires d'événements attachés aux différents éléments de l'arborescence DOM et qui sont ensuite exécutés trop souvent. C'est pourquoi l'utilisation d'une *délégation d'événement* est une bonne approche. Si vous avez 10 boutons à l'intérieur d'un `div`, attachez un seul gestionnaire d'événements sur le div au lieu d'un gestionnaire pour chaque bouton. Les événements vont survenir afin que vous soyez en mesure de capturer l'événement et déterminer de quel bouton il provient.

Vous n'avez pas besoin d'attendre l'événement onload pour commencer à faire quelque chose avec l'arborescence DOM. Souvent, tout ce dont vous avez besoin est que l'élément auquel vous souhaitez accéder soit disponible dans l'arbre. Vous n'avez pas à attendre que toutes les images soient téléchargées. `DOMContentLoaded` est l'événement que vous pouvez envisager d'utiliser à la place de onload, mais jusqu'à ce qu'il soit disponible dans tous les navigateurs, vous pouvez utiliser l'utilitaire [YUI Event](http://developer.yahoo.com/yui/event/) qui a une méthode `onAvailable`.

Consultez le YUI theatre's ["High Performance Ajax Applications"](http://yuiblog.com/blog/2007/12/20/video-lecomte/) de Julien Lecomte pour plus d'informations.