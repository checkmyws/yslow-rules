---
weight: 60
id: "yexpressions"
title: "Éviter les expressions CSS"
yahoo: "http://developer.yahoo.com/performance/rules.html#css_expressions"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_6.html"
tags: ["css"]
locales: "fr"
notoc: "true"
description: ""
---

Les expressions CSS sont un moyen puissant (et dangereux) pour définir des propriétés CSS dynamiquement. Elles ont été prises en charge dans Internet Explorer à partir de la version 5, mais ont été rendues [obsolètes à partir de IE8]( http://msdn.microsoft.com/en-us/library/ms537634%28VS.85%29.aspx). Par exemple, la couleur de fond peut être configuré pour alterner toutes les heures en utilisant une expressions CSS:

	background-color: expression( (new Date()).getHours()%2 ? "#B8D4FF" : "#F08A00" );

Comme démontré ci-dessus, la méthode `expression` accepte une expression JavaScript. La propriété CSS est réglée sur le résultat de l'évaluation de l'expression JavaScript. La méthode `expression` est ignorée par les autres navigateurs, elle est donc utile pour définir les propriétés d'Internet Explorer nécessaires pour créer une expérience cohérente à travers les autres navigateurs .

Le problème avec les expressions, c'est qu'elles sont évaluées plus souvent que ce à quoi la plupart des gens pourraient s'attendre. Non seulement elles sont évaluées lorsque la page est rendue et redimensionnée mais aussi lorsque la page défile et même lorsque l'utilisateur déplace la souris sur la page. Ajouter un compteur à l'expression CSS nous permet de garder une trace de quand et combien de fois une expression CSS est évaluée. Déplacer la souris dans la page peut facilement générer plus de 10.000 évaluations.

Une façon de réduire le nombre de fois que votre expression CSS est évaluée est d'utiliser des expressions uniques dans le temps. La première fois l'expression est évaluée, elle définit la propriété de style pour une valeur explicite qui remplace l'expression CSS. Si la propriété de style doit être définie de façon dynamique tout au long de la vie de la page, utilisez comme approche alternative des gestionnaires d'événements au lieu d'expressions CSS. Si vous devez utiliser des expressions CSS, rappelez-vous qu'elles peuvent être évaluées des milliers de fois et pourraient affecter la performance de votre page.
