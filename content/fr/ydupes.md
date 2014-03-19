---
weight: 110
id: "ydupes"
title: "Supprimer les scripts en doublons"
yahoo: "http://developer.yahoo.com/performance/rules.html#js_dupes"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_10.html"
tags: ["javascript","css"]
locales: "fr"
notoc: "true"
description: ""
---

Inclure le même fichier JavaScript à deux reprises dans une seule page nuit à la performance. Ce n'est pas aussi rare qu'on pourrait le penser. Un examen des dix meilleurs sites web américains montre que deux d'entre eux contiennent un script dupliqué. Deux principaux facteurs augmentent les chances d'un script d'être dupliqué dans une page Web: la taille de l'équipe et le nombre de scripts. Lorsque cela arrive, le doublon met à mal les performances en créant des requêtes HTTP inutiles et l'exécution de code JavaScript perdu.

Des requêtes HTTP inutiles se produisent dans Internet Explorer mais pas dans Firefox. Dans Internet Explorer, si un script externe est inclus deux fois et n'est pas mis en cache, il génère deux requêtes HTTP lors du chargement de la page. Même si le script est mis en cache, des requêtes HTTP supplémentaires se produisent lorsque l'utilisateur recharge la page.

En plus de générer des requêtes HTTP inutiles, du temps est perdu à interpréter le script plusieurs fois. Cette exécution JavaScript redondante se passe dans Firefox et Internet Explorer, indépendamment du fait que le script est mis en cache.

Une façon d'éviter d'inclure accidentellement le même script deux fois est de mettre en place un module de gestion de scripts dans votre système de templates. La manière typique d'inclure un script est d'utiliser la balise SCRIPT dans votre page HTML.

	<script type="text/javascript" src="menu_1.0.17.js"></script>

Une alternative en PHP serait de créer une fonction appelée `insertScript`.

	<?php insertScript("menu.js") ?>

En plus de prévenir le même script d'être inséré à plusieurs reprises, cette fonction pourrait traiter d'autres choses avec des scripts, tels que le contrôle des dépendances et l'ajout de numéros de version pour les noms de fichiers de scripts. Ceci afin de bénéficer des en-têtes Expire.
