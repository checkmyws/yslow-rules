---
weight: 100
id: "yredirects"
title: "Evitar redirecciones"
yahoo: "http://developer.yahoo.com/performance/rules.html#redirects"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_9.html"
tags: ["contenido"]
locales: "es"
notoc: "true"
description: ""
---

Las redirecciones web se consiguen utilizando los códigos de estado 301 y 302. He aquí un ejemplo de las cabeceras HTTP 301 en una respuesta:

~~~
HTTP/1.1 301 Moved Permanently
Location: http://example.com/newuri
Content-Type: text/html
~~~

El navegador automáticamente lleva al usuario a la página especificada en el campo `Location`. Toda la información necesaria para el redireccionamiento está en el encabezado. A pesar de sus nombres, ni un archivo con 301 ni uno con 302 es cacheado en la práctica a menos que tenga otras cabeceras, como `Expires` o `Cache-Control`. La etiqueta meta refresh y JavaScript son otras formas de dirigir a los usuarios a una URL diferente, pero si usted tiene que hacer un redireccionamiento, la técnica preferida es utilizar el estándar de códigos de estado HTTP 3xx, principalmente para garantizar que el botón Atrás funciona correctamente.

Lo principal a recordar es que redirecciones frenan la experiencia del usuario. La utilización de un redireccionamiento obliga al navegador a buscar nuevamente la página web perdiendo un tiempo, a veces, notable.

Uno de los errores mas comunes de los desarrolladores y programadores web es colocar urls a una carpeta sin la diagonal al final (/). Por ejemplo, si usted enlaza [http://astrology.yahoo.com/astrology](http://astrology.yahoo.com/astrology) desde su sitio web verá que le agrega automáticamente “/” al final, dejándola así; [http://astrology.yahoo.com/astrology](http://astrology.yahoo.com/astrology/). Esto se fija en Apache utilizando `Alias` o `mod_rewrite`, o la directiva DirectorySlash si estás usando Apache handlers.

Conectar un sitio web viejo con uno nuevo es otra práctica común para redirecciones. Otras incluyen conectar diferentes partes de sitios weby redireccionar al usuario basándose en ciertas condiciones (tipo de navegador, tipo de cuenta de usuario, etc). Usar una redirección para conectar dos sitios web es simple y requiere poco código adicional. Aunque usando redirecciones en estas situaciones reduce la complejidad para los desarrolladores, ello disminuye la experiencia del usuario. Alternativas para esto incluyen el uso de redirecciones usando Alias y mod_rewrite si las dos rutas físicas del código están alojadas en el mismo servidor. Si un cambio del nombre de dominio es la causa del uso de redirecciones, una alternativa es crear un CNAME (un registro DNS que crea un alias apuntando desde uno de los dominios a otro) en combinación con `Alias` o `mod_rewrite`.