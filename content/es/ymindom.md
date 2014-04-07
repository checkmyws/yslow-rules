---
weight: 180
id: "ymindom"
title: "Reducir número de elementos DOM"
yahoo: "http://developer.yahoo.com/performance/rules.html#min_dom"
tags: ["content"]
locales: "es"
notoc: "true"
description: ""
---

Una página compleja quiere decir muchos bytes para descargar y además supone un lento acceso al DOM en Javascript. Ello denota la diferencia si usted repite a través de 500 o 5000 elementos DOM en la página cuando quiera añadir un manejador de eventos por ejemplo.

Un alto número de elementos DOM puede ser un síntoma de que hay algo que debe ser mejorado con la marcación de la página sin la necesidad de afectar o remover el contenido. Está usted usando tablas anidadas con fines de diseño? Está usted creando `<div>` solo para fijar problemas de diseño? Tal vez hay una mejor forma de hacer sus marcados más semánticamente.

Esta es una oportunidad para comenzar de nuevo y pensar sobre el marcado, Por ejemplo el uso de <div>solo tiene cuando sentido semántico, y no porque crea una nueva línea.

Encontrar el número de elementos DOM es sencillo, solo escriba en la consola de Firebug:
`document.getElementsByTagName('*').length`

¿Y cuántos elementos DOM se consideran como demasiados? Compruebe otras páginas similares que tienen un buen marcado. For example the [Yahoo! Home Page](http://www.yahoo.com) is a pretty busy page and still under 700 elements (HTML tags).