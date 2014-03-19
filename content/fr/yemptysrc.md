---
weight: 340
id: "yemptysrc"
title: "Éviter les balises image src vides"
yahoo: "http://developer.yahoo.com/performance/rules.html#emptysrc"
tags: ["server"]
locales: "fr"
notoc: "true"
description: ""
---

Il est plus fréquent qu'on ne le croit de trouver des images avec un attribut **src** vide. Ceci apparaît sous deux formes:

1. En HTML

~~~
<img src="">
~~~

2. En JavaScript

~~~
var img = new Image();
img.src = "";
~~~

Les deux formes provoquent le même effet: Le navigateur fait une nouvelle demande à votre serveur.

- **Internet Explorer** fait une demande pour le répertoire dans lequel se trouve la page.
- **Safari et Chrome** font la demande à la page elle-même.
- **Firefox** 3 et les versions antérieures se comportent comme Safari et Chrome, mais la version 3.5 a abordé cette question dans le rapport de [[bug 444931]](https://bugzilla.mozilla.org/show_bug.cgi?id=444931) et n'envoie donc plus de nouvelle demande.
- **Opéra** ne fait rien.

**Pourquoi est-ce un mauvais comportement ?**

1. Paralyse vos serveurs en envoyant une grande quantité de trafic inattendu, surtout pour les pages qui obtiennent des millions de pages vues par jour.
2. Perte de puissance de calcul pour générer une page qui ne sera jamais vue.
3. Données de l'utilisateur éventuellement corrompues. Si vous suivez l'état de la requête, que ce soit par cookies ou d'une autre manière, vous avez la possibilité de détruire les données. Même si la demande d'image ne ​​renvoie pas d'image, tous les en-têtes sont lus et acceptés par le navigateur, y compris tous les cookies. Alors que le reste de la réponse est rejetée, des dégâts peuvent déjà être faits.

La cause de ce comportement est la façon dont la résolution URI est effectuée dans les navigateurs. Ce comportement est défini dans la RFC 3986 - Uniform Resource Identifiers. Quand une chaîne vide est rencontrée comme URI, celui-ci est considéré comme un URI relatif et est résolu selon l'algorithme défini dans la section 5.2. Cet exemple spécifique, une chaîne vide, est cotée à la section 5.4. Firefox, Safari et Chrome ont tous résolus ce problème de chaîne vide correctement dans leur cahier des charges, alors que Internet Explorer le résoud de façon incorrecte, apparemment en ligne avec une version antérieure de la spécification, RFC 2396 - Uniform Resource Identifiers (rendue obsolète par la RFC 3986). Ainsi, techniquement, les navigateurs font ce qu'ils sont censés faire pour résoudre les URI relatifs. Le problème est que dans ce contexte, la chaîne vide est clairement involontaire.

À la section 4.8.2, HTML5 ajoute à la description de l'attribut src de la balise l'indication aux navigateurs de ne pas faire une demande supplémentaire:

> L'attribut src doit être présent et doit contenir une URL valide de référencement d'une image, éventuellement animée mais non-interactive, ni paginée ou scriptée. Si l'URI de base de l'élément est la même que l'adresse du document, alors la valeur de l'attribut src ne peut pas être une chaîne vide .

Heureusement, les navigateurs n'auront plus ce problème à l'avenir. Malheureusement, il n'existe pas de telle clause pour `<script src="">` et `<lien href="">`. Peut-être qu'il est encore temps de faire cet ajustement pour s'assurer que les navigateurs n'implémentent ce comportement pas accident.

Cette règle a été inspiré par le gourou JavaScript Yahoo! Nicolas C. Zakas. Pour plus d'informations, consultez son article "[Empty image src can destroy your site](http://www.nczonline.net/blog/2009/11/30/empty-image-src-can-destroy-your-site/)".