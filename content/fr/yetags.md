---
weight: 120
id: "yetags"
title: "Configurer les ETags"
yahoo: "http://developer.yahoo.com/performance/rules.html#etags"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_11.html"
tags: ["server"]
locales: "fr"
notoc: "true"
description: ""
---

Les balises d'entités (ETAG) sont un mécanisme que les serveurs web et les navigateurs utilisent pour déterminer si le composant dans le cache du navigateur correspond à celui sur le serveur d'origine (Une «entité» est un autre mot pour désigner un «composant» : image, script, feuille de style, etc). Les ETags ont été ajoutés pour fournir un mécanisme de validation des entités qui est plus souple que la date de dernière modification. Un ETag est une chaîne qui identifie de manière unique une version spécifique d'un composant. Les seules contraintes de format sont que la chaîne soit indiquée entre guillements. Le serveur d'origine spécifie le ETag du composant en utilisant `ETag` dans l'en-tête de réponse.

~~~
HTTP/1.1 200 OK
Last-Modified: Tue, 12 Dec 2006 03:03:59 GMT
ETag: "10c24bc-4ab-457e1c1f"
Content-Length: 12195
~~~

Plus tard, si le navigateur doit valider un composant, il utilise l'en-tête `If-None-Match` pour passer le ETag vers le serveur d'origine. Si les ETags correspondent, un code de statut 304 est renvoyé, économisant 12 195 octets dans la réponse pour cet exemple.

~~~
GET /i/yahoo.gif HTTP/1.1
Host: us.yimg.com
If-Modified-Since: Tue, 12 Dec 2006 03:03:59 GMT
If-None-Match: "10c24bc-4ab-457e1c1f"
HTTP/1.1 304 Not Modified
~~~

Le problème avec les ETags est qu'ils sont généralement construits en utilisant des attributs qui les rendent uniques à un serveur, unique à l'hébergement d'un site. Les ETags ne correspondent pas lorsqu'un navigateur obtient le composant d'origine d'un serveur et essaie de valider ce composant sur ​​un serveur différent, une situation très fréquente sur ​​les sites Web qui utilisent un cluster de serveurs pour traiter les demandes. Par défaut, Apache et IIS intégrent les données dans le ETag, ce qui réduit considérablement les chances de réussite des tests de validité sur les sites Web avec plusieurs serveurs.

Le format ETag pour Apache 1.3 et 2.x est `inode-size-timestamp`. Même si un fichier peut résider dans le même répertoire sur plusieurs serveurs, et avoir la même taille, les mêmes permissions et le même horodatage, son inode est différent d'un serveur à un autre.

IIS 5.0 et 6.0 ont un problème semblable avec ETags. Le format de ETags sur IIS est `Filetimestamp:ChangeNumber`. `ChangeNumber` est un compteur utilisé pour suivre les changements de configuration de IIS. Il est peu probable que le `ChangeNumber` soit le même sur tous les serveurs IIS derrière un site web.

Le résultat final pour les ETags générés par Apache et IIS pour le même composant ne correspondent pas d'un serveur à un autre. Si les ETags ne correspondent pas, l'utilisateur ne reçoit pas la petite et rapide réponse 304 pour lesquels ils ont été prévus. Au contraire, ils obtiendront une réponse normale 200 avec toutes les données pour le composant. Si vous hébergez votre site web sur un seul serveur, ce n'est pas un problème. Mais si vous avez plusieurs serveurs d'hébergement pour votre site web, et que vous utilisez Apache ou IIS avec la configuration ETag par défaut, les utilisateurs ont des pages plus lentes, vos serveurs ont une charge plus élevée, vous consommez plus de bande passante, et les proxies ne peuvent mettre en cache votre contenu de manière efficace. Même si vos composants ont un en-tête `Expire` lointain, une requête GET conditionnelle est toujours faite à chaque fois que l'utilisateur appuie sur Recharger ou Actualiser.

Si vous ne tirez pas parti du modèle de validation flexible que les ETags fournissent, il est préférable de simplement retirer les ETag partout. L'en-tête `Last-Modified` valide sur la base de l'horodatage du composant. Retirer les ETag réduit à la fois la taille des en-têtes HTTP de la réponse et des demandes ultérieures. Cet [article du support technique Microsoft](http://support.microsoft.com/?id=922733) décrit comment supprimer les ETags. Dans Apache, cela se fait simplement en ajoutant la ligne suivante à votre fichier de configuration d'Apache :

     FileETag none