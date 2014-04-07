---
weight: 250
id: "yevents"
title: "Develop Smart Event Handlers"
yahoo: "http://developer.yahoo.com/performance/rules.html#events"
tags: ["javascript"]
locales: "es"
notoc: "true"
description: ""
---

Algunas veces las páginas tienen menos respuesta a cada uno de los manejadores de *eventos adjuntados* a diferentes elementos del árbol DOM, los cuales son ejecutados con demasiada frecuencia. Esa es la razón por la que usar delegación de eventos es una buena práctica. Si tienes 10 botones dentro de un `div`, conecte un solo evento a la capa, en lugar de un manejador para cada botón. Englobe los eventos, de modo que usted pueda encontrar el evento y averiguar de qué botón se originó.

Además no es necesario esperar a la carga del evento para comenzar a hacer algo con el árbol DOM. A menudo todo lo que se necesita es que elemento al cual quiere acceder esté disponible en el árbol. Usted no necesita esperar a a que todas las imágenes se hayan descargado. El `DOMContentLoaded` es el evento que usted puede usar e lugar de onload.

For more information check the YUI theatre's ["High Performance Ajax  Applications"](http://yuiblog.com/blog/2007/12/20/video-lecomte/) by  Julien Lecomte.