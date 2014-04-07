---
weight: 20
id: "yexpires"
title: "Agregar Expires o Cache-Control Header"
yahoo: "http://developer.yahoo.com/performance/rules.html#expires"
discuss: "http://developer.yahoo.net/blog/archives/2007/05/high_performanc_2.html"
tags: ["server"]
locales: "es"
notoc: "true"
description: ""
---

Esta norma tiene dos sencillos objetivos:

- Para los archivos estáticos: implementar “Never expire” como `Expires` Header para las próximas visitas.
- Para los archivos dinámicos: usa el `Cache-Control` Header mas apropiado para ayudar al navegador en las llamadas HTTP.

Los diseños de las páginas web se enriquecen cada vez más, lo cual representa más scripts, hojas de estilo, imágenes y animaciones Flash en el contenido. Una visita por primera vez a la página puede contener muchas llamadas HTTP, pero usando un Header Expires permitirá que esos componentes se guardan en la cache. Esto evita llamadas HTTP innecesarias en subsecuentes visitas. Los Expires Headers se usan muy a menudo con las imágenes, pero se debería usar con todos los componentes incluyendo scripts, hojas de estilo y animaciones Flash.

Los navegadores (y proxies) usan la caché para reducir el número y el tamaño de las peticiones HTTP, permitiendo que la página web cargue más rápido. Un servidor web utiliza las Expires Header en las respuestas HTTP para comunicarle al cliente cuánto tiempo puede estar un componente en la caché. Ésta es una Expires Header con mucha duración, diciéndole al navegador que esta respuesta no caducará hasta el 15 de Abril del 2010.

	Expires: Thu, 15 Apr 2010 20:00:00 GMT

Si tu servidor es Apache, use la directiva ExpiresDefault para determinar una fecha de expiración relativa a la fecha actual. Este ejemplo de la directiva ExpiresDefault establece la fecha de expiración a 10 años a partir del momento de la petición.

	ExpiresDefault "access plus 10 years"

Recuerda, si usas una Expires header con mucha duración, debes cambiar el nombre del archivo del componente cada vez que lo modifiques.

Usando una Expires header de larga duración, sólo afecta a las páginas vistas después de que un usuario ha visitado su sitio. No tiene ningún efecto en el número de peticiones HTTP cuando un usuario visita su sitio por primera vez y la caché del navegador está vacía. Por lo tanto, la mejora del rendimiento depende en medida de la frecuencia en que sus usuarios visitan sus páginas con una primed cache. (Una “primed cache” ya contiene la totalidad de los componentes en la página.) El usar una Expires header de larga duración, le incrementará el número de componentes que son cacheables por el navegador y reutilizarlos en posteriores visitas a la página, sin necesidad de enviar un solo byte al cliente.

