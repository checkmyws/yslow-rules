---
weight: 40
id: "ycsstop"
title: "Hojas de estilo en la cabecera"
yahoo: "http://developer.yahoo.com/performance/rules.html#css_top"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_4.html"
tags: ["css"]
locales: "es"
notoc: "true"
description: ""
---

Tras bastidores, los ingenieros se preocupan por el rendimiento deseado en una página de carga progresiva; eso es, nosotros queremos desplegar en el navegador cualquier contenido lo más pronto *posible*. Ésto es especialmente importante en páginas con mucho contenido con usuarios con una conexión lenta.

La importancia de proporcionar a los usuarios información visual, tales como indicadores de progreso, ha sido bien investigada y documentada. En nuestro caso la misma página HTML es el indicador de progreso! Cuando el navegador carga la página, aparece progresivamente la cabecera, la barra de navegación, el logotipo en la parte superior, etc. sirven como retroalimentación visual para el usuario que está a la espera. Esto mejora la experiencia del usuario.

El problema de poner las hojas de estilo en la parte inferior del documento es que se anula la carga progresiva en muchos navegadores como Internet Explorer. Estos navegadores bloquean el renderizado para evitar tener que redefinir los elementos de la página si sus estilos cambian, el usuario estaría recibiendo una página en blanco.

La [Especificación HTML](http://www.w3.org/TR/html4/struct/links.html#h-12.3) establece claramente que las hojas de estilo se incluirán en la sección HEAD de la página: “A diferencia de A, [LINK] sólo pueden aparecer en la sección HEAD de un documento, aunque puede aparecer cualquier número de veces.” Ninguna de las alternativas, la pantalla en blanco o las animaciones flash sin estilos, valen la pena arriesgarse. La solución óptima es seguir la especificación HTML y cargar sus hojas de estilo en el HEAD.