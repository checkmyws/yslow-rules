---
weight: 80
id: "ydns"
title: "Réduire le nombre de résolutions DNS"
yahoo: "http://developer.yahoo.com/performance/rules.html#dns_lookups"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_7.html"
tags: ["content"]
locales: "fr"
notoc: "true"
description: ""
---

Le système de noms de domaines (DNS ) fait correspondre les noms d'hôtes en adresses IP, tout comme les carnets d'adresse font correspondre les noms des personnes à leurs numéros de téléphone. Lorsque vous tapez www.yahoo.com dans votre navigateur, un résolveur DNS contacté par le navigateur renvoie l'adresse IP de ce serveur. Les requêtes DNS ont un coût. Il faut généralement 20 à 120 millisecondes à un serveur DNS pour rechercher l'adresse IP d'un nom d'hôte donné. Le navigateur ne peut télécharger quoi que ce soit de cet hôte jusqu'à ce que la recherche DNS ne soit terminée.

Les recherches DNS sont mises en cache pour améliorer les performances. Cette mise en cache peut se produire sur un serveur de mise en cache spéciale maintenu par le réseau du FAI ou local de l'utilisateur. Il ya aussi la mise en cache qui se produit sur l'ordinateur de l' utilisateur. Les informations DNS reste dans le cache DNS du système d'exploitation (le «service Client DNS» sur Microsoft Windows). La plupart des navigateurs ont leurs propres caches distincts de la mémoire cache du système d'exploitation. Tant que le navigateur conserve un enregistrement DNS dans son propre cache, ça ne dérange pas le système d'exploitation avec une demande d' enregistrement.

Internet Explorer met en cache les recherches DNS pendant 30 minutes par défaut, tel que spécifié par le paramètre `DnsCacheTimeout` de la base des registres. Firefox met en cache les recherches DNS pendant 1 minute , contrôlé par le paramètre de configuration `network.dnsCacheExpiration`. (Fasterfox change ce paramètre à 1 heure.)

Lorsque le cache DNS du client est vide (à la fois le navigateur et le système d'exploitation), le nombre de requêtes DNS est égal au nombre de noms d'hôte uniques dans la page web. Cela inclut les noms d'hôte utilisés dans l'URL de la page, des images, des fichiers de scripts, feuilles de style, objets Flash, etc. Réduire le nombre de noms d'hôtes uniques réduit le nombre de requêtes DNS.

Réduire le nombre de noms d'hôtes uniques a le potentiel de réduire la quantité de téléchargement parallèle qui se déroule dans la page. Éviter les recherches DNS coupe les temps de réponse mais la réduction de téléchargements parallèles peut augmenter les temps de réponse. Ma ligne directrice est de diviser ces composants sur au moins deux mais pas sur plus de quatre noms d'hôtes. Il en résulte un bon compromis entre réduction des requêtes DNS et pourcentage élevé de téléchargements parallèles.
