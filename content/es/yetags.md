---
weight: 120
id: "yetags"
title: "Configurar ETags"
yahoo: "http://developer.yahoo.com/performance/rules.html#etags"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_11.html"
tags: ["server"]
locales: "es"
notoc: "true"
description: ""
---

Entity tags (ETags) son un mecanismo que servidores y navegadores usan para determinar si el componente guardado en la caché del navegador coincide con el del servidor de origen. (Una “entidad” es otra palabra, un “componente”: imágenes, scripts, hojas de estilo, etc.) las ETags se han creado para proveer un mecanismo para validar entidades, que es más flexible que la fecha de modificación. Una ETag es una cadena que identifica de forma exclusiva una versión específica de un componente. El servidor de origen especifica el componente usando la cabecera `ETag`.

~~~
HTTP/1.1 200 OK
Last-Modified: Tue, 12 Dec 2006 03:03:59 GMT
ETag: "10c24bc-4ab-457e1c1f"
Content-Length: 12195
~~~

Luego, si el navegador tiene que validar un componente, utiliza la cabecera `If-None-Match` para traspasar la ETag de regreso al servidor de origen. Si la ETag enviada, devuelve un código 304 es retornada reduciendo la respuesta en 12195 bytes para este ejemplo.

~~~
GET /i/yahoo.gif HTTP/1.1
Host: us.yimg.com
If-Modified-Since: Tue, 12 Dec 2006 03:03:59 GMT
If-None-Match: "10c24bc-4ab-457e1c1f"
HTTP/1.1 304 Not Modified
~~~

El problema con las ETags es que generalmente se construyen utilizando los atributos que la hacen única para un determinado sitio alojado en el servidor. Las ETags no coincidirán cuando un navegador obtiene el componente original de un servidor y luego intenta validar ese componente en un servidor distinto, una situación que es muy común en sitios web que usan un grupo de servidores para manejar las peticiones. Por defecto, tanto Apache como IIS embeben datos en la ETag que reducen drásticamente las posibilidades de éxito en la prueba de validez en sitios web con múltiples servidores.

El formato de la ETag para Apache 1.3 y 2.x es `inode-size-timestamp`. Aunque un determinado archivo puede estar en el mismo directorio a través de múltiples servidores, y tener el mismo tamaño, permisos, fecha, etc., su Inodo es diferente de un servidor a otro.

IIS 5.0 y 6.0 tienen un problema similar con las ETags. El formato para las ETags en IIS es `Filetimestamp:ChangeNumber`. Un `ChangeNumber` es un contador utilizado para realizar un seguimiento track de los cambios en la configuración de IIS. Es poco probable que el `ChangeNumber` sea el mismo en todos los sitios web alojados en un servidor IIS.

El resultado final es un ETags generado por Apache e IIS para el mismo componente no coincidirá de un servidor a otro.Si las ETags no coinciden, el usuario no recibe la pequeña respuesta 304 que las ETags han diseñado; en cambio, se obtendrá unas 200 respuestas normales con todos los datos del componente. Si usted aloja su sitio web en un solo servidor, esto no es un problema. Pero si usted tiene múltiples servidores para alojar su sitio web, y está usando Apache o IIS con la configuración predeterminada de las ETag, sus usuarios estarán ante páginas cada vez más lentas, sus servidores tendrán una sobrecarga, estará consumiendo mucho ancho de banda, y los proxies no estarán caheando el contenido eficientemente. Incluso si sus componentes tienen una `Expires header` de larga duración, una solicitud GET condicional sigue siendo realizada siempre que el usuario presione Recargar o Refrescar.

Si usted no está tomando ventaja de la flexibilidad que proporciona el modelo de validación de las ETags, es mejor que simplemente retire la ETag completamente. La cabecera `Last-Modified` header valida sobre la base de marca de tiempo del componente. Y la eliminación de la ETag reduce el tamaño de las cabeceras HTTP, tanto en la respuesta como en las solicitudes posteriores. En Apache es realmente sencillo, solo debemos añadir la siguiente línea, en nuestro archivo de configuración de Apache:

	FileETag none