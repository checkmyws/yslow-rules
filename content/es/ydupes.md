---
weight: 110
id: "ydupes"
title: "Eliminar scripts duplicados"
yahoo: "http://developer.yahoo.com/performance/rules.html#js_dupes"
discuss: "http://developer.yahoo.net/blog/archives/2007/07/high_performanc_10.html"
tags: ["javascript","css"]
locales: "es"
notoc: "true"
description: ""
---

Cómo afecta al rendimiento incluir el mismo javascript dos veces en una misma página. Esto no es tan inusual como se cree. Una revisión del top 10 de los sitios de EE.UU. revela que dos de ellos contienen scripts duplicados. Hay dos principales factores que incrementan las probabilidades de que un script esté duplicado en una página web: tamaño del equipo y el número de scripts. Cuando esto ocurre, los scripts duplicados afectan el rendimiento creando peticiones HTTP innecesarias y desperdicia la ejecución del javascript.

Las llamadas HTTP innecesarias ocurren en Internet Explorer, mas no en Firefox. En Internet Explorer, si un script externo es incluido dos veces y no es cacheable, ello genera dos llamadas HTTP durante la carga de la página. Incluso si el script es cacheable, las peticiones extra ocurren cuando el usuario recarga la página.

Además de generar un torrente de peticiones HTTP, se pierde tiempo evaluando el script varias veces. Esta redundancia en la ejecución del Javascript ocurre tanto en Firefox como en Internet Explorer, independientemente de que el script sea o no caheable.

Una solución para evitar accidentalmente incluir dos veces el mismo guión dos veces es implementar un módulo administrador de scripts en su sistema de plantillas. La forma más común de incluir un script es mediante el uso de la etiqueta SCRIPT en su página HTML.

	<script type="text/javascript" src="menu_1.0.17.js"></script>

Una alternativa en php podría ser crear una función llamada insertScript.

	<?php insertScript("menu.js") ?>

En adición, para prevenir que el mismo script sea insertado varias veces, esta función debería manejar otros temas con los scripts, tales como añadir el número de versión al nombre del archivo para soportar Expires headers de larga duración.