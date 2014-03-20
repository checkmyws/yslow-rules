---
weight: 180
id: "ymindom"
title: "Réduire le nombre d’éléments du DOM"
yahoo: "http://developer.yahoo.com/performance/rules.html#min_dom"
tags: ["content"]
locales: "fr"
notoc: "true"
description: ""
---

Une page complexe signifie plus d'octets à télécharger et aussi un accès au DOM plus lent en JavaScript. Cela fait une différence si vous parcourez 500 ou 5000 éléments DOM sur la page lorsque vous souhaitez ajouter un gestionnaire d'événements par exemple.

Un nombre élevé d'éléments DOM peut être un symptôme qu'il ya quelque chose qui devrait être amélioré avec le balisage de la page sans nécessairement supprimer du contenu. Utilisez-vous des tableaux imbriqués à des fins de mise en page ? Ajoutez-vous plus de balises `<div>` seulement pour résoudre des problèmes de mise en page ? Peut-être y a t'il une meilleure façon, sémantiquement plus correcte, de faire votre balisage.

Les [YUI CSS utilitaires](http://developer.yahoo.com/yui/) sont une aide précieuse pour la mise en page : grids.css peut vous aider pour la disposition générale, fonts.css et reset.css peuvent vous aider à redéfinir la mise en forme par défaut du navigateur. C'est une chance de repartir de zéro et de réfléchir à votre balisage, par exemple utilisez des `<div>` seulement quand c'est logique sémantiquement et non parce que la balise rend une nouvelle ligne.

Le nombre d'éléments DOM est facile à tester, il suffit de taper dans la console de Firebug : `document.getElementsByTagName('*').length`.

Et combien d'éléments DOM sont trop nombreux ? Vérifiez d'autres pages similaires possédant un bon balisage. Par exemple, [Yahoo!]( http://www.yahoo.com) est une page très chargée et reste pourtant sous la barre des 700 éléments (balises HTML).