---
weight: 10
id: "ycdn"
title: "Usar Content Delivery Network"
yahoo: "http://developer.yahoo.com/performance/rules.html#cdn"
discuss: "http://developer.yahoo.net/blog/archives/2007/04/high_performanc_1.html"
tags: ["server"]
locales: "es"
notoc: "true"
description: ""
---

La proximidad del usuario a su servidor web tiene un impacto sobre los tiempos de respuesta. El despliegue de su contenido a través de múltiples servidores dispersos geográficamente hará que sus páginas se carguen más rápido desde la perspectiva del usuario. Pero ¿por dónde debe empezar?

Como primer paso para aplicar esta técnica, no intente rediseñar su aplicación web para trabajar en una arquitectura distribuida. Dependiendo de la aplicación, la modificación de la arquitectura podría incluir enormes tareas como la sincronización del estado de la sesión y replicar la base de datos del servidor a través de transacciones de lugares. Los intentos de reducir la distancia entre los usuarios y su contenido podría retrasarse, o no llegar nunca a los usuarios, esta aplicación es una etapa de la arquitectura.

Recuerde que el 80-90% de los visitantes pierden tiempo mientras se descargan todos los componentes en la página: imágenes, hojas de estilo, scripts, Flash, etc. Ésta es la la regla de oro del rendimiento. En lugar de comenzar con la tediosa prática de rediseñar la arquitectura de su aplicación, es mejor desplegar primero el contenido estático. Ésto, aparte de conllevar una fantástica reducción del tiempo de descarga, se facilita gracias a las Content Delivery Network.

Un Content Delivery Network (CDN) o Red de distribución de contenido, en español, es un grupo de servidores web distribuidos en varias ubicaciones para ofrecer contenidos de manera más eficiente a los usuarios. El servidor seleccionado para la entrega de contenido a un usuario concreto es típicamente basado en una medida de aproximación. Por ejemplo, el servidor con el menor número de saltos o el servidor con más rápida respuesta es el elegido.

Algunas empresas poseen sus propias CDN, dado que es menos costoso que usar un proveedor del servicio. Para los sitios web de pequeñas empresas públicas o privadas, el costo del servicio CDN puede ser prohibitivo, pero dado que su objetivo principal es crecer y abarcar cada vez más audiencia, una CDN es necesaria para lograr una rápida respuesta. El cambio a una CDN es relativamente fácil, lo que mejorará dramáticamente la velocidad de su sitio web.