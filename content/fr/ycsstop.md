---
weight: 40
id: "ycsstop"
title: "Mettre les feuilles de style en début de page"
yahoo: "http://developer.yahoo.com/performance/rules.html#css_top"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_4.html"
tags: ["css"]
locales: "fr"
notoc: "true"
description: ""
---

Dans nos recherches sur la performance chez Yahoo!, nous avons découvert que le déplacement des feuilles de style dans la partie HEAD du document rend les pages *apparemment* plus rapides à charger. C'est parce que mettre des feuilles de style dans la partie HEAD d'un document permet à la page d'être rendue progressivement.

Les ingénieurs se souciant de performance veulent une page à chargement progressif, c'est ce que nous voulons pour que le navigateur affiche n'importe quel contenu le plus rapidement possible. Ceci est particulièrement important pour les pages avec beaucoup de contenu et pour les utilisateurs de connexions Internet lentes. L'importance de donner aux utilisateurs un retour visuel, tels que des indicateurs de progrès a été bien [documenté]( http://www.useit.com/papers/responsetime.html). Dans notre cas, la page HTML est l'indicateur de progression! Lorsque le navigateur charge la page progressivement, l'en-tête, la barre de navigation, le logo en haut, etc. tous ces éléments servent de feedback visuel pour l'utilisateur qui est en attente de la page. Cela améliore l'expérience globale de l'utilisateur.

Le problème en mettant les feuilles en bas de document est l'interdiction du rendu progressif dans de nombreux navigateurs, y compris Internet Explorer. Ces navigateurs bloquent tout rendu pour éviter d'avoir à redessiner des éléments de la page si leurs styles changent. L'utilisateur est scotché une page blanche.

La [spécification HTML]( http://www.w3.org/TR/html4/struct/links.html#h-12.3 ) stipule clairement que les feuilles de style doivent être incluses dans la partie HEAD de la page. "Contrairement à la balise A, la balise [LINK] ne peut apparaître que dans la section HEAD d'un document mais peut apparaître plusieurs fois." Aucune des alternatives comme les flashs de contenus non stylés ou le grand écran blanc ne valent de prendre le risque. La solution optimale est de suivre la spécification HTML et de charger vos feuilles de style dans la partie HEAD du document.