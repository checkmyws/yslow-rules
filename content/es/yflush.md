---
weight: 145
id: "yflush"
title: "Vaciar Buffer temprano"
yahoo: "http://developer.yahoo.com/performance/rules.html#flush"
tags: ["server"]
locales: "es"
notoc: "true"
description: ""
---

Cuando los usuarios solicitan una página, se puede tomar de 200 a 500 milisegundos para el servidor crear el código html. Durante este tiempo, el navegador está inactivo ya que espera la llegada de los datos. En PHP tienes la función [flush()](http://php.net/flush). La que te permite enviar una respuesta HTML parcialmente lista al navegador así el navegador puede comenzar a buscar los componentes mientras que en el fondo está ocupado con el resto de la página HTML. El beneficio se encuentra principalmente en fondos ocupados o portadas ligeras.

Un buen lugar para considerar esto es inmediatamente después de la cabecera, es generalmente más fácil de producir y permite incluir cualquier cualquier archivo CSS o Javascript para que el navegador comience a buscar en paralelo mientras en el fondo está aun procesando.

Ejemplo:

~~~
    ... <!-- css, js -->
    </head>
    <?php flush(); ?>
    <body>
      ... <!-- content -->
~~~

[Yahoo! search](http://search.yahoo.com) pioneered research and real user testing to prove the benefits of using this technique.