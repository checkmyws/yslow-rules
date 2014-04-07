---
weight: 230
id: "ycookiefree"
title: "Componentes en dominio libre de cookies"
yahoo: "http://developer.yahoo.com/performance/rules.html#cookie_free"
tags: ["cookie"]
locales: "es"
notoc: "true"
description: ""
---

Cuando el navegador hace una petición de una imagen estática y envía cookies junto a la petición, el servidor no tiene ningún uso para esas cookies. Por lo que se crean sin obtener un beneficio. Usted debería asegurarse de que los componente estáticos son pedidos libres de cookies. Abra un subdominio y ahí aloje los componentes estáticos.

Si su dominio es `www.midominio.com`, usted puede alojar los componentes estáticos en `static.midominio.com`. Sin embargo, si usted ya ha establecido las cookies en el dominio superior `midominio.com` frente a `www.midominio.com`, entonces todas las llamadas a `static.midominio.com` se incluirán en estas cookies. En este caso, usted puede comprar un nuevo dominio,para alojar sus componentes estáticos ahí, y mantener este dominio sin cookies.

Otros beneficios de alojar los componentes estáticos en un dominio libre de cookies es que algunos proxys pueden rechazar el cacheo de los componentes que son pedidos junto con las cookies. En una nota relacionada, si usted se pregunta si debería usar `midominio.com` o `www.midominio.com` para su página de inicio, considere el impacto de la cookie. El omitir las www no le deja otra opción que escribir las cookies para `*.midominio.com`, por lo que por razones de rendimiento es mejor utilizar las www. y escribir las cookies para ese subdominio.