---
weight: 150
id: "yxhrmethod"
title: "Usar GET para peticiones AJAX"
yahoo: "http://developer.yahoo.com/performance/rules.html#ajax_get"
tags: ["server"]
locales: "es"
notoc: "true"
description: ""
---

El equipo de [Yahoo! Mail](http://mail.yahoo.com) que cuando se usaba `XMLHttpRequest`, el POST es implementado en los navegadores en un proceso de dos pasos: enviando las cabeceras primero, luego se envían los datos. Por lo tanto es mejor usar GET, el cual solo envía un paquete (a menos que tengas un montón de cookies). La longitud máxima en Internet Explorer es de 2kb, de modo que si necesitas enviar mas de 2kb no será capaz de usar GET.

Un lado interesante es que el envío mediante POST sin ningún dato, hace que se comporte como GET. Basado en las [especificaciones HTTP](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html), GET es para recuperar la información, así tiene sentido (semánticamente) el usar GET sólo para la solicitudes de datos, a diferencia del envío de datos para ser guardados en el servidor.