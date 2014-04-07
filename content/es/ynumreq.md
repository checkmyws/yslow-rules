---
weight: 5
id: "ynumreq"
title: "Reducir llamadas HTTP"
yahoo: "http://developer.yahoo.com/performance/rules.html#num_http"
discuss: "http://developer.yahoo.net/blog/archives/2007/04/rule_1_make_few.html"
tags: ["contenido"]
locales: "es"
notoc: "true"
description: ""
---

El 80% del tiempo de respuesta de una página web se emplea en las llamadas. La mayor parte de este tiempo se está vinculado a la descarga de todos los componentes en la página: imágenes, hojas de estilo, scripts, flash, etc. Reducir el número de componentes, a su vez, reduce el número de peticiones HTTP necesarias para visualizar la página. Esta es la clave fundamental de la rapidez de una página.

Una forma de reducir el número de componentes en la página es simplificar el diseño de la misma. Hay maneras de construir las páginas con el mismo diseño pero con menor número de peticiones HTTP, he aquí algunas técnicas para reducir el número de llamadas HTTP manteniendo un diseño rico.

**La unión de archivos** es una manera de reducir el número de peticiones HTTP mediante la combinación de todos los scripts en una única secuencia de comandos, y también la combinación de todos los CSS en una sola hoja de estilos. La combinación de los archivos es más difícil cuando los javascripts y las hojas de estilo varían de una página a otra, pero el proceso mejora los tiempos de carga.

Los [**CSS Sprites**](http://alistapart.com/articles/sprites) son un método de referencia para reducir el número de imágenes unificándolas. Combinando las imágenes de fondo con las propiedades `background-position` y `background-image` puedes mostrar trozos de una misma imagen haciendo que todas las imágenes principales de la web se llamen de una sola vez.

Los [**Image maps**](http://www.w3.org/TR/html401/struct/objects.html#h-13.6) combinan varias imágenes en una. El tamaño total es de aproximadamente el mismo, pero la reducción del número de peticiones HTTP acelera la página. El mapa de imágenes sólo funcionará si las imágenes son contiguas, como una barra de navegación. La creación de un mapa de imágenes puede ser tedioso y propenso a errores. El uso de esta técnica no es recomendable para la navegación, elija CSS Sprites antes.

**Imágenes**, utilizar los datos: URL scheme, incrustar los [`datos:` URL scheme](http://tools.ietf.org/html/rfc2397) de la imagen en la página real. Esto puede aumentar el tamaño de su documento HTML. La combinación de imágenes (en caché), las hojas de estilo es una manera de reducir las peticiones HTTP y evitar el aumento del tamaño de sus páginas. Las imágenes aún no se han apoyado en todos los principales navegadores.

Reducir el número de peticiones HTTP de su web es muy efectivo. Esta es la norma más importante para mejorar el rendimiento de los visitantes, que acceden por primera vez a la página web.
Contenido.