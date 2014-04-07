---
weight: 30
id: "ycompress"
title: "Compresión Gzip"
yahoo: "http://developer.yahoo.com/performance/rules.html#gzip"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_3.html"
tags: ["server"]
locales: "es"
notoc: "true"
description: ""
---

El tiempo que le toma transferir una petición HTTP y su respuesta a través de la red pueden ser reducirse significativamente por las decisiones tomadas por los ingenieros en el “front-end”. Es cierto que el ancho de banda, proveedor de Internet, proximidad a los puntos de intercambio, etc. del usuario, están fuera del control del equipo de desarrollo. Pero hay otras variables que afectan los tiempos de respuesta. La compresión reduce los tiempos de respuesta al reducir el tamaño de las peticiones HTTP.

A partir de HTTP/1.1, los navegadores web permiten el soporte para compresión con la cabecera Accept-Encoding en la petición HTTP.

	Accept-Encoding: gzip, deflate

Si el servidor web visualiza esta cabecera en la petición, puede comprimir la respuesta usando uno de los métodos listados por el client. El servidor web notifica al cliente a través de la cabecera Content-Encoding en la respuesta.

	Content-Encoding: gzip

Gzip es el método más popular y efectivo de compresión en este momento. El mismo fue desarrollado por el proyecto GNU y estandarizado por [RFC 1952](http://www.ietf.org/rfc/rfc1952.txt). El otro formato de compresión que puede usar es Deflate, pero es menos efectivo y menos popular.

Comprimiendo con Gzip generalmente reduce el tamaño de la respuesta hasta en un 70%. Aproximadamente el 90% del tráfico en Internet hoy en día viaja a través de los navegadores que especifican el soporte para Gzip. Si usas Apache, el módulo de configuración de Gzip depende de la versión: Apache 1.3 usa [mod\_gzip](http://sourceforge.net/projects/mod-gzip/) mientras que Apache 2.x usa [mod\_deflate](http://httpd.apache.org/docs/2.0/mod/mod_deflate.html).

Existen problemas conocidos con navegadores y proxies que pueden causar un desequilibrio en lo que el navegador espera y lo que recibe en relación con el contenido comprimido. Afortunadamente, estos casos están disminuyendo dado que el uso de navegadores antiguos también disminuye Los módulos de Apache ayudan añadiendo las cabeceras apropiadas automáticamente.

Los servidores escogen qué comprimir, basado en el tipo de archivo, pero suelen ser muy limitados en lo que deciden comprimir. Muchos sitios web comprimen sus documentos HTML. También es recomendable comprimir sus scripts y hojas de estilo, pero muchos sitios web desaprovechan esta cualidad. De hecho, es útil comprimir cualquier texto incluyendo respuestas XML y JSON. Las imágenes y los documentos PDF no deben ser tratados con Gzip ya que estos ya están comprimidos. Intentar hacerlo no sólo desperdicia recursos del CPU, sino que incrementan el tamaño del archivo.

Tratar con Gzip cuanto tipo archivo sea posible, es una excelente manera de reducir el peso de la página y acelerar la carga para el usuario.