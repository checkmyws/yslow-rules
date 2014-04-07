---
weight: 160
id: "ypostload"
title: "Post-charger les composants"
yahoo: "http://developer.yahoo.com/performance/rules.html#postload"
tags: ["content"]
locales: "fr"
notoc: "true"
description: ""
---

Vous pouvez jeter un oeil de plus près à votre page et vous vous demandez : «Qu'est-ce qui est absolument nécessaire afin d'initier le rendu de la page?». Le reste du contenu et des composants peut attendre.

JavaScript est un candidat idéal pour la séparation avant et après l'événement onload. Par exemple, si vous avez du code JavaScript et des bibliothèques qui font du glisser-déposer et autres animations, celles-ci peuvent attendre. Glisser des éléments sur la page vient après le rendu initial. Autres endroits pour chercher des candidats pour le post chargement : le contenu caché (il apparaît après une action de l'utilisateur) et les images en-dessous de la ligne de flottaison.

Les outils pour vous aider dans votre effort : [YUI Image Loader](http://developer.yahoo.com/yui/imageloader/) vous permet de retarder les images sous la ligne de flottaison et le [YUI Get Utility](http://developer.yahoo.com/yui/get/) est un moyen facile d'inclure du JS et des CSS à la volée. Pour voir un exemple, jetez un oeil à [La page d'accueil de Yahoo!]( http://www.yahoo.com) avec le panneau réseau de Firebug activé.

C'est une bonne chose que les objectifs de performance soient en adéquation avec d'autres bonnes pratiques de développement web. Dans ce cas, l'idée d'améliorations progressives nous dit que le JavaScript, quand il est supporté, peut améliorer l'expérience utilisateur. Mais vous devez vous assurer que la page fonctionne même sans JavaScript. Ainsi, après que vous ayez fait en sorte que la page fonctionne, vous pouvez l'améliorer avec quelques scripts en post-chargement qui donneront plus de peps à celle-ci tels que le glisser-déposer et les animations.