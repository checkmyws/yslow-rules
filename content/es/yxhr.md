---
weight: 130
id: "yxhr"
title: "Ajax cacheable"
yahoo: "http://developer.yahoo.com/performance/rules.html#cacheajax"
discuss: "http://developer.yahoo.net/blog/archives/2007/09/high_performanc_12.html"
tags: ["contenido"]
locales: "es"
notoc: "true"
description: ""
---

Uno de los beneficios citados de Ajax es que provee de información visual instantánea al usuario, porque la información es traída asíncrona desde el backend del servidor web. Sin embargo, el uso de Ajax no garantiza que el usuario no se rascará la cabeza esperando el retorno de las respuestas Asíncronas de Javascript y XML. En muchas aplicaciones, independientemente de si el usuario se mantendrá o no en espera depende de cómo se utiliza Ajax. Por ejemplo en un cliente de correo basado en web, el cliente se mantendrá en espera de los resultados de una petición Ajax para encontrar todo los mensajes de correo electrónico que coincidan con sus criterios de búsqueda. Es importante recordar que”asíncrono” no implica que sea “instantáneo”.

Para mejorar el rendimiento, es importante optimizar esas repuestas Ajax. La manera más importante para mejorar el rendimiento de Ajax es hacer que esas respuestas sean cacheables como se discutió en [Agregar Expires o Cache-Control Header](#expires).

- [Compresión Gzip](#gzip) 
- [Reducir búsquedas DNS](#dns_lookups) 
- [Minimizar JavaScript](#minify) 
- [Evitar redirecciones](#redirects) 
- [Configurar ETags](#etags)

Veamos un ejemplo. Un cliente de correo basado en web 2.0, puede usar Ajax para descargar la libreta de direcciones del usuario para realizar un autocompletado. Si el usuario no ha modificado su libreta de direcciones desde la última vez que el usuario usó la aplicación, la anterior libreta de direcciones podría ser leída desde la caché si esa respuesta Ajax fue hecha cacheable con una cabecera Expires o Cache-Control de larga duración. El navegador debe ser informado de cuándo utilizar una libreta de direcciones guardada en caché versus solicitar una nueva. Esto podría hacerse mediante la adición de una fecha a la libreta de direcciones indicando la última vez que el usuario modificó su libreta de direcciones, por ejemplo `&t=1190241612`. Si la libreta de direcciones no ha sido modificada desde la última descarga, la fecha deberá ser la misma y la libreta de direcciones será leída desde la cache del navegador eliminando una petición HTTP extra. Si el usuario ha modificado su libreta de direcciones, la fecha indica que la nueva URL no se asemeja a la respuesta guardada, así el navegador solicitará las entradas actualizadas.

Aunque sus respuestas Ajax responses sean creadas dinámicamente, y pueden ser aplicables a un usuario en particular, aún pueden ser cacheadas. Haciendo así, hará que sus aplicaciones Web 2.0 apps sean más rápidas.