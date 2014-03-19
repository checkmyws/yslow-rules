---
weight: 90
id: "yminify"
title: "Minimifier JavaScript et CSS"
yahoo: "http://developer.yahoo.com/performance/rules.html#minify"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_8.html"
tags: ["javascript","css"]
locales: "fr"
notoc: "true"
description: ""
---

La minification consiste à enlever des caractères inutiles à partir du code afin de réduire sa taille; ce qui améliore les temps de chargement. Lorsque le code est minifié, tous les commentaires sont supprimés ainsi que les caractères inutiles ou blancs (espace, saut de ligne, tabulations). Dans le cas du langage JavaScript, ceci améliore les performances de temps de réponse en raison de la taille du fichier téléchargé plus réduite. Deux outils populaires pour minifier le code JavaScript sont [JSMin](http://crockford.com/javascript/jsmin) et [YUI Compressor](http://developer.yahoo.com/yui/compressor/). Le compresseur YUI PEUT aussi minifier les CSS.

L'obfuscation est une alternative qui peut être appliqué au code source. Plus complexe que la minification et donc plus susceptibles de générer des bugs à la suite de l'étape de brouillage proprement dite. Dans une enquête sur dix sites web américains, la minification permet une réduction de taille de 21 % contre 25% pour l'obfuscation. Bien que l'obfuscation ai une réduction de taille supérieure, il reste moins risqué de minifier le JavaScript.

En plus de minifier les scripts externes et les feuilles de styles, les blocs en ligne `<script>` et `<style>` peuvent et doivent également être minifiés. Même si vous gzippez les scripts et les styles, le sminifier en plus permet encore de réduire la taille de 5% ou plus. Vu que l'utilisation et la taille de code JavaScript et de feuilles de style CSS augmente, les économies réalisées par minification du code sont plus grandes.
