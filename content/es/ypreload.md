---
weight: 170
id: "ypreload"
title: "Precargar componentes"
yahoo: "http://developer.yahoo.com/performance/rules.html#preload"
tags: ["contenido"]
locales: "es"
notoc: "true"
description: ""
---

El Preload o precarga puede parecer lo opuesto a la Post-load o carga posterior, pero actualmente tiene una meta distinta. Por precargar componentes usted puede tomar ventaja del tiempo en que el navegador está inactivo y así pedir los componentes (como imágenes, estilos y scripts) que necesitará en el futuro. De esta manera cuendo el usuario visite la página siguiente, usted podría tener muchos de los componentes ya en la caché del navegador y la página le cargará mucho más rápido al usuario.

Aquí hay varios tipos de precarga:

- **Precarga Incondicional** – tan pronto como carga la página, puedes continuar y obtener algunos componentes extra. Dele un vistazo a google.com para un ejemplo de como una imagen sprite es pedida en la carga. Esta imagen sprite no es necesarria en la págin de inicio de google.com, pero es necesaria en las páginas consecutivas de los resultados de la búsqueda.
- **Precarga condicional** – basada en las acciones del usuario, haciendo una conjetura de la ruta del usuario y hacer una precarga en consecuencia.
- **Precargar anticipada** – precarga anticipada antes de lanzar un nuevo diseño. A menudo ocurre, que después de un rediseño oimos: “El nuevo sitio es genial, pero es más lento que antes”. Parte del problema podría ser que los usuarios estaban de visita en su antiguo sitio, con una caché llena, pero el nuevo es siempre una experiencia de caché vacía. Para mitigar este efecto secundario mediante la precarga de algunos de los componentes, antes de que incluso se ponga en marcha el nuevo diseño. Su antiguo sitio puede utilizar el tiempo del navegador y solicitar imágenes y secuencias de comandos que serán usados ​​por el nuevo sitio.