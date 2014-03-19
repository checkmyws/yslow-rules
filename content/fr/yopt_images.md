---
weight: 280
id: "yopt_images"
title: "Optimiser les images"
yahoo: "http://developer.yahoo.com/performance/rules.html#opt_images"
tags: ["images"]
locales: "fr"
notoc: "true"
description: ""
---

Quand le designer en a fini avec la création des images pour votre page web, il y a encore certaines choses que vous pouvez essayer de faire avant d'envoyer les images sur votre serveur web.

- Vous pouvez vérifier les images GIF et voir si elles utilisent une taille de palette correspondant au nombre de couleurs dans l'image. L'utilisation de [imagemagick](http://www.imagemagick.org) rend cette vérification facile en utilisant `identifier-verbose image.gif` Lorsque vous voyez une image de 4 couleurs utilisant une palette de 256 couleurs, il y a place à amélioration.
- Essayez de convertir les fichiers GIF en PNG pour voir si la taille diminue. C'est le cas plus souvent qu'on ne le croit. Les développeurs hésitent souvent à utiliser le format PNG en raison de sa prise en charge limitée dans les navigateurs. C'est maintenant du passé. Le seul vrai problème est la transparence alpha dans les couleurs vraies PNG. Mais là encore, GIF ne ne fait pas mieux et ne prend pas en charge la transparence variable. Donc, tout ce que GIF peut faire, une palette PNG (PNG8) peut le faire (sauf pour les animations). Cette simple commande `imagemagick` donne un PNG totalement sûr à utiliser: `convert image.gif image.png` " Tout ce que nous disons, c'est donnez une chance au PiNG !"
- Exécutez [pngcrush](http://pmt.sourceforge.net/pngcrush/) ou tout autre outil d'optimisation PNG sur tous vos PNG. Exemple: `pngcrush image.png -rem alla -reduce -brute result.png`
- Exécutez `jpegtran` sur tous vos fichiers JPEG. Cet outil effectue des opérations JPEG sans perte comme la rotation et peut également être utilisé pour optimiser et supprimer commentaires et autres informations inutiles (telles que les informations EXIF) de vos images. `jpegtran -copy none -optimize -perfect src.jpg dest.jpg`.