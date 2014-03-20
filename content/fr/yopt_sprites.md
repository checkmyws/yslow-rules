---
weight: 290
id: "yopt_sprites"
title: "Optimiser les sprites CSS"
yahoo: "http://developer.yahoo.com/performance/rules.html#opt_sprites"
tags: ["images"]
locales: "fr"
notoc: "true"
description: ""
---

- Organisez les images dans l'image-objet horizontalement plutôt que verticalement donne en général un fichier de plus petite taille.
- La combinaison de couleurs similaires dans un sprite vous aide à n'utiliser que peu de couleurs, idéalement moins de 256 afin d'intégrer un PNG8.
- "Soyez mobile-friendly" et ne laissez pas de grands espaces entre les images d'un sprite. Cela n'affecte pas tant que ça la taille du fichier mais nécessite moins de mémoire au terminal utilisateur pour décompresser l'image en une carte de pixels. Une image de 100x100 représente 10000 pixels là où une image de 1000x1000 est composée de 1 millions de pixels.