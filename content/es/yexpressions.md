---
weight: 60
id: "yexpressions"
title: "Evitar expresiones CSS"
yahoo: "http://developer.yahoo.com/performance/rules.html#css_expressions"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_6.html"
tags: ["css"]
locales: "es"
notoc: "true"
description: ""
---

Las expresiones CSS son una poderosa (y peligrosa) manera de establecer propiedades CSS dinámicamente. Están soportadas por Internet Explorer, desde la versión 5. Como por ejemplo, el color de fondo puede ser alternado cada hora usando expresiones CSS.

	background-color: expression( (new Date()).getHours()%2 ? "#B8D4FF" : "#F08A00" );

Como se muestra aquí, el método `expresión` acepta una expresión JavaScript. La propiedad CSS se establece en el resultado de la evaluación de la expresión JavaScript. El método expresión es ignorado por otros navegadores, por lo que es útil para ajustar las propiedades de Internet Explorer necesarias para crear una experiencia consistente a través de navegadores.

El problema con las expresiones que son evaluadas más frecuentemente de lo que la mayoría de la gente espera. No sólo son evaluadas cuando la página se renderiza y redimensiona, sino que además cuando la página es navegada e incluso cuando el usuario mueve el cursor del ratón sobre la misma. Añadir un contador a la expresión CSS nos permite monitorear cuándo y como una expresión CSS es evaluada. Moviendo el cursor del ratón alrededor de la página puede fácilmente generar más de 10.000 evaluaciones.

Una forma de reducir el número de veces en que son evaluadas tus expresiones CSS es usar una sola vez las expresiones, donde la primera vez en que la expresión se evalúa se establece el estilo de propiedad a un valor explícito, que sustituye a la expresión CSS. Si el estilo de propiedad debe ser dinámico durante toda la vida útil de la página, se puede enfocar una alternativa con eventos en lugar de las expresiones CSS. Si es irreversible el utilizar expresiones CSS, recuerde que pueden ser evaluadas en miles de veces y podría afectar el rendimiento de su página.